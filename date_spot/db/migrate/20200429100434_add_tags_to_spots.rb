class AddTagsToSpots < ActiveRecord::Migration[6.0]
  def change
    create_table :tags_spots, id: false do |t|
      t.belongs_to :tag
      t.belongs_to :spot
    end
  end
end
