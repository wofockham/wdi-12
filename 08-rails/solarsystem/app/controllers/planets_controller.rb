class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find params[:id]
  end

  def new
  end

  def create
    planet = Planet.create planet_params
    redirect_to planets_path
  end

  def destroy
    planet = Planet.find params[:id]
    planet.destroy
    redirect_to planets_path
  end

  def edit
    @planet = Planet.find params[:id]
  end

  def update
    planet = Planet.find params[:id]
    planet.update planet_params
    redirect_to "/planets/#{ planet.id }"
  end

  private
  # Strong Parameters
  def planet_params
    params.require(:planet).permit(:name, :image, :orbit, :diameter, :mass, :moons)
  end
end
