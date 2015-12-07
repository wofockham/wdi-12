Rails.application.routes.draw do
  root :to => 'pages#welcome'

  get '/stock' => 'stock#search'
  get '/stock/result' => 'stock#result'

  get '/movie' => 'movie#search'
  get '/movie/result' => 'movie#result'
end
