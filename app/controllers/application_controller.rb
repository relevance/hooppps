class ApplicationController < ActionController::Base
  protect_from_forgery
  layout :detect_browser
  before_filter :authenticate
    
  protected  
  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      username == "password" && password == "hooppps"
    end
  end
  
  def render_optional_error_file(status_code)
    status = interpret_status(status_code)
    render :template => "/errors/#{status[0,3]}.html.haml", :status => status, :layout => :detect_browser
  end
  
  private
  MOBILE_BROWSERS = ["android", "ipod", "opera mini", "blackberry", "palm","hiptop","avantgo","plucker", "xiino","blazer","elaine", "windows ce; ppc;", "windows ce; smartphone;","windows ce; iemobile", "up.browser","up.link","mmp","symbian","smartphone", "midp","wap","vodafone","o2","pocket","kindle", "mobile","pda","psp","treo"]
  
  def detect_browser
      agent = request.headers["HTTP_USER_AGENT"].downcase
      MOBILE_BROWSERS.each do |m|
        return "application" if agent.match(m)
      end
      return "browser"
  end
  
  def real_page_number(param)
    param.to_i.nonzero? || 1
  end
  
end
