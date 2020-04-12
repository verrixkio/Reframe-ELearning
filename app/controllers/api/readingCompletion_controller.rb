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

    puts @readingComplete[:segmentId]
    # puts params.readingId
    # puts params.userID

    readComplete = Readcomplete.create(segment_id: params[:segmentId], reading_id: params[:readingId], user_id: params[:userId])

    puts readComplete, "to the database please :)"


  end
end
