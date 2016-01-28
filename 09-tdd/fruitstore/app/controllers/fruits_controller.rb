class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all.reverse
  end
end
