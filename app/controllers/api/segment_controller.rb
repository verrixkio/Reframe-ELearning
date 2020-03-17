class Api::SegmentController < ApplicationController
  # This controller will be building the reading and Segment list.


  def index
    puts params
    if params[:id]

      number = params[:id]
      @Segment = Segment.where("course_id = #{number}")
      render json: @Segment
  
      else

        @Segment = Segment.all
        render json: @Segment

      end
    
  end

  def create
    # puts "here's the email", params[:email]
    # puts "here's the password", params[:password]

    # puts "this is the retrieve user object", @user.name
    

  end
end