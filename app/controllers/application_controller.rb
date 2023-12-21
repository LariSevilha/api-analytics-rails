class ApplicationController < ActionController::Base
  before_action :page_info
  
  def page_info 
    
    set_meta_tags(
      site: "Alcimar Contabilidade",
      title: "Contabilidade & Administração",
      description: "This is a skeleton rails 7 descriptions for global.",
      keywords: ["Contabilidade", "Serviços Contábeis", "Gestão Financeira", "Consultoria Fiscal", "Assessoria Contábil", "Planejamento Tributário", "Auditoria Financeira", "Balanço Patrimonial", "Demonstração de Resultados", "Orçamento Empresarial", "Análise de Custos", "Consultoria Empresarial", "Administração Financeira", "Impostos", "Assessoria Fiscal", "Controle Orçamentário", "Gestão de Recursos", "Estratégias Financeiras", "Finanças Empresariais", "Relatórios Contábeis"]
    )

    image_path = Rails.root.join('app', 'assets', 'images', 'icon_w3.png')
    if File.exist?(image_path)
      set_meta_tags image_src: ActionController::Base.helpers.asset_path("icon_w3.png")
    end
  end
end