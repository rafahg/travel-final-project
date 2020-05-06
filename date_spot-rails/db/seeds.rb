# frozen_string_literal: true

# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

# # Spot.create(title: "romantic evening in my house",description: "a lovely walk down little venice", location: "little venice, london", url: "https://cdn.londonandpartners.com/asset/819f66aac606c1ef23220825a910f63c.jpg", summary: "", address: "", avg_cost: "3", dress: "", best_times: "", advice:"", latitude: "51.5245129", longitude: "-0.1866869")

Tag.create(tag: 'Adventure')
Tag.create(tag: 'Romantic')
Tag.create(tag: 'Activity')
Tag.create(tag: 'Walk')
Tag.create(tag: 'Markets')
Tag.create(tag: 'Theater')
Tag.create(tag: 'Picnic')
Tag.create(tag: 'Food')
Tag.create(tag: 'Musical')
Tag.create(tag: 'Bar')
Tag.create(tag: 'Spa')
Tag.create(tag: 'Luxury')
Tag.create(tag: 'Science')
Tag.create(tag: 'Vegan')

# 1.Lock scape rooms
Spot.create(title: "Lock'd Escape Rooms",
            description: "In most circumstances, paying someone to lock you and your significant other in a confined space is not the most sensible of decisions. Lock’d in London (or perhaps escaping from a ravenous hoard of zombies) is a notable exception.
The concept in simple; you and your partner will be locked in a room and tasked with solving a series of clues in order to secure your freedom. Don’t worry though, if you can’t escape within 60 minutes, they’ll let you out. The shame of failure, however, is something you may never escape from.
You can choose one of four rooms of varying difficulty. If it’s your first time, we recommend choosing the easiest – you don’t want to look like an incompetent fool, or make your date feel like an idiot if you both can’t figure out the clues.
If you enjoy solving puzzles, can keep cool under pressure and don’t suffer from extreme claustrophobia, Lock’d is supremely fun. It’s also a great way to get to know someone.
",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ESCAPE-ROOM/ESCAPE-ROOM-2.jpg', summary: 'Lock’d is a boutique escape room game, like no other in London',
            address: '46 Lexington St, Soho, London W1F 0LP',
            avg_cost: '40',
            dress: 'Casual',
            best_times: 'Avoid Wednesdays and Saturday afternoon/evening',
            advice: "Don't get too complacent, it's still challenging! make sure you're confident in your problem solving skills if you want to impress your date ;)",
            latitude: '51.493348',
            longitude: '-0.061344')

# 2.Tower of london ice rink.
Spot.create(title: 'Tower of London Ice Rink',
            description: "There is nothing funnier than seeing someone fall over. And there is nowhere better to see people fall over (and perhaps
    have a go at falling over yourself) than the Tower of London Ice Rink.
  It’s not just about falling over, of course, there is ice skating too! Impress your date with your majestic gliding across the frozen ground. Or, if it’s your first time, there are still plenty of merriment to be had trying to keep your balance and avoiding ending the day with any serious life-changing injuries.
  We recommend going in the evening as the Christmas lights and surrounding views make for a truly magical atmosphere and an unforgettable evening.
  ",
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ICE-SKATING/ICE-SKATING-2.jpg',
            summary: "Located in the dry moat, the Tower of London ice rink offers a grand historical setting for seasonal skating sessions, along with views of London's ancient fortress and the river Thames.",
            address: "Tower Hill, St Katharine's & Wapping, London EC3N 4AB",
            avg_cost: '20',
            dress: 'It is going to be a little cold out there, so, time to wear your fancy coat and get ready for impress your date with your skating skills',
            best_times: 'The ice rink is open from November to January, 9am to 10pm. The evening is especially romantic with the Christmas lights.', advice: 'Try the early morning sessions which can lead to pictureesque afternoons and bustling evenings. Sure to be a romantic hit for your date!',
            latitude: '51.529242',
            longitude: '-0.077504')

