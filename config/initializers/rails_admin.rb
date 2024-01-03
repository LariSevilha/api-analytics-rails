require 'rails_admin/config/actions/rails_admin_drop_zone'

RailsAdmin.config do |config|
  config.asset_source = :sprockets

  ### Popular gems integration

  ## == Devise ==
  config.authorize_with do
    redirect_to main_app.root_path unless current_user.admin?
  end
  config.current_user_method(&:current_user)

  ## == CancanCan ==
  # config.authorize_with :cancancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/railsadminteam/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  config.show_gravatar = false

  ## Global configuration
  config.main_app_name = ['Área administrativa']
  config.default_items_per_page = 20

  config.actions do 
    
    config.excluded_models = [""] # modelo que você deseja excluir do painel do dashboard

    ### PostCategory ###
    config.model "User" do
      navigation_label "Usuários"
      list do
        field :id
        field :name
        field :email
        field :admin
      end
      edit do
        exclude_fields :remember_created_at, :reset_password_sent_at
      end
    end
 

    dashboard                     # mandatory
    index                         # mandatory
    new do
      except ["MainBoard"]
    end    
    export
    bulk_delete
    show_in_app
    edit
    delete 
    ## With an audit adapter, you can add:
    # history_index
    # history_show

    drop_zone do
      only ["Album"]
    end

  end
end
