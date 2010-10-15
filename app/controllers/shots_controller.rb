class ShotsController < ApplicationController
  
  def index
    @page = real_page_number(params[:page])
    @shots = Dribbble::Shot.popular(:page => @page, :per_page => 15)
  end
  
  
  def show
    @shot = Dribbble::Shot.find(params[:id])
    @page = real_page_number(params[:page])
    @comments = @shot.comments(:page => @page)
  end

  private

  def real_page_number(param)
    param.to_i.nonzero? || 1
  end

end
