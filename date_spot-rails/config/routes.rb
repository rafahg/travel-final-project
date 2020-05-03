# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root to: 'welcome#index'
  namespace :api do
    namespace :v1 do
      resources :spots do
        resources :comments
        resources :likes
      end
      resources :tags
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
