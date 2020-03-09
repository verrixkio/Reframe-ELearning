class Api::TestsController < ApplicationController
  def index
    @User = User.all
    render json: @User
  end

  def create
    puts params
  end
end