class Api::UserController < ApplicationController
    

    def index
      @User = User.all
      render json: @User
    end


    def login
      @user = User.find_by(email: params[:email])

      if @user
        puts "that user exists"
      else
        puts "that user does not exist"
        head 503
      end

    end

    def create

      User.create(name: params[:username], email: params[:email], password: params[:password], role: params[:role])

    end
  end