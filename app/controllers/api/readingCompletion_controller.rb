class Api::ReadingcompletionController < ApplicationController
  
  def index

    # Return the completed reading objects based on a user_id and segment_id:
    if params[:segment_id] && params[:user_id]

      @userReadings = Readcomplete.where(["segment_id = ? and user_id = ?", params[:segment_id], params[:user_id]])
      render json: @userReadings
    
    else
      # @readComplete = Readcomplete.all
      
      # render json: @readComplete

    end
    
  end

  def create

    readComplete = Readcomplete.create(segment_id: params[:segmentId], reading_id: params[:readingId], user_id: params[:userId])

  end
end
