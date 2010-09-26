class ShotsController < ApplicationController
  
  def index
    @page = params[:page].to_i.nonzero? || 1
    @shots = Dribbble::Shot.popular(:page => @page, :per_page => 15)
  end
  
  def show
    @shot = Dribbble::Shot.find(params[:id])
  end
  
end
