Rails.application.routes.draw do

 
  get 'pages/index'
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :strollers, param: :slug
      resources :reviews, only: [:create, :destroy, :update]
      
    end
  end

  get '*path', to: 'pages#index', via: :all
end
