class HomeController < ApplicationController
  require 'open-uri'
  require 'nokogiri'
	include PostService

  def index  
  end
end