class PlayerController < ApplicationController

  def index
    if params[:id] && @player = Dribbble::Player.find(params[:id])
      redirect_to :action => "show", :id => params[:id]
    end
  end
  
  def show
    @player = Dribbble::Player.find(params[:id])
    raise ActiveRecord::RecordNotFound if @player.message == "Not found"
    @page = real_page_number(params[:page])
    @shots = @player.shots(:page => @page)
    @title = 
      if @player.name == nil
        @player.username
      else
        @player.name
    end
  end
  
  def search
    @title = 'Go to Player'
  end
  
end
