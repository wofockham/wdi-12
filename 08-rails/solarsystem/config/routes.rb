Rails.application.routes.draw do
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new'
  get '/planets/:id' => 'planets#show'
  post '/planets' => 'planets#create'
  delete '/planets/:id' => 'planets#destroy'
  get '/planets/:id/edit' => 'planets#edit'
  post '/planets/:id' => 'planets#update'

  # resources :planets
end
