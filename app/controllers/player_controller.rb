class PlayerController < ApplicationController
  
  def show
    @player = Dribbble::Player.find(params[:id])
  end
  
end
