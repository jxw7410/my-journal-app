class User < ApplicationRecord
  validates :username ,presence: true
  validates :password, presence: true
  validates :email, presence: true, uniqueness: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist

  def jwt_payload
    {
      'username' => self.username,
      'email' => self.email
    }
  end

  
end
