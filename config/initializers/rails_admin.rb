require 'rails_admin/config/actions/rails_admin_drop_zone'

RailsAdmin.config do |config|
  config.asset_source = :sprockets

  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user) 

  config.actions do


    dashboard                    
    index                        
    new
    export
    bulk_delete
    show_in_app
    edit
    delete   

    drop_zone do
      only ["Album"]
    end

  end
end
