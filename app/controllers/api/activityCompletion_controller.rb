class Api::ActivitycompletionController < ApplicationController
  def index
    if params[:segment_id] && params[:user_id]

      @userActivities = Actcomplete.where(["segment_id = ? and user_id = ?", params[:segment_id], params[:user_id]])
      render json: @userActivities
    end
    
  end

  def create

    actComplete = Actcomplete.create(segment_id: params[:segmentId], activity_id: params[:activityId], user_id: params[:userId])

  end

end
