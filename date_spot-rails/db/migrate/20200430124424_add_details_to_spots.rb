class AddDetailsToSpots < ActiveRecord::Migration[6.0]
  def change
    add_column :spots, :latitude, :string
    add_column :spots, :longitude, :string
  end
end
