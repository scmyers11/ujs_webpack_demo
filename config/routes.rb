Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'root#index'

  get 'load', to: 'root#load', as: :load_root
end
