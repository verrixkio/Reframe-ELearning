class Api::ActivitycompletionController < ApplicationController
  def index
    @actComplete = ActivityCompletion.all
    
    render json: @actComplete
    
  end

  def create

    @activityComplete = params
    puts params
  end
  
end
