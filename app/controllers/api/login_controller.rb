class Api::LoginController < ApplicationController
    def index
      @User = User.all
      render json: @User
    end

    def create
      puts "here's the email", params[:email]
      puts "here's the password", params[:password]

      @user = User.find_by email: params[:email]
      puts "this is the retrieve user object", @user.name
      

    end
  end