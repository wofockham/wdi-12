class StockController < ApplicationController
  def search
  end

  def result
    @symbol = params[:symbol].upcase
    info = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)
    @price = info[@symbol].lastTrade
  end
end
