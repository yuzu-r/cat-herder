Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  root 'static_pages#about'
  get 'search' => 'static_pages#search'
  post 'add' => 'static_pages#add_to_location'
  post 'remove' => 'static_pages#remove_from_location'
end
