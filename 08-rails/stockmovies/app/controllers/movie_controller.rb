class MovieController < ApplicationController
  def search
  end

  def result
    movie_url = "http://omdbapi.com/?t=#{ params[:title] }"
    movie_info = HTTParty.get movie_url
    @poster = movie_info['Poster']
  end
end
