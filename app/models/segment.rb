class Segment < ApplicationRecord
  belongs_to :course
  has_many :readings
  has_many :activities
end
