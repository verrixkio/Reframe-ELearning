class Api::ActivityController < ApplicationController
  # This controller will be building the reading and activity list.

  def index
    @Activity = Activity.all
    
    render json: @Activity
    
  end

  def create
    # puts "here's the email", params[:email]
    # puts "here's the password", params[:password]

    # puts "this is the retrieve user object", @user.name
    

  end
end