Rails.application.routes.draw do
  root 'home#index'
 
  # Rails Admin
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  
end
