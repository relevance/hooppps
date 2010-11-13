Hooppps::Application.routes.draw do
  match 'player/search' => 'player#search'
  resources :shots
  resources :everyone
  resources :popular
  resources :debut
  resources :player
  
  root :to => "popular#index"
end
