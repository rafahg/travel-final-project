class CreateSpots < ActiveRecord::Migration[6.0]
  def change
    create_table :spots do |t|
      t.string :title
      t.text :description
      t.string :location
      t.string :url
      t.string :avg_cost

      t.timestamps
    end
  end
end
