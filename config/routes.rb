Hooppps::Application.routes.draw do
  match 'player/search' => 'player#search'
  resources :shots
  resources :everyone
  resources :popular
  resources :debut
  resources :player
  resources :about
  
  root :to => "popular#index"
end
