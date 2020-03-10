class Segment < ApplicationRecord
  belongs_to :course
  has_many :readings
end
