require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# Index page for all butterflies -- READ
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end


# Insert a new butterfly into the database -- CREATE
post '/butterflies' do
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  query_db(query)

  redirect to('/butterflies')
end

# Form to add a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# Show page for a butterfly -- READ
get '/butterflies/:id' do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id].to_i }"
  @butterfly = butterflies.first # Strip off the array.

  erb :butterflies_show
end

# Delete a butterfly from the database -- DELETE
get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id=#{ params[:id].to_i }"
  redirect to('/butterflies')
end

# Form to edit an existing butterfly
get '/butterflies/:id/edit' do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = butterflies.first # Strip off the array.

  erb :butterflies_edit
end

# Amend a butterfly in the database -- UPDATE
post '/butterflies/:id' do
  query = "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/butterflies/#{ params[:id] }")
end

def query_db(sql)
  db = SQLite3::Database.new 'butterflies.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  result
end













