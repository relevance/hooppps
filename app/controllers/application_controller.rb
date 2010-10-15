class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :authenticate
    
  protected
    
  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      username == "password" && password == "hooppps"
    end
  end
  
  def real_page_number(param)
    param.to_i.nonzero? || 1
  end

end