# 3.Columbia Road Flower Market.
Spot.create(title: 'Columbia Road Flower Market',
            description: "Everyone loves flowers. Even those macho types who claim otherwise will secretly have a spring in their step when surrounded by some of nature’s most beautiful creations.
  Even if it’s a bit cliché, buying flowers for your partner is still a romantic gesture. There is no better way to discover your love one’s botanical preferences than a trip to London’s Columbia Road Flower Market.
  ",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/COLUMBIA-FLOWER-MARKET/COLUMBIA-FLOWER-MARKET-2.jpg', summary: 'Columbia Road is a road of Victorian shops off Hackney Road in the London Borough of Tower Hamlets.',
            address: 'Columbia Rd, London E2 7RG, Reino Unido',
            avg_cost: '30 for starters, sky is the limit though',
            dress: 'Casual',
            best_times: "Sundays from 8am to 3pm. If you're after quality, arrive early. If you're after a bargain, turn up towards the end at around 2-3pm. It gets very busy at around midday.",
            advice: 'When you’ve bought your blooms, head behind the stalls and down side streets to find cute cafés, independent restaurants, delis, shops, antique dealers, vintage stalls and small galleries, many of which follow the market’s opening hours.',
            latitude: '51.529242',
            longitude: '-0.069798')

# 4.The hill Garden and Pergola
Spot.create(title: 'The Hill Garden and Pergolad',
            description: 'The Pergola is one of the hidden delights of Hampstead Heath. It overlooks West Heath, and was the dream of William H Lever, later Lord Leverhulme, a wealthy idealist, patron of the arts, architecture and landscape gardening; and Thomas Mawson, the celebrated landscape architect. In 1904, Lord Leverhulme purchased The Hill, a substantial house facing North End Way. He subsequently acquired adjoining land, and had the opportunity to create the Pergola, a magnificent Edwardian extravagance which would be the setting for garden parties and summer evening strolls and be a striking addition to the garden of The Hill. Masterminding the work was Thomas Mawson, a world-famous authority on civic design, town planning and landscape architecture. He brought architectural treatment and formality to garden design, and The Hill’s Pergola and gardens were destined to become the best surviving examples of his work.',
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HILL-GARDEN-PERGOLA/HILL-GARDEN-3.jpg',
            summary: 'A Georgian arbour and terrace in the Hill Garden with expansive views across Hampstead Heath.',
            address: 'The Pergola, Inverforth Cl, London NW3 7EX',
            avg_cost: '10',
            dress: 'Casual',
            best_times: '8:30am to 3:30pm',
            advice: 'In the faded glory of the pillars and arches, you’ll find a serenely beautiful spot with views aplenty, so when you are here make sure to take your time and enjoy the moment with your equally beautiful date. ',
            latitude: '51.565375',
            longitude: '-0.18372')

# 5.Shakespeare's Globe
Spot.create(title: "Shakespeare's Globe",
            description: "Shakespeare's Globe is a reconstruction of the Globe Theatre, an Elizabethan playhouse for which William Shakespeare wrote his plays, in the London Borough of Southwark, on the south bank of the River Thames.",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GLOBE-THEATRE/GLOBE-1.jpg',
            summary: 'Oak-and-thatch replica of original Elizabethan theatre, showing Shakespeare plays in the open air.',
            address: 'Shakespeare’s Globe 21 New Globe Walk Bankside',
            avg_cost: '50',
            dress: 'Smart Casual',
            best_times: 'Booking in advance is advised',
            advice: 'To be or not to be, rest assured, its definetely a place to be on a date. ',
            latitude: '51.508183',
            longitude: '-0.097205')

# 6. Hyde Park Stables.
Spot.create(title: 'Hyde Park Stables',
            description: 'Put the concrete jungle of Canary Wharf or The City to one side — London is one of the greenest capitals in the world, which is good news if you’re in need of an equine fix and fancy horse riding in London. From gentle hacking to fast-paced polo, London has it all, and a city job doesn’t have to mean waving goodbye to your countYou can’t miss the all-weather paths snaking their way through this 350-acre park slap bang in the middle of the capital. And some of the hoof prints and horse dung can be traced back to Hyde Park Stables, which offers hacks through the park and lessons in the outdoor arena, as well as hosting hen parties and children’s camps.',
            location: 'little venice, london',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HYDE-PARK-HORSE/HORSE-1.jpg',
            summary: "Hyde Park Stables is a wonderful location for those who adore animals. This destination is just one of the hidden treasures that London, the country's capital, is home to.",
            address: 'Different venues along the park',
            avg_cost: '120',
            dress: 'Sport Casual',
            best_times: 'Booking in advance is advised',
            advice: 'Make sure your partner is an animal lover and would like to ride a horse, and try their semi-private riding for couples.', latitude: '51.513267',
            longitude: '-0.17477')

