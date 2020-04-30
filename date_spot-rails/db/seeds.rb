# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Spot.create(title: "romantic evening in my house",description: "a lovely walk down little venice", location: "little venice, london", url: "https://cdn.londonandpartners.com/asset/819f66aac606c1ef23220825a910f63c.jpg", avg_cost: "3", latitude: "51.5245129", longitude: "-0.1866869")
Tag.create(tag: "romantic")
Spot.create(title: "Lovely pizzeria",description: "a lovely walk down little venice", location: "Barbican, london", url: "https://cdn.londonandpartners.com/asset/819f66aac606c1ef23220825a910f63c.jpg", avg_cost: "3", latitude: "51.5245129", longitude: "-0.1866869")
Tag.create(tag: "Excellent food")
Spot.create(title: "If this works there is a pint for everyone in the team!!!!!!",description: "Team that uses pretty unconvenient descriptions in the dummy data", location: "somewhere near an ass, london", url: "https://cdn.londonandpartners.com/asset/819f66aac606c1ef23220825a910f63c.jpg", avg_cost: "3", latitude: "51.5245129", longitude: "-0.1866869")
Tag.create(tag: "Very unpolite people")
