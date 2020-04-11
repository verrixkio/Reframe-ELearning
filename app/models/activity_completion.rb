class ActivityCompletion < ApplicationRecord
  belongs_to :segment
  belongs_to :activity
end
