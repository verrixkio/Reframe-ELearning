class Api::SegmentController < ApplicationController
  # This controller will be building the reading and Segment list.

  def index
    @Segment = Segment.all
    
    render json: @Segment
    
  end

  def create
    # puts "here's the email", params[:email]
    # puts "here's the password", params[:password]

    # puts "this is the retrieve user object", @user.name
    

  end
end