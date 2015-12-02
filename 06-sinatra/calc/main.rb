require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home # Loads and serves up views/home.erb
end
