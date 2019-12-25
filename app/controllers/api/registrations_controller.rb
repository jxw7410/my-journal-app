class Api::RegistrationsController < Devise::RegistrationsController
  skip_before_filter :verify_authenticity_token, only: [:create]
  respond_to :json

  def create
    build_resource(sign_up_params)
    if resource.save
      render json: resource
    else 
      render json: resource.errors.full_messages
    end
  end

  private
  def sign_up_params
    ActionController::Parameters.new({
      user: {
        username: params[:username],
        email: params[:email],
        password: params[:password]
      }
    }).require(:user).permit(:username, :email, :password)
  end
end
