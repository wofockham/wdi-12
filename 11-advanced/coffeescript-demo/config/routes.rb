Rails.application.routes.draw do
  root 'pages#demo'
  # root :to => 'pages#demo'

  get 'pages/demo'
end