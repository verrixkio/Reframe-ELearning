class Api::ReadingController < ApplicationController
  def index


    if params[:id]
    number = params[:id]
    @Reading = Reading.where("segment_id = #{number}")
    render json: @Reading

    else
      @Reading = Reading.where("segment_id = '1'")
      render json: @Reading
    
    end
    
  end

  def create
    # puts "here's the email", params[:email]
    # puts "here's the password", params[:password]

    # puts "this is the retrieve user object", @user.name
    

  end
end