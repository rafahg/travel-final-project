class Spot < ApplicationRecord
    has_many :tags_associations
    has_many :tags, through: :tags_associations
end
