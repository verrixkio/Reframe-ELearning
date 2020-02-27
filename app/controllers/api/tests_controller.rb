class Api::TestsController < ApplicationController
  def index
    @User = User.all
    render json: @User
  end

  def create
    puts params, 'these are the params!'
    # puts params[:trail_id].to_i, 'this is a numbeR!!'
    # Comment.create(data: params[:data], name: params[:name], trails_id: params[:trail_id].to_i)
  end


end