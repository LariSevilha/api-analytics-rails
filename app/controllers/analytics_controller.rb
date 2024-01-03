require 'google/analytics/data'

class AnalyticsController < ApplicationController
  def show_sessions
    credentials_path = Rails.root.join('client.json')
    credentials = JSON.parse(File.read(credentials_path))
    
    client = Google::Analytics::Data.analytics_data do |config|
      config.credentials = credentials
    end
    
    if current_user 
      property_id = current_user.property_id
    
      client = Google::Analytics::Data.analytics_data do |config|
        config.credentials = credentials
      end
      response = client.run_report(
        'property' => "properties/#{property_id}",
        'date_ranges' => [{ 'start_date' => 'yesterday', 'end_date' => 'today' }],
        'metrics' => [
          { 'name' => 'totalUsers' },
          { 'name' => 'activeUsers' },
          { 'name' => 'newUsers' },
          { 'name' => 'active7DayUsers' }
        ]
      )
    
      total_users = response.rows.sum { |row| row.metric_values[0].value.to_i }
      total_active_users = response.rows.sum { |row| row.metric_values[1].value.to_i }
      total_new_users = response.rows.sum { |row| row.metric_values[2].value.to_i }
      total_active_7_day_users = response.rows.sum { |row| row.metric_values[3].value.to_i }
    
      @totals = {
        total_users: total_users,
        total_active_users: total_active_users,
        total_new_users: total_new_users,
        total_active_7_day_users: total_active_7_day_users
      }
    else 
      redirect_to new_user_session_path, alert: 'Faça login para acessar essa página.'
    end
  end
end


