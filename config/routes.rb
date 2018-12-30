Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'app#index'

  scope :api do
    scope :v1 do
      get '/mixes/data', to: 'mixes#getTopStories'
      post '/mixes/data', to: 'mixes#getSearchStories'

      get '/mashes/data', to: 'mashes#getTopMashWords'
      post '/mashes/data', to: 'mashes#getSearchMashWords'
      get '/mashes/recent', to: 'mashes#getRecentMashes'
      resources :mashes, only: [:index, :show, :create]
    end
  end
end
