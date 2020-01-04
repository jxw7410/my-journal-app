class Api::JournalsController < ApplicationController
  before_action :authenticate_user!

  def index
    @journals = Journal.where(user_id: current_user.id)
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

  def update 
    @journal = Journal.find(params[:id])
    if @journal.update(name: params[:name])
      render :show
    else 
      render json: @journal.errors.full_messages, status: 422
    end
  end


  def destroy
    @journal = Journal.find(params[:id])
    if @journal.destroy
      render json: { journalId: @journal.id }, status: 200
    else 
      render json: ['Unable to destroy entity'], status: 422
    end
  end 

  private 

  def journal_params 
    params.require(:journal).permit(:name)
  end

end

