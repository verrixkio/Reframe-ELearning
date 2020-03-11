class Api::ConceptController < ApplicationController
  # This controller will be building the reading and Concept list.

  def index
    @Concept = Concept.all
    
    render json: @Concept
    
  end

  def create
    # puts "here's the email", params[:email]
    # puts "here's the password", params[:password]

    # puts "this is the retrieve user object", @user.name
    

  end
end