Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'app#index'

  post '/api/v1/mixes', to: 'mixes#getStoriesBySearch'
  get '/api/v1/mixes', to: 'mixes#getTopStories'

  scope '/api/v1' do
    resources :users
    resources :clouds
    resources :stories

  end
end