# 7. Boat Trip Little Venice
Spot.create(title: 'Boat trip Little venice',
            description: "Little Venice, with its beautiful canals and waterways, can be found just to the north of Paddington. Positioned where the Grand Union and Regent’s canals meet, this picturesque neighbourhood is home to quirky waterside cafes, cosy pubs and charming restaurants. From canal boat rides to puppet shows, there are plenty of things to do in this charming London area. If you’d rather take to the water, embark on an exciting canal trip by narrowboat with Jason's Trip, Jenny Wren Canal Cruises and the London Waterbus, which take you from Little Venice to Camden Lock Market in around 45 minutes.",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/BOAT-TRIP-LITTLEVENICE/LITTLE-VENICE.1.jpg', summary: "Cruise along the canal connecting London's picturesque Little Venice to the colourful hub of Camden Lock.",
            address: 'Different venues along the canal',
            avg_cost: '25',
            dress: 'Casual',
            best_times: 'Booking in advance is advised( 5:30 pm to 10:45 pm)',
            advice: 'Grab your picnic hamper and enjoy the sunshine surrounded by flowers in the near by Rembrandt Gardens',
            latitude: '51.521179',
            longitude: '-0.183746')

# 8. Andrew Edmunds
Spot.create(title: 'Andrew Edmunds',
            description: 'Located on Lexington Street, this 18th century townhouse restaurant was birthed from the antique prints business next door, and its sheer black façade frames the romantic candlelight scene happening within. The menu, which is handwritten each day on paper and blackboard, will make it seem as if you stumbled across this intimate restaurant one day and thought, “I must bring [insert name] here, he/she will simply adore it,” when, in fact, you read about it on The Nudge.',
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ANDREW-EDMUNDS/ANDREW-EDMUNDS.1.jpg',
            summary: "Established in 1985, Andrew Edmunds is considered one of the last bastions of 'old Soho'. ",
            address: 'Lexington St, London',
            avg_cost: '50',
            dress: 'Smart Casual, fancy place',
            best_times: 'Booking in advance is advised',
            advice: "Hone your table side manners as this isn't your casual Nandos spot. Be friendly, charming and make sure to order wine for 2.", latitude: '51.513311',
            longitude: '-0.136147')

# 9. Closs Maggiore
Spot.create(title: 'Closs Maggiore',
            description: "In the stunning setting of a Georgian townhouse in the heart of Covent Garden, Clos Maggoire offers an intimate and stylish experience with staunchly French cuisine and discreet service. Inside it's a charming affair, the courtyard allows for alfresco dining by day with its retracting glass roof and dining under the stars by night. The quality of the cuisine, wine list and service makes this hidden gem a much loved find in a crowded city.Clos Maggiore are very happy to have been awarded: 3 AA Rosettes; Most Romantic Restaurant in the World 2016 by Architectural Digest; London's Most Romantic Restaurant 2016 by Harden's; Wine Spectator Grand Award and The AA Notable Wine List Award.",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/CLOSS-MAGGIORE/CLOSS-MAGGIORE-1.jpg',
            summary: "Enjoy outstanding French-influenced cuisine and one of the world's finest wine lists - winner of London's most romantic restaurant.",
            address: '33 King Street, Covent Garden, WC2E 8JD',
            avg_cost: '75',
            dress: 'Dress to impress here.',
            best_times: 'Booking in advance is advised', advice: 'Make sure to dress up smart as this is a prestigious restaurant that is sure to impress your date. The list of wine is extensive and impressive so ask the waiter for the recommended wine for your chosen meal.',
            latitude: '51.511807',
            longitude: '-0.124682')

# 10. Hutong Restaurant.

Spot.create(title: 'Hutong Restaurant',
            description: "Bringing ground-breaking northern Chinese cuisine to one of London's most famous buildings, Hutong is housed on the 33rd floor of The Shard. From the sultry dining room at this restaurant in The Shard, floor-to-ceiling windows frame jaw-dropping views of the city.",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HUTONG/HUTONG-1.jpg',
            summary: 'Inspired by its famous namesake restaurant in Hong Kong, the Hutong menu features favourite northern Chinese recipes served with contemporary flair.',
            address: '33, The Shard, 31 St Thomas St, London SE1 9RY',
            avg_cost: '75',
            dress: 'Better get a suit for coming here, is a fancy place.',
            best_times: 'Booking in advance is advised',
            advice: 'Check before you book this unbelievable restaurant to see if your partner is into Asian cuisine becuase no matter how good the view is from up there, your date is not going to enjoy it with an empty stomach',
            latitude: '51.504627', longitude: '-0.086642')

