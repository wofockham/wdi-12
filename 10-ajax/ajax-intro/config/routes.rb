Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/time' => 'pages#time'
  get '/random' => 'pages#random'
end

