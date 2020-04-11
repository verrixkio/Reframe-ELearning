class Api::ReadingcompletionController < ApplicationController
  def index
    @readComplete = Readcomplete.all
    
    render json: @readComplete
    
  end

  def create

    @readingComplete = params
    puts @readingComplete, "here are the params!!"
  end
end
