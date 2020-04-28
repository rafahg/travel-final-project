class CreateSpots < ActiveRecord::Migration[6.0]
  def change
    create_table :spots do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :url
      t.string :average_cost

      t.timestamps
    end
  end
end
