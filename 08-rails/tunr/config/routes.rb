Rails.application.routes.draw do
  root :to => 'pages#demo'
  get '/hamldemo' => 'pages#demo'
  resources :users

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
