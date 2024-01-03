class ApplicationController < ActionController::Base
  before_action :page_info
  
  def page_info
    set_meta_tags(
      site: "Agência W3",
      title: "Página de Início"
    )
    
    image_path = Rails.root.join('app', 'assets', 'images', 'icon_w3.png')
    if File.exist?(image_path)
      set_meta_tags image_src: ActionController::Base.helpers.asset_path("icon_w3.png")
    end
  end
end