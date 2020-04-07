class ApplicationController < ActionController::API
  def fallback_index_html
    render :file => 'src/index.js'
  end
  
end