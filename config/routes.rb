Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'app#index'
  scope '/api' do
    resources :users
    resources :clouds
  end
end
