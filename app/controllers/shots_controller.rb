class ShotsController < ApplicationController
  
  def show
    @shot = Dribbble::Shot.find(params[:id])
    @page = real_page_number(params[:page])
    @comments = @shot.comments(:page => @page)
    @title = @shot.title
    @current_layout = current_layout
  end

end
