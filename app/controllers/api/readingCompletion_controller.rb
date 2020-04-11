class Api::ReadingcompletionController < ApplicationController
  def index
    @readComplete = ReadingCompletion.all
    
    render json: @readComplete
    
  end

  def create

    @readingComplete = params
    puts params "here are the params!!"
  end
end
