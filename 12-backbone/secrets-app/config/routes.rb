Rails.application.routes.draw do
  resources :secrets

  root 'secrets#home'
  # root :to => 'secrets#home'
end