import { Plant, Watering, LightLevel, Drainage } from '../types/plant';

export const plantDatabase: Plant[] = [
   {
      id: '1',
      title: 'Philodendron White Princess',
      scientificName: 'Philodendron erubescens "White Princess"',
      watering: Watering.weekly,
      image: 'plant_images/philodendron-white-princess.webp',
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
      image: 'plant_images/philodendron-melanochrysum.webp',
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
      image: 'plant_images/caladium-raspberry-moon.webp',
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
      image: 'plant_images/caladium-moon-summer-breeze.webp',
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
      image: 'plant_images/caladium-miss-muffet.webp',
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
      image: 'plant_images/begonia-albopicta-silver.webp',
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
      image: 'plant_images/anthurium-royal-red.webp',
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
      image: 'plant_images/alocasia-red-secret.webp',
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
      image: 'plant_images/alocasia-odora.webp',
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
      image: 'plant_images/aglaonema-spotted-star.webp',
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
      image: 'plant_images/aglaonema-crete.webp',
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
      image: 'plant_images/calathea-dottie.webp',
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
      image: 'plant_images/variegated-peace-lily.webp',
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
      image: 'plant_images/black-flamingo-flower.webp',
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
      image: 'plant_images/rubber-plant-belize.webp',
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
      image: 'plant_images/pink-nanouk.webp',
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
      image: 'plant_images/ficus-benghalensis-roy.webp',
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
      image: 'plant_images/red-heart-syngonium.webp',
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
      image: 'plant_images/variegated-monstera.webp',
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
      image: 'plant_images/satin-pothos.webp',
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
      image: 'plant_images/marble-queen-pothos.webp',
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
      image: 'plant_images/golden-pothos.webp',
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
      image: 'plant_images/neon-pothos.webp',
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
      image: 'plant_images/snake-plant-moonshine.webp',
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
      image: 'plant_images/philodendron-micans.webp',
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
      image: 'plant_images/oxalis.webp',
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
      image: 'plant_images/weeping-fig.webp',
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
      image: 'plant_images/ctenanthe-compact-star.webp',
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
      image: 'plant_images/calathea-white-star.webp',
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
      image: 'plant_images/calathea-white-fusion.webp',
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
      image: 'plant_images/calathea-jungle-velvet.webp',
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
      image: 'plant_images/calathea-triostar.webp',
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
      image: 'plant_images/calathea-crimson.webp',
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
      image: 'plant_images/calathea-pinstripe.webp',
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
      image: 'plant_images/calathea-orbifolia.webp',
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
      image: 'plant_images/calathea-medallion.webp',
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
      image: 'plant_images/begonia-masoniana-rock.webp',
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
      image: 'plant_images/butterfly-palm.webp',
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
      image: 'plant_images/pink-flamingo-flower.webp',
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
      image: 'plant_images/peach-flamingo-flower.webp',
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
      image: 'plant_images/anthurium-clarinervium.webp',
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
      image: 'plant_images/peperomia.webp',
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
      image: 'plant_imagess/StringofHearts-Arespot_5_540x.jpg',
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
      image: 'plant_images/caladium.webp',
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
      image: 'plant_images/never-never-plant.webp',
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
      image: 'plant_images/calathea.webp',
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
      image: 'plant_images/variegated-rubber-plant.webp',
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
      id: '49',
      title: 'Rubber Plant',
      scientificName: 'Ficus elastica',
      watering: Watering.weekly,
      image: 'plant_images/rubber-plant.webp',
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
      image: 'plant_images/pothos.webp',
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
      image: 'plant_images/philodendron-scandens.webp',
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
      image: 'plant_images/peace-lily.webp',
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
      image: 'plant_images/parlor-palm.webp',
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
      image: 'plant_images/monstera-deliciosa.webp',
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
      image: 'plant_images/monkey-mask-monstera.webp',
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
      image: 'plant_images/mini-monstera.webp',
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
      image: 'plant_images/kentia-palm.webp',
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
      image: 'plant_images/fiddle-leaf-fig.webp',
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
      image: 'plant_images/chinese-money-plant.webp',
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
      image: 'plant_images/boston-fern.webp',
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
      image: 'plant_images/blue-star-fern.webp',
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
      image: 'plant_images/black-raven-zz.webp',
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
