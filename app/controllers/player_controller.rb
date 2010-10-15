class PlayerController < ApplicationController

  def index
    if params[:id] && @player = Dribbble::Player.find(params[:id])
      redirect_to :action => "show", :id => params[:id]
    end
  end
  
  def show
    @player = Dribbble::Player.find(params[:id])
  end
  
end
