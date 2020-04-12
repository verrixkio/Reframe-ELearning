class Api::UserController < ApplicationController
    def index
      @User = User.all
      render json: @User
    end

    def create

      User.create(name: params[:username], email: params[:email], password: params[:password], role: params[:role])

    end
  end