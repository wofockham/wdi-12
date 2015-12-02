require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home # Loads and serves up views/home.erb
end

get '/about' do
  erb :about
end

get '/calc' do
  @x = params[:first].to_f
  @y = params[:second].to_f

  @result = case params[:operator]
  when '+' then @x + @y
  when '-' then @x - @y
  when '*' then @x * @y
  when '/' then @x / @y
  end

  erb :calc
end









get '/calc/multiply/:x/:y' do
  @result = params[:x].to_f * params[:y].to_f
  erb :calc
end

get '/calc/add/:x/:y' do
  @result = params[:x].to_f + params[:y].to_f
  erb :calc
end