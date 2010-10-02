Hooppps::Application.routes.draw do
  resources :shots
  root :to => "shots#index"
end
