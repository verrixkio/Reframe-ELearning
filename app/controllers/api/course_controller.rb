class Api::CourseController < ApplicationController
  def index
    @Course = Course.all
    render json: @Course
  end

  def create
    # puts "here's the email", params[:email]
    # puts "here's the password", params[:password]

    # puts "this is the retrieve user object", @user.name
    

  end
end