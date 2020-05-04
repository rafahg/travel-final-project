class AddSpotDetailsToSpots < ActiveRecord::Migration[6.0]
  def change
    add_column :spots, :summary, :string
    add_column :spots, :address, :string
    add_column :spots, :dress, :string
    add_column :spots, :best_times, :string
    add_column :spots, :advice, :string
  end
end
