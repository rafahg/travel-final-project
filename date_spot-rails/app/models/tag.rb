# frozen_string_literal: true

class Tag < ApplicationRecord
  has_many :tags_associations
  has_many :spots, through: :tags_associations
end
