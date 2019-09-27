Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :friends, only: [:index, :show, :update]
    get "friends", to: "friends#friends"
  end
end