# 11. Musical

Spot.create(title: 'Musical',
            description: "No trip to London's West End is complete without seeing a theatre show. London has some of the best plays and musicals in the world, but there's so much more to this cultural district than neon lights and famous faces. So before you take your seat at a London theatre, here are some essential facts and tips you should know about London's West End. There's so much to see in London's West End. From world-class plays, to musicals, to comedies, dance shows and operas, there's something for everyone, at every budget.",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/MUSICAL/MUSICAL-1.jpg',
            summary: 'Find your new favourite West End musical, from heartwarming adaptations and award-winning scores, to hilarious musical theatre and must-see London shows.',
            address: 'Walk around the magnificent West End and you will find plenty of venues!',
            avg_cost: '90',
            dress: 'It depends of you taste, a suit to have nice date with the love of your life never harms..',
            best_times: 'Strongly advised to check for different offers. If you can plan it with time better. For last minutes offers, leicester square tickets sale venues are definetely the place to know about.',
            advice: "If your date hates thrilleres or dramas, do not choose one! Check with your partner what musical they'd enjoy",
            latitude: '51.513029', longitude: '-0.135477')

# 12. La Bodega Negra

Spot.create(title: 'La bodega negra',
            description: 'A quirky and fun space with uniquely decorated rooms, La Bodega Negra offers an exciting array of Mexican street food and drinks in a vibrant ambience that adds mystery and exclusivity. Enjoy a variety of traditional Mexican dishes with a twist, like tacos with delectable fillings, ceviche or grilled specialities including slow-roasted lamb barbacoa. Set in a secluded cellar, this hidden gem also offers itself as a party destination with DJs, live music and tequila to set the mood.',
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LA-BODEGA-NEGRA/BODEGA-NEGRA-3.jpg',
            summary: 'You come here to see and be seen, and for a thrilling atmosphere and exceptionally friendly service.',
            address: '9 Old Compton St, Soho',
            avg_cost: '50',
            dress: 'Get your best mexican Hat on, and get ready for the party',
            best_times: 'Booking in advance is advised',
            advice: 'If you want an element of mystery on your date, then this is the place for you. Be prepared to speak louder than you usually would.',
            latitude: '51.513819', longitude: '-0.129875')

# 13. Shochu Lounge

Spot.create(title: 'Shochu Lounge',
            description: "Indulge in a Sunday brunch under the beautiful canopy of delicate pink blossoms! There'll be free-flowing cocktails and wine. Both menus start with a generous selection of ROKA favourites, brought to the table; larger dishes to order include the much-loved cedar roast baby chicken with chilli and lemon or the sea bream fillet, ryotei miso and red onions. To finish, there will be the picture-perfect ROKA dessert platter for the table. The accompanying cocktails include a Japanese-style Bloody Mary and the legendary Shochu on the beach.",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/SHOCHU-LOUNGE/SOCHU-1.jpg',
            summary: "Shochu Lounge is a destination in its own right – a snazzy and 'sexy' subterranean space dedicated to the eponymous Japanese spirit (similar to vodka, but usually weaker).",
            address: '37 Charlotte St, Fitzrovia',
            avg_cost: '80',
            dress: 'Casual but poshy, the place deserve it.',
            best_times: 'Booking in advance is advised',
            advice: "Shochu Lounge is a destination in its own right – a snazzy and ‘sexy' subterranean space dedicated to the eponymous Japanese spirit (similar to vodka, but usually weaker). ",
            latitude: '51.519133', longitude: '-0.135558')

# 14. La poule au pot

Spot.create(title: 'La poule au pot',
            description: 'La Poule au Pot has been a Belgravia institution for as long as anyone cares to remember. The alluring interior, with its intimate nooks and festoons of dried flowers and bric-à-brac has changed little since the 60s and offers an authentic re-creation of "paysan" France. It is no surprise that La Poule has been voted "best for romance" in the whole of London in Hardens guide for the nth year in succession. Alongside the wonderfully atmospheric ambience, the menu is classic French too: excellent ingredients, generous portions and fine cooking, presented with exuberant panache. The wine list is honest, thoughtful and interesting. In warmer months, the extensive outdoor seating area makes the restaurant one of the most desirable alfresco destinations in the capital.',
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LA-POULE-AU-POT/POULE-2.jpg',
            summary: "La Poule au Pot has built up a charming patina over the years – half of London's ladies and gents must have been here for dates, liaisons and family get-togethers.",
            address: '231 Ebury St, Belgravia',
            avg_cost: '80',
            dress: 'Belgravia is not exactly known for people on shorts, a smart casual dress code should make the trick here. .',
            best_times: 'Booking in advance is advised',
            advice: 'La Poule au Pot has built up a charming patina over the years – half of London’s ladies and gents must have been here for dates, liaisons and family get-togethers.',
            latitude: '51.491131', longitude: '-0.152578')

