Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    # get '/data', to: 'tests#index'
    
    get '/data', to: 'login#index'
    
    resources :user, :reading, :course, :segment, :activity, :skill, :concept


  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  get '/course/1?', to: "/", constraints: ->(request) do
  !request.xhr? && request.format.html?
end

end
