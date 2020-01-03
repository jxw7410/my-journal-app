# == Schema Information
#
# Table name: journals
#
#  id         :bigint           not null, primary key
#  name       :string           default(""), not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Journal < ApplicationRecord
  before_validation :format_name 
  validates :user_id, :name, presence: true
  validates :user_id, uniqueness: { scope: :name} # [:user_id, :name] are unique


  private
  def format_name 
    self.name = self.name.split(" ").map(&:capitalize).join(" ")
  end
end
