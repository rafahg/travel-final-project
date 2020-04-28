json.extract! spot, :id, :title, :description, :location, :url, :average_cost, :created_at, :updated_at
json.url spot_url(spot, format: :json)
