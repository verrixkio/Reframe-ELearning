class Api::SkillController < ApplicationController
  # This controller will be building the reading and Skill list.

  def index
    @Skill = Skill.all
    
    render json: @Skill
    
  end

  def create
    # puts "here's the email", params[:email]
    # puts "here's the password", params[:password]

    # puts "this is the retrieve user object", @user.name
    

  end
end