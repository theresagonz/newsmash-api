Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'app#index'

  scope :api do
    scope :v1 do
      get '/mixes/new', to: 'mixes#get_top_stories_mix'
      post '/mixes/new', to: 'mixes#get_search_mix'

      get '/mashes/new', to: 'mashes#get_top_stories_mash'
      post '/mashes/new', to: 'mashes#get_search_mash'

      get '/mashes/recent', to: 'mashes#get_recent_saved_mashes'
      
      resources :mashes, only: [:index, :show, :create]
    end
  end
end
