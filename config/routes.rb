Rails.application.routes.draw do     
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  root 'analytics#show_sessions' 
end