require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# Index page for all butterflies
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

get '/butterflies/new' do
  erb :butterflies_new
end

post '/butterflies' do
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  query_db(query)

  redirect to('/butterflies')
end

# Show page for a butterfly
get '/butterflies/:id' do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = butterflies.first # Strip off the array.

  erb :butterflies_show
end

def query_db(sql)
  db = SQLite3::Database.new 'butterflies.db'
  db.results_as_hash = true

  result = db.execute sql
  result
end













