class ShotsController < ApplicationController
  
  def index
    @shots = Dribbble::Shot.popular
  end
  
  def show
    @shot = Dribbble::Shot.find(params[:id])
  end
  
end