# 15. London Zoo

Spot.create(title: 'London - Zoo',
            description: "London Zoo is the world's oldest scientific zoo. It was opened in London on 27 April 1828, and was originally intended to be used as a collection for scientific study. In 1831 or 1832, the animals of the Tower of London menagerie were transferred to the zoo's collection. It was opened to the public in 1847",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LONDON-ZOO/LONDON-ZOO-1.jpg',
            summary: 'Looking to take your date for a walk on the wild side this summer? Then look no further than ZSL London Zoo.',
            address: 'Outer Cir, London NW1 4RY',
            avg_cost: '20',
            dress: 'We love people who dress to impress, but if you are going to be near monkeys, better choose casual clothes. You never Know what those little friends can throw you.',
            best_times: 'Check opening hours. Shows are scheduled along the day.',
            advice: 'Looking to take your date for a walk on the wild side this summer? Then look no further than ZSL London Zoo.',
            latitude: '51.535488', longitude: '-0.15343')

# 16. Gong-Shard

Spot.create(title: 'Gong - Shard',
            description: 'GŎNG Bar, located on level 52, is the highest hotel bar in Western Europe and offers incredible views across the city. The space is divided into intimate chambers, with a cocktail bar, champagne bar and a swimming pool.',
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GONG-SHARD/GONG-1.jpg',
            summary: 'With a dramatic backdrop of unparalleled views, GONG is the destination bar at Shangri-La Hotel, At The Shard, London.',
            address: '31 St Thomas St, London SE1 9QU',
            avg_cost: '80',
            dress: 'Shard equals style and bussines, do you best and dress to impress here.',
            best_times: 'Check opening hours. Shows are scheduled along the day.',
            advice: 'With a dramatic backdrop of unparalleled views, GONG is the destination bar at Shangri-La Hotel, At The Shard, London.',
            latitude: '51.50418', longitude: '-0.08601')

# 17.London Hotel Spa

Spot.create(title: 'London - Hotel Spa',
            description: "Whether you want a targeted treatment or a whole wellness experience, relax and revitalise with Bazaar's pick of the ultimate London spas. From boutique day spas to luxury hotel sanctuaries, these hidden havens are the capital's hotspots for pampering, both holistic and aesthetic.",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LONDON-HOTEL-SPA/HOTEL-SPA-3.jpg',
            summary: "A London spa day allows for the combination of retail therapy, theatre and beautiful restaurants as well as the decadent indulgence that the city's spa hotels and day spas excel in",
            address: 'Hundreds of spas in the lovely London! B5289, Keswick',
            avg_cost: '100',
            dress: 'It is an spa, we think that getting in a swimming clothes would be strongly recommended.',
            best_times: 'Any time of the day will do the trick. Booking is advised for singular treatments in the mayority of cases.',
            advice: 'A London spa day allows for the combination of retail therapy, theatre and beautiful restaurants as well as the decadent indulgence that the city’s spa hotels and day spas excel in',
            latitude: '54.560514', longitude: '-3.139129')

# 18. Greenwich

Spot.create(title: 'Greenwich',
            description: 'Located in the southeast portion of London on the south bank of the River Thames, Greenwich is named for a Saxon word meaning "green village". The birthplace of many royal members of the House of Tudor, the district was a popular resort area in the seventeenth century, particularly known for its grand houses.',
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GREENWICH/GREENWICH-1.jpg',
            summary: "Struggling to know where to go on a first date in London? Or perhaps you have a day off work with your girlfriend, and you're not sure where to take her? Visit Greenwich!",
            address: 'Blackheath Ave, Greenwich',
            avg_cost: 'Visit is free',
            dress: 'Greenwich is lovely, it is where time was invented!!!, according Philomena Cunk, so get ready to walk a lot, dress casual with confortable shoes.',
            best_times: 'Open all day!!!, Anyway we recommend you to go when venues are open, can be lonely at 4 a.m in the night.',
            advice: 'Struggling to know where to go on a first date in London? Or perhaps you have a day off work with your girlfriend, and you’re not sure where to take her? Visit Greenwich!',
            latitude: '51.477976', longitude: '-0.001448')

