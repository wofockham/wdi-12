class PagesController < ApplicationController
  def home
  end

  def time
    render :text => Time.now
  end

  def random
    render :text => Random.rand(1..1000)
  end
end
