class Api::ActivitycompletionController < ApplicationController
  def index
    @actComplete = Actcomplete.all
    
    render json: @actComplete
    
  end

  def create

    @activityComplete = params
    puts params
  end

end