# 19. Neal's Yard

Spot.create(title: "Neal's Yard",
            description: "Hidden inside this colourful courtyard you'll find a micro-village full of independent restaurants, bars, cafés and shops.Tucked away down a tiny side street in Seven Dials is Neal's Yard, one of London's prettiest streets. It's easy to miss, but it would be unfortunate if you did. Inside this little enclave, you can get everything from pizza to pedicures… and every business is committed to sustainable and ethical commercial practices.",
            location: 'London',
            url: "https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/NEILS'S%20YARD/NEAL'S%20YARD-1.jpg",
            summary: "Hidden inside this colourful courtyard you'll find a micro-village full of independent restaurants, bars, cafés and shops.",
            address: "Neal's Yard, West End, London",
            avg_cost: 'Visit is free',
            dress: 'Casual clothes for a tourist day in London!',
            best_times: 'Open all day. If you want to spend sometime there and enjoy one of the beautiful hostipitality venues around, it can be done on the go.',
            advice: "Hidden inside this colourful courtyard you'll find a micro-village full of independent restaurants, bars, cafés and shops.",
            latitude: '51.51465', longitude: '-0.12638')

# 20. British Museum

Spot.create(title: 'British Museum',
            description: 'The British Museum, in the Bloomsbury area of London, United Kingdom, is a public institution dedicated to human history, art and culture. Its permanent collection of some eight million works is among the largest and most comprehensive in existence, having been widely sourced during the era of the British Empire.',
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/BRITISH-MUSEUM/BRITISH-MUSEUM-1.jpg',
            summary: 'Immerse yourself in two million years of human history, art and culture.',
            address: 'Great Russell St, Bloomsbury,',
            avg_cost: 'Free entrance',
            dress: 'Casual clothes for a tourist day in London!',
            best_times: '10 am to 5 pm (late opening on Fridays)',
            advice: 'Immerse yourself in two million years of human history, art and culture.',
            latitude: '51.5196', longitude: '-0.126946')
# 21. Natural History Museum

Spot.create(title: 'Natural History museum',
            description: "The Natural History Museum is a world-class visitor attraction and leading science research centre. Explore a story of natural history discovery in an interactive experience, Making Natural History, voiced by Museum researchers and curators. Dive into the museum's 80 million specimens with unique, new features: encounter a prehistoric marine reptile in virtual reality, discover pioneering Museum research in a short film, navigate the galleries in 360 degrees care of Google's Street View team, take a tour of ten new exhibits tackling natural history themes, and take students on an expedition through the galleries to learn about adaptation in the natural world.",
            location: 'London',
            url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/NATURAL-HISTORY-MUSEUM/NATURAL-HISTORY-2.jpg',
            summary: 'The Natural History Museum in London is a natural history museum that exhibits a vast range of specimens from various segments of natural history.',
            address: 'Great Russell St, Bloomsbury,',
            avg_cost: 'Free entrance',
            dress: 'Casual clothes for a tourist day in London!',
            best_times: '10 am to 5 pm (late opening on Fridays)',
            advice: 'Immerse yourself in two million years of human history, art and culture.',
            latitude: '51.496881', longitude: '-0.176350')

