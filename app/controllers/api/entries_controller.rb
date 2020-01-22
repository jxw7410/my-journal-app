class Api::EntriesController < ApplicationController
  before_action :authenticate_user!


  def show
  end

  def index
  end

  def create
    @entry = Entry.create(entry_params)
    if @entry.save
      render :show
    else 
      render json: @entry.errors.full_messages, status: 422
    end
  end

  def update
  end

  def delete
  end

  private


  def entry_params
    params.require(:entry).permit(:name, :journal_id)
  end
end