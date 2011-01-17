class ApplicationController < ActionController::Base
  protect_from_forgery
  layout :detect_browser

  rescue_from ActionController::RoutingError, ActiveRecord::RecordNotFound, :with => :render_not_found
    
  protected
      
  def render_not_found(exception)
    render :template => "errors/404", :status => 404
  end
  
  private
  MOBILE_BROWSERS = ["android", "iPod", "iPhone", "opera mini", "blackberry", "palm","hiptop","avantgo","plucker", "xiino","blazer","elaine", "windows ce; ppc;", "windows ce; smartphone;","windows ce; iemobile", "up.browser","up.link","mmp","symbian","smartphone", "midp","wap","vodafone","o2","pocket","kindle", "mobile","pda","psp","treo", "maemo"]
  
  def detect_browser
      agent = request.headers["HTTP_USER_AGENT"].downcase
      MOBILE_BROWSERS.each do |m|
        return "application" if agent.match(m)
      end
      return "browser"
  end
  
  def current_layout
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