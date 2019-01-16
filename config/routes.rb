Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'app#index'

  scope :api do
    scope :v1 do
      get '/mixes/data', to: 'mixes#get_top_stories'
      post '/mixes/data', to: 'mixes#get_search_stories'

      get '/mashes/data', to: 'mashes#get_top_mash_words'
      post '/mashes/data', to: 'mashes#get_search_mash_words'
      get '/mashes/recent', to: 'mashes#get_recent_mashes'
      resources :mashes, only: [:index, :show, :create]
    end
  end
end
