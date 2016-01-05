class PagesController < ApplicationController
  def home
  end

  def time
    render :text => Time.now
  end

  def random
    render :text => Random.rand(1..1000)
  end

  def info
    info = {
      :time => Time.now,
      :lucky_number => Random.rand(1..1000),
      :uptime => `uptime`
    }

    render :json => info
  end
end
