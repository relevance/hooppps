class ShotsController < ApplicationController
  
  def index
    @shots = Dribbble::Shot.popular(:page => 10, :per_page => 15)
  end
  
  def show
    @shot = Dribbble::Shot.find(params[:id])
  end
  
end
