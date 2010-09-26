class ShotsController < ApplicationController
  
  def index
    @page = (params[:page] || 1).to_i
    @shots = Dribbble::Shot.popular(:page => @page, :per_page => 15)
  end
  
  def show
    @shot = Dribbble::Shot.find(params[:id])
  end
  
end
