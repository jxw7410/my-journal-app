class Api::RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_parameters
  respond_to :json

  def create
    build_resource(sign_up_params)
    if resource.save
      jwt_token = sign_up(resource_name, resource)
      render json: {jwt: jwt_token }, status: 200
    else
      render json: resource.errors.full_messages, status: 422
    end
  end

  private
  def sign_up_params 
    devise_parameter_sanitizer.sanitize(:user)
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:user, keys: [:username, :email, :password])
  end

  def sign_up(resource_name, resource)
    sign_in(resource_name, resource)
    request.env["warden-jwt_auth.token"]
  end
end