TagAssociation.create(spot_id: 1, tag_id: 1)
TagAssociation.create(spot_id: 2, tag_id: 2)
TagAssociation.create(spot_id: 2, tag_id: 3)
TagAssociation.create(spot_id: 3, tag_id: 4)
TagAssociation.create(spot_id: 3, tag_id: 5)
TagAssociation.create(spot_id: 4, tag_id: 2)
TagAssociation.create(spot_id: 4, tag_id: 4)
TagAssociation.create(spot_id: 5, tag_id: 6)
TagAssociation.create(spot_id: 6, tag_id: 3)
TagAssociation.create(spot_id: 7, tag_id: 4)
TagAssociation.create(spot_id: 7, tag_id: 7)
TagAssociation.create(spot_id: 8, tag_id: 8)
TagAssociation.create(spot_id: 8, tag_id: 2)
TagAssociation.create(spot_id: 9, tag_id: 8)
TagAssociation.create(spot_id: 9, tag_id: 2)
TagAssociation.create(spot_id: 10, tag_id: 8)
TagAssociation.create(spot_id: 11, tag_id: 9)
TagAssociation.create(spot_id: 11, tag_id: 6)
TagAssociation.create(spot_id: 12, tag_id: 8)
TagAssociation.create(spot_id: 12, tag_id: 10)
TagAssociation.create(spot_id: 13, tag_id: 8)
TagAssociation.create(spot_id: 14, tag_id: 8)
TagAssociation.create(spot_id: 15, tag_id: 3)
TagAssociation.create(spot_id: 15, tag_id: 1)
TagAssociation.create(spot_id: 16, tag_id: 10)
TagAssociation.create(spot_id: 17, tag_id: 11)
TagAssociation.create(spot_id: 17, tag_id: 12)
TagAssociation.create(spot_id: 18, tag_id: 4)
TagAssociation.create(spot_id: 18, tag_id: 7)
TagAssociation.create(spot_id: 18, tag_id: 13)
TagAssociation.create(spot_id: 19, tag_id: 8)
TagAssociation.create(spot_id: 19, tag_id: 14)
TagAssociation.create(spot_id: 20, tag_id: 13)
TagAssociation.create(spot_id: 20, tag_id: 3)
TagAssociation.create(spot_id: 20, tag_id: 4)
TagAssociation.create(spot_id: 21, tag_id: 13)
TagAssociation.create(spot_id: 21, tag_id: 3)
TagAssociation.create(spot_id: 21, tag_id: 4)

