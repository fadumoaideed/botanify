import { Plant, Watering, LightLevel, Drainage } from '../types/plant';

export const plantDatabase: Plant[] = [
   {
      id: '1',
      title: 'Philodendron White Princess',
      scientificName: 'Philodendron erubescens "White Princess"',
      watering: Watering.weekly,
      image: 'plant_images/1506_-Philodedron-White-Princess-holaplantas-_png_900x.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'White Princess Philodendron',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '2',
      title: 'Philodendron Melanochrysum',
      scientificName: 'Philodendron melanochrysum',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/philodendron-melanochrysum-678677_900x.webp?v=1717982339',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Black Gold Philodendron',
         difficulty: 'advanced',
         toxicity: 'toxic to pets',
         origin: 'Colombia'
      }
   },
   {
      id: '3',
      title: 'Caladium Raspberry Moon',
      scientificName: 'Caladium "Raspberry Moon"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/caladium-raspberry-moon-567832_900x.webp?v=1713974284',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Raspberry Moon Caladium',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '4',
      title: 'Caladium Moon & Summer Breeze',
      scientificName: 'Caladium "Moon & Summer Breeze"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/caladium-moon-summer-breeze-968027_900x.webp?v=1713973355',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Moon & Summer Breeze Caladium',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '5',
      title: 'Caladium Miss Muffet',
      scientificName: 'Caladium "Miss Muffet"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/caladium-miss-muffet-371109_900x.webp?v=1713972060',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Miss Muffet Caladium',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '6',
      title: 'Begonia Albopicta Silver',
      scientificName: 'Begonia albopicta "Silver"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/Begoniasilverleaf2-Photoroom_1_900x.webp?v=1713966244',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Silver Begonia',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '7',
      title: 'Anthurium Royal Red',
      scientificName: 'Anthurium andraeanum "Royal Red"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/AnthuriumRoyalRed-LeafEnvy-Leaf_900x.webp?v=1713965476',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Royal Red Flamingo Flower',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '8',
      title: 'Alocasia Red Secret',
      scientificName: 'Alocasia "Red Secret"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/alocasia-red-secret-493799_900x.webp?v=1713964354',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Red Secret Elephant Ear',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '9',
      title: 'Alocasia Odora',
      scientificName: 'Alocasia odora',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/alocasia-odora-800797_900x.webp?v=1713963744',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Night-scented Lily, Giant Upright Elephant Ear',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '10',
      title: 'Aglaonema Spotted Star',
      scientificName: 'Aglaonema "Spotted Star"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/AglaonemaSpottedStarLeaf_900x.webp?v=1713964636',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Spotted Star Chinese Evergreen',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '11',
      title: 'Aglaonema Crete',
      scientificName: 'Aglaonema "Crete"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/aglaonema-crete-936492_900x.webp?v=1713961955',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Crete Chinese Evergreen',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '12',
      title: 'Calathea Dottie',
      scientificName: 'Calathea roseopicta "Dottie"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/CalatheaDottieLeaf-LeafEnvy_900x.webp?v=1713929568',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Dottie Prayer Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '13',
      title: 'Variegated Peace Lily',
      scientificName: 'Spathiphyllum "Variegated"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/variegated-peace-lily-562806_900x.webp?v=1713928799',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Spathiphyllum',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '14',
      title: 'Black Flamingo Flower',
      scientificName: 'Anthurium andraeanum "Black"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/anthurium-karma-black-282089_900x.webp?v=1713928104',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Black Anthurium',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '15',
      title: 'Rubber Plant Belize',
      scientificName: 'Ficus elastica "Belize"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/rubber-plant-belize-260601_900x.webp?v=1713927349',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Rubber Plant',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '16',
      title: 'Pink Nanouk',
      scientificName: 'Tradescantia "Nanouk"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/LeafEnvy_NottingHill2_web-50_900x.webp?v=1713926722',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Fantasy Venice',
         difficulty: 'easy',
         toxicity: 'mildly toxic to pets',
         origin: 'North America'
      }
   },
   {
      id: '17',
      title: 'Ficus Benghalensis Roy',
      scientificName: 'Ficus benghalensis "Roy"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/Leaf-Envy-Ficus-roy-Leaf-2_900x.webp?v=1713925706',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Banyan Tree',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '18',
      title: 'Red Heart Syngonium',
      scientificName: 'Syngonium podophyllum "Red Heart"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/red-heart-syngonium-819127_900x.webp?v=1713925105',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Arrowhead Plant',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '19',
      title: 'Variegated Monstera',
      scientificName: 'Monstera deliciosa "Variegata"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/variegated-monstera-504899_900x.webp?v=1713924499',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Swiss Cheese Plant',
         difficulty: 'advanced',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '20',
      title: 'Satin Pothos',
      scientificName: 'Scindapsus pictus',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/satin-pothos-263605_900x.webp?v=1713921514',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Silver Pothos',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '21',
      title: 'Marble Queen Pothos',
      scientificName: 'Epipremnum aureum "Marble Queen"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/marble-queen-pothos-316774_900x.webp?v=1713920796',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Pothos',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '22',
      title: 'Golden Pothos',
      scientificName: 'Epipremnum aureum',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/golden-pothos-969709_900x.webp?v=1713870446',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: "Devil's Ivy",
         difficulty: 'very easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '23',
      title: 'Neon Pothos',
      scientificName: 'Epipremnum aureum "Neon"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/neon-pothos-430813_900x.webp?v=1713869467',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Lime Pothos',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '24',
      title: 'Snake Plant Moonshine',
      scientificName: 'Sansevieria trifasciata "Moonshine"',
      watering: Watering.monthly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/snake-plant-moonshine-127237_900x.webp?v=1713866928',
      sunlight: LightLevel.direct,
      maxheight: '2-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Moonshine Snake Plant',
         difficulty: 'very easy',
         toxicity: 'toxic to pets',
         origin: 'West Africa'
      }
   },
   {
      id: '25',
      title: 'Philodendron Micans',
      scientificName: 'Philodendron hederaceum var. micans',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/philodendron-micans-663532_900x.webp?v=1713866217',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Velvet Leaf Philodendron',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '26',
      title: 'Oxalis',
      scientificName: 'Oxalis triangularis',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/oxalis-304645_900x.webp?v=1713863891',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Purple Shamrock',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '27',
      title: 'Weeping Fig',
      scientificName: 'Ficus benjamina',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/weeping-fig-951801_900x.webp?v=1713779891',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Benjamin Fig',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '28',
      title: 'Ctenanthe Compact Star',
      scientificName: 'Ctenanthe "Compact Star"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/ctenanthe-compact-star-874290_900x.webp?v=1713779296',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Compact Star Prayer Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '29',
      title: 'Calathea White Star',
      scientificName: 'Calathea "White Star"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/calathea-white-star-336532_900x.webp?v=1713778447',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'White Star Prayer Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '30',
      title: 'Calathea White Fusion',
      scientificName: 'Calathea "White Fusion"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/calathea-white-fusion-919328_900x.webp?v=1713777628',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'White Fusion Prayer Plant',
         difficulty: 'advanced',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '31',
      title: 'Calathea Jungle Velvet',
      scientificName: 'Calathea "Jungle Velvet"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/calathea-jungle-velvet-162889_900x.webp?v=1713776613',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Jungle Velvet Prayer Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '32',
      title: 'Calathea Triostar',
      scientificName: 'Calathea "Triostar"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/calathea-triostar-756085_900x.webp?v=1713775654',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Tricolor Prayer Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '33',
      title: 'Calathea Crimson',
      scientificName: 'Calathea "Crimson"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/calathea-crimson-818497_900x.webp?v=1713715254',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Crimson Prayer Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '34',
      title: 'Calathea Pinstripe',
      scientificName: 'Calathea ornata "Pinstripe"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/calathea-pinstripe-831698_900x.webp?v=1713714085',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Pinstripe Prayer Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '35',
      title: 'Calathea Orbifolia',
      scientificName: 'Calathea orbifolia',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/CalatheaOrbifolia_BroadwayChalk-Photoroom_900x.webp?v=1713713030',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Round-leaf Calathea',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '36',
      title: 'Calathea Medallion',
      scientificName: 'Calathea "Medallion"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/calathea-medallion-213373_900x.webp?v=1713712061',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Medallion Prayer Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '37',
      title: 'Begonia Masoniana Rock',
      scientificName: 'Begonia masoniana "Rock"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/begonia-masoniana-rock-685437_900x.webp?v=1713706436',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Iron Cross Begonia',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '38',
      title: 'Butterfly Palm',
      scientificName: 'Dypsis lutescens',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/butterfly-palm-432099_900x.webp?v=1713704864',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Areca Palm',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'Madagascar'
      }
   },
   {
      id: '39',
      title: 'Pink Flamingo Flower',
      scientificName: 'Anthurium andraeanum "Pink"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/AnthuriumKarmaPinkLeaf-Photoroom_900x.webp?v=1713640462',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Pink Anthurium',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '40',
      title: 'Peach Flamingo Flower',
      scientificName: 'Anthurium andraeanum "Peach"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/peach-flamingo-flower-anthurium-787323_900x.webp?v=1713639051',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Peach Anthurium',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '41',
      title: 'Anthurium Clarinervium',
      scientificName: 'Anthurium clarinervium',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/anthurium-clarinervium-992191_900x.webp?v=1713637583',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Velvet Cardboard Anthurium',
         difficulty: 'advanced',
         toxicity: 'toxic to pets',
         origin: 'Mexico'
      }
   },
   {
      id: '42',
      title: 'Peperomia',
      scientificName: 'Peperomia obtusifolia',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/peperomia-963622_900x.jpg?v=1693062662',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Baby Rubber Plant',
         difficulty: 'easy',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '43',
      title: 'String of Hearts',
      scientificName: 'Ceropegia woodii',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/string-of-hearts-104301_900x.jpg?v=1693062664',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Rosary Vine',
         difficulty: 'easy',
         toxicity: 'non-toxic',
         origin: 'South Africa'
      }
   },
   {
      id: '44',
      title: 'Caladium',
      scientificName: 'Caladium bicolor',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/caladium-129130_900x.jpg?v=1693062669',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Angel Wings',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '45',
      title: 'Never Never Plant',
      scientificName: 'Ctenanthe oppenheimiana',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/never-never-plant-819282_900x.jpg?v=1693062660',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Prayer Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '46',
      title: 'Calathea',
      scientificName: 'Calathea makoyana',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/calathea-604201_900x.jpg?v=1693062702',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Peacock Plant',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '47',
      title: 'Variegated Rubber Plant',
      scientificName: 'Ficus elastica "Variegata"',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/variegated-rubber-plant-700219_900x.jpg?v=1693062673',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Ficus',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '48',
      title: 'Snake Plant',
      scientificName: 'Sansevieria trifasciata',
      watering: Watering.monthly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/snake-plant-496732_900x.jpg?v=1693062675',
      sunlight: LightLevel.direct,
      maxheight: '2-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: "Mother-in-Law's Tongue",
         difficulty: 'very easy',
         toxicity: 'toxic to pets',
         origin: 'West Africa'
      }
   },
   {
      id: '49',
      title: 'Rubber Plant',
      scientificName: 'Ficus elastica',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/rubber-plant-919058_900x.jpg?v=1693062678',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Indian Rubber Plant',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '50',
      title: 'Pothos',
      scientificName: 'Epipremnum aureum',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/pothos-925852_900x.jpg?v=1693062680',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: "Devil's Ivy",
         difficulty: 'very easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '51',
      title: 'Philodendron Scandens',
      scientificName: 'Philodendron hederaceum',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/philodendron-scandens-291958_900x.jpg?v=1693062682',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Heartleaf Philodendron',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '52',
      title: 'Peace Lily',
      scientificName: 'Spathiphyllum',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/peace-lily-622333_900x.jpg?v=1693062684',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Spathiphyllum',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '53',
      title: 'Parlor Palm',
      scientificName: 'Chamaedorea elegans',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/parlor-palm-499014_900x.jpg?v=1693062686',
      sunlight: LightLevel.partial,
      maxheight: '4-6 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Neanthe Bella Palm',
         difficulty: 'easy',
         toxicity: 'non-toxic',
         origin: 'Central America'
      }
   },
   {
      id: '54',
      title: 'Monstera Deliciosa',
      scientificName: 'Monstera deliciosa',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/monstera-deliciosa-451678_900x.jpg?v=1693062689',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Swiss Cheese Plant',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '55',
      title: 'Monkey Mask Monstera',
      scientificName: 'Monstera adansonii',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/monkey-mask-monstera-396609_900x.jpg?v=1693062691',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Swiss Cheese Vine',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '56',
      title: 'Mini Monstera',
      scientificName: 'Rhaphidophora tetrasperma',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/mini-monstera-529396_900x.jpg?v=1693062693',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Philodendron Ginny',
         difficulty: 'easy',
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '57',
      title: 'Kentia Palm',
      scientificName: 'Howea forsteriana',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/kentia-palm-600716_900x.jpg?v=1693062695',
      sunlight: LightLevel.partial,
      maxheight: '8-10 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Paradise Palm',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'Australia'
      }
   },
   {
      id: '58',
      title: 'Fiddle Leaf Fig',
      scientificName: 'Ficus lyrata',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/fiddle-leaf-fig-287792_900x.jpg?v=1693062697',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Fiddle Leaf Fig',
         difficulty: 'moderate',
         toxicity: 'toxic to pets',
         origin: 'West Africa'
      }
   },
   {
      id: '59',
      title: 'Chinese Money Plant',
      scientificName: 'Pilea peperomioides',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/chinese-money-plant-431882_900x.jpg?v=1693062700',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Pancake Plant',
         difficulty: 'easy',
         toxicity: 'non-toxic',
         origin: 'China'
      }
   },
   {
      id: '60',
      title: 'Boston Fern',
      scientificName: 'Nephrolepis exaltata',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/boston-fern-126176_900x.jpg?v=1693062708',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Sword Fern',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'North America'
      }
   },
   {
      id: '61',
      title: 'Blue Star Fern',
      scientificName: 'Phlebodium aureum',
      watering: Watering.weekly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/blue-star-fern-863139_900x.jpg?v=1693062710',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Golden Polypody',
         difficulty: 'moderate',
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '62',
      title: 'Black Raven ZZ',
      scientificName: 'Zamioculcas zamiifolia "Raven"',
      watering: Watering.monthly,
      image: 'https://www.leafenvy.co.uk/cdn/shop/articles/black-raven-zz-303610_900x.jpg?v=1693062712',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Raven ZZ Plant',
         difficulty: 'very easy',
         toxicity: 'toxic to pets',
         origin: 'East Africa'
      }
   }
];
