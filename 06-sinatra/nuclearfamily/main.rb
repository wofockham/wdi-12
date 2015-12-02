require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/hello/:name' do
  "Hello #{ params[:name].capitalize }"
end

get '/hello/:first/:last' do
  "Hello there #{ params[:first] } #{ params[:last] }"
end

get '/hello/:first/:last/:age' do
  "Hello #{ params[:first] } #{ params[:last] }. You are #{ params[:age] }"
end

get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{ result }"
end

get '/time' do
  Time.now.to_s
end

get '/fortune' do
  `fortune -a`
end
