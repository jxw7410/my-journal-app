class Api::JournalsController < ApplicationController
  before_action :authenticate_user!

  def index
    @journals = Journal.all
    render :index
  end

  def create 
    @journal = Journal.create(journal_params.merge({user_id: current_user.id}))
    if @journal.save 
      render :show
    else
      render json: @journal.errors.full_messages, status: 422
    end 
  end


  private 

  def journal_params 
    params.require(:journal).permit(:name)
  end

end

