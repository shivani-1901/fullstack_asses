class Survey < ApplicationRecord
    has_many :survey_components, dependent: :destroy
    validates :name, presence: true
end
  