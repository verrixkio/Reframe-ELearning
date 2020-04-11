class Api::ReadingcompletionController < ApplicationController
  def index
    @readComplete = Readcomplete.all
    
    render json: @readComplete
    
  end

  def create

    @readingComplete = params
    puts params "here are the params!!"
  end
end
