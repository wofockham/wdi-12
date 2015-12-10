Rails.application.routes.draw do
  get 'users/new'

  root :to => 'pages#demo'
  get '/hamldemo' => 'pages#demo'
  resources :users
end
