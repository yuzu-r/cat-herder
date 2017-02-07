Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  root 'locations#main'
  get 'search' => 'locations#search'
  post 'add' => 'locations#add_to_location'
  post 'remove' => 'locations#remove_from_location'
end
