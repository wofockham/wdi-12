Rails.application.routes.draw do
  root :to => 'pages#demo'
  get '/hamldemo' => 'pages#demo'

  get '/users/edit' => 'users#edit'
  resources :users, :except => [:edit]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
