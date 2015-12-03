require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/butterflies' do
  db = SQLite3::Database.new 'butterflies.db'
  db.results_as_hash = true

  @butterflies = db.execute 'SELECT * FROM butterflies'
  erb :butterflies_index
end
