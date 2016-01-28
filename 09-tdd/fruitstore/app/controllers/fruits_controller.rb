class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all.reverse

    respond_to do |format|
      format.html # Fallback to the default action of rendering the index.html.erb
      format.json { render :json => @fruits }
    end
  end
end
