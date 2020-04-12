class Api::ReadingcompletionController < ApplicationController
  def index
    puts params, "here params"
    if params[:segment_id]
      
      number = params[:segment_id]
      @completeReadings = Readcomplete.where("segment_id = #{number}")
      render json: @completeReadings
    
    else
      @readComplete = Readcomplete.all
      
      render json: @readComplete

    end
    
  end

  def create

    @readingComplete = params
    puts @readingComplete, "here are the params!!"
  end
end
