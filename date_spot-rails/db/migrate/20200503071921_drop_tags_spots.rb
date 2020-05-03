class DropTagsSpots < ActiveRecord::Migration[6.0]
  def change
    drop_table :tags_spots
  end
end
