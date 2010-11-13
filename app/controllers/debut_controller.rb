class DebutController < ApplicationController
  
  def index
    @page = real_page_number(params[:page])
    @shots = Dribbble::Shot.debuts(:page => @page, :per_page => 15)
    @title = "debut shots"
    @current_layout = current_layout
  end
  
end