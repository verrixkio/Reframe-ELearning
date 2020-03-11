class Api::ReadingController < ApplicationController
  def index

    @Reading = Reading.where("segment_id = 1")
    render json: @Reading
    
  end

  def create
    # puts "here's the email", params[:email]
    # puts "here's the password", params[:password]

    # puts "this is the retrieve user object", @user.name
    

  end
end