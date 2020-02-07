class Api::TestsController < ApplicationController
  def index
    render :json => {
      message: "hello2222!"
    }
  end
end