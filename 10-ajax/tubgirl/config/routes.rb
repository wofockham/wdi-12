Rails.application.routes.draw do
  root :to => 'pages#groucho'
  get '/groucho' => 'pages#groucho'
  get '/harpo' => 'pages#harpo'
  get '/chico' => 'pages#chico'
  get '/zeppo' => 'pages#zeppo'
  get '/gummo' => 'pages#gummo'
end