Picture.create(spot_id: 8, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ANDREW-EDMUNDS/ANDREW-EDMUNDS.1.jpg')
Picture.create(spot_id: 8, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ANDREW-EDMUNDS/ANDREW-EDMUNDS-2.jpg')
Picture.create(spot_id: 8, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ANDREW-EDMUNDS/ANDREW-EDMUNDS-3.jpg')
Picture.create(spot_id: 9, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/CLOSS-MAGGIORE/CLOSS-MAGGIORE-1.jpg')
Picture.create(spot_id: 9, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/CLOSS-MAGGIORE/CLOSS-MAGGIORE-2.jpg')
Picture.create(spot_id: 9, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/CLOSS-MAGGIORE/CLOSS-MAGGIORE-3.jpg')
Picture.create(spot_id: 10, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HUTONG/HUTONG-1.jpg')
Picture.create(spot_id: 10, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HUTONG/HUTONG-2.jpg')
Picture.create(spot_id: 10, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HUTONG/HUTONG-3.jpg')
Picture.create(spot_id: 11, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/MUSICAL/MUSICAL-1.jpg')
Picture.create(spot_id: 11, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/MUSICAL/MUSICAL-2.jpg')
Picture.create(spot_id: 11, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/MUSICAL/MUSICAL-3.jpg')
Picture.create(spot_id: 12, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LA-BODEGA-NEGRA/BODEGA-NEGRA-1.jpg')
Picture.create(spot_id: 12, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LA-BODEGA-NEGRA/BODEGA-NEGRA-2.jpg')
Picture.create(spot_id: 12, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LA-BODEGA-NEGRA/BODEGA-NEGRA-3.jpg')
Picture.create(spot_id: 13, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/SHOCHU-LOUNGE/SOCHU-1.jpg')
Picture.create(spot_id: 13, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/SHOCHU-LOUNGE/SOCHU-2.jpg')
Picture.create(spot_id: 13, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/SHOCHU-LOUNGE/SOCHU-3.jpg')
Picture.create(spot_id: 14, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LA-POULE-AU-POT/POULE-1.jpg')
Picture.create(spot_id: 14, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LA-POULE-AU-POT/POULE-2.jpg')
Picture.create(spot_id: 14, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LA-POULE-AU-POT/POULE-3.jpg')
Picture.create(spot_id: 1, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ESCAPE-ROOM/ESCAPE-ROOM-1.jpg')
Picture.create(spot_id: 1, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ESCAPE-ROOM/ESCAPE-ROOM-2.jpg')
Picture.create(spot_id: 1, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ESCAPE-ROOM/ESCAPE-ROOM-3.jpg')

Picture.create(spot_id: 2, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ICE-SKATING/ICE-SKATING-1.jpg')
Picture.create(spot_id: 2, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ICE-SKATING/ICE-SKATING-2.jpg')
Picture.create(spot_id: 2, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/ICE-SKATING/ICE-SKATING-3.jpg')

Picture.create(spot_id: 3, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/COLUMBIA-FLOWER-MARKET/COLUMBIA-FLOWER-MARKET-1.jpg')
Picture.create(spot_id: 3, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/COLUMBIA-FLOWER-MARKET/COLUMBIA-FLOWER-MARKET-2.jpg')
Picture.create(spot_id: 3, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/COLUMBIA-FLOWER-MARKET/COLUMBIA-FLOWER-MARKET-3.jpg')

Picture.create(spot_id: 4, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HILL-GARDEN-PERGOLA/HILL-GARDEN-1.jpg')
Picture.create(spot_id: 4, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HILL-GARDEN-PERGOLA/HILL-GARDEN-2.jpg')
Picture.create(spot_id: 4, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HILL-GARDEN-PERGOLA/HILL-GARDEN-3.jpg')

Picture.create(spot_id: 5, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GLOBE-THEATRE/GLOBE-1.jpg')
Picture.create(spot_id: 5, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GLOBE-THEATRE/GLOBE-2.jpg')
Picture.create(spot_id: 5, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GLOBE-THEATRE/GLOBE-3.jpg')

Picture.create(spot_id: 6, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HYDE-PARK-HORSE/HORSE-1.jpg')
Picture.create(spot_id: 6, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HYDE-PARK-HORSE/HORSE-2.jpg')
Picture.create(spot_id: 6, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/HYDE-PARK-HORSE/HORSE-3.jpg')

Picture.create(spot_id: 7, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/BOAT-TRIP-LITTLEVENICE/LITTLE-VENICE.1.jpg')
Picture.create(spot_id: 7, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/BOAT-TRIP-LITTLEVENICE/LITTLE-VENICE.2.jpg')
Picture.create(spot_id: 7, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/BOAT-TRIP-LITTLEVENICE/LITTLE-VENICE.3.jpg')
Picture.create(spot_id: 15, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LONDON-ZOO/LONDON-ZOO-1.jpg')
Picture.create(spot_id: 15, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LONDON-ZOO/LONDON-ZOO-2.jpg')
Picture.create(spot_id: 15, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LONDON-ZOO/LONDON-ZOO-3.jpg')
Picture.create(spot_id: 16, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GONG-SHARD/GONG-1.jpg')
Picture.create(spot_id: 16, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GONG-SHARD/GONG-2.jpg')
Picture.create(spot_id: 16, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GONG-SHARD/GONG-3.jpg')
Picture.create(spot_id: 17, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LONDON-HOTEL-SPA/HOTEL-SPA-1.jpg')
Picture.create(spot_id: 17, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LONDON-HOTEL-SPA/HOTEL-SPA-2.jpg')
Picture.create(spot_id: 17, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/LONDON-HOTEL-SPA/HOTEL-SPA-3.jpg')
Picture.create(spot_id: 18, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GREENWICH/GREENWICH-1.jpg')
Picture.create(spot_id: 18, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GREENWICH/GREENWICH-2.jpg')
Picture.create(spot_id: 18, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/GREENWICH/GREENWICH-3.jpg')
Picture.create(spot_id: 19, url: "https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/NEILS'S%20YARD/NEAL'S%20YARD-1.jpg")
Picture.create(spot_id: 19, url: "https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/NEILS'S%20YARD/NEAL'S%20YARD-2.jpg")
Picture.create(spot_id: 19, url: "https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/NEILS'S%20YARD/NEAL'S%20YARD-3.jpg")
Picture.create(spot_id: 20, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/BRITISH-MUSEUM/BRITISH-MUSEUM-1.jpg')
Picture.create(spot_id: 20, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/BRITISH-MUSEUM/BRITISH-MUSEUM-2.jpg')
Picture.create(spot_id: 20, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/BRITISH-MUSEUM/BRITISH-MUSEUM-3.jpeg')
Picture.create(spot_id: 21, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/NATURAL-HISTORY-MUSEUM/NATURAL-HISTORY-1.png')
Picture.create(spot_id: 21, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/NATURAL-HISTORY-MUSEUM/NATURAL-HISTORY-2.jpg')
Picture.create(spot_id: 21, url: 'https://raw.githubusercontent.com/rafahg/travel-final-project/media/media/NATURAL-HISTORY-MUSEUM/NATURAL-HISTORY-3.jpg')
# Comment.create(spot_id: 1, body: 'Really a nice and cosy place', user_id: 1)
# Comment.create(spot_id: 1, body: 'Fabulous food', user_id: 1)
# Comment.create(spot_id: 2, body: 'Romantic place', user_id: 2)
