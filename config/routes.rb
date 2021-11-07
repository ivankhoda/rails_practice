Rails
  .application
  .routes
  .draw do
    root 'pages#index'
    namespace :api do
      namespace :v1 do
        resources :airlines, param: :slug
        resources :reviews, only: %i[create destroy]
      end
    end
    get '*path', to: 'pages#index', via: :all

    # Routes for Google authentication
    get 'auth/:provider/callback', to: 'sessions#googleAuth'
    get 'auth/failure', to: redirect('/')
  end
