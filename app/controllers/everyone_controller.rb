class EveryoneController < ApplicationController
  
  def index
    @page = real_page_number(params[:page])
    @shots = Dribbble::Shot.everyone(:page => @page, :per_page => 15)
    @title = "everyone's shots"
    @current_layout = current_layout
  end
  
end
