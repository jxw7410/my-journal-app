# == Schema Information
#
# Table name: entries
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  journal_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Entry < ApplicationRecord
  validates :name, :journal_id, presence: true
  validates :journal_id, uniqueness: {scope: :name, message: "Entry already exists in this journal."}
end
