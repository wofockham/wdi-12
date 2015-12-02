require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home # Loads and serves up views/home.erb
end

get '/about' do
  erb :about
end

get '/calc/multiply/:x/:y' do
  @result = params[:x].to_f * params[:y].to_f
  erb :calc
end