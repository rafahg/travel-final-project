# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    devise_for :users, controllers: { sessions: :sessions },
                       path_names: { sign_in: :login }
    resource :user, only: %i[show update]
  end
  # root to: 'welcome#index'
  namespace :api do
    namespace :v1 do
      get 'tagged_spot' => 'spots#tagged_spot'
      resources :spots do
        resources :comments
      end
      resources :tags
      resources :likes
    end
  end
  # get '/tagged_spot', controller: 'spots', action: 'tagged_spot', as: 'tagged_spots'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
