require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :home
end

get '/lookup' do
  @symbol = params[:stock_symbol].upcase

  redirect to('/') if @symbol == ''

  stock_data = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)
  @price = stock_data[@symbol].lastTrade

  erb :lookup
end