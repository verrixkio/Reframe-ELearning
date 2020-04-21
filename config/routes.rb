Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    # get '/data', to: 'tests#index'
    
    get '/data', to: 'login#index'

    post '/user/new', to: 'user#create'

    post '/login', to: 'user#login'
    
    resources :user, :reading, :course, :segment, :activity, :skill, :concept, :activitycompletion, :readingcompletion


  end

  resources :users, only: [:new, :create]



  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
  end
  
end
