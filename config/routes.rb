Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'app#index'

  post '/api/v1/mixes', to: 'mixes#getStoriesBySearchFromNewsApi'
  get '/api/v1/mixes', to: 'mixes#getTopStoriesFromNewsApi'
  post '/api/v1/mashes', to: 'mashes#queryMashWords'
  get '/api/v1/mashes', to: 'mashes#getTopMashWords'

end
