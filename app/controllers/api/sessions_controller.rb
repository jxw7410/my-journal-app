class Api::SessionsController < Devise::SessionsController
  respond_to :json
  private
  def respond_with(resource, _opts = {})
    if current_token 
      render json: { jwt: current_token }, status: 200
    else 
      render json: resource, status: 200
    end
  end

  def respond_to_on_destroy
    head :no_content
  end

  def current_token
    request.env["warden-jwt_auth.token"]
  end
end
