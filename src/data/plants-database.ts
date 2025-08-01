import { Plant, Watering, LightLevel, Drainage } from '../types/plant';

export const plantDatabase: Plant[] = [
   {
      id: '1',
      title: 'Aglaonema Crete',
      scientificName: 'Aglaonema "Crete"',
      watering: Watering.weekly,
      image: 'plant_images/aglaonema-crete.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      description:
         'This low-maintenance plant thrives in bright, indirect light and prefers consistently moist soil. Keep it in a warm room with high humidity, away from cold drafts and direct sunlight. Considerations: While it can tolerate low light, its vibrant pink and green variegation will be more pronounced in brighter conditions.',
      tags: {
         common_names: 'Crete Chinese Evergreen',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '2',
      title: 'Aglaonema Spotted Star',
      scientificName: 'Aglaonema "Spotted Star"',
      watering: Watering.weekly,
      image: 'plant_images/aglaonema-spotted-star.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      description:
         "This striking variety features silver-spotted leaves that add texture to any space. Water when the top inch of soil feels dry and maintain moderate humidity levels. Considerations: The plant's variegation may fade if kept in low light conditions, so provide bright, indirect light for best results.",
      tags: {
         common_names: 'Spotted Star Chinese Evergreen',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '3',
      title: 'Alocasia Odora',
      scientificName: 'Alocasia odora',
      watering: Watering.weekly,
      image: 'plant_images/alocasia-odora.webp',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      description:
         'This dramatic plant features large, glossy leaves that can reach impressive sizes. Place it in bright, indirect light and keep the soil consistently moist but not soggy. Considerations: This plant goes dormant in winter, so reduce watering and expect some leaf loss during this period.',
      tags: {
         common_names: 'Night-scented Lily, Giant Upright Elephant Ear',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '4',
      title: 'Alocasia Red Secret',
      scientificName: 'Alocasia "Red Secret"',
      watering: Watering.weekly,
      image: 'plant_images/alocasia-red-secret.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Red Secret Elephant Ear',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '5',
      title: 'Aloe Vera',
      scientificName: 'Aloe barbadensis',
      watering: Watering.weekly,
      image: 'plant_images/aloe-vera.jpg',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Aloe',
         difficulty: 1,
         toxicity: 'non-toxic',
         origin: 'Africa'
      }
   },
   {
      id: '6',
      title: 'Anthurium Clarinervium',
      scientificName: 'Anthurium clarinervium',
      watering: Watering.weekly,
      image: 'plant_images/anthurium-clarinervium.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Velvet Cardboard Anthurium',
         difficulty: 4,
         toxicity: 'toxic to pets',
         origin: 'Mexico'
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
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '8',
      title: 'Areca Palm',
      scientificName: 'Dypsis lutescens',
      watering: Watering.weekly,
      image: 'plant_images/areca-palm.jpg',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Areca Palm',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'Madagascar'
      }
   },
   {
      id: '9',
      title: 'Begonia Albopicta Silver',
      scientificName: 'Begonia albopicta "Silver"',
      watering: Watering.weekly,
      image: 'plant_images/begonia-albopicta-silver.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Silver Begonia',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '10',
      title: 'Begonia Masoniana Rock',
      scientificName: 'Begonia masoniana "Rock"',
      watering: Watering.weekly,
      image: 'plant_images/begonia-masoniana-rock.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Iron Cross Begonia',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '11',
      title: 'Black Flamingo Flower',
      scientificName: 'Anthurium andraeanum "Black"',
      watering: Watering.weekly,
      image: 'plant_images/black-flamingo-flower.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Black Anthurium',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '12',
      title: 'Black Raven ZZ',
      scientificName: 'Zamioculcas zamiifolia "Raven"',
      watering: Watering.monthly,
      image: 'plant_images/zz-raven.jpg',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Raven ZZ Plant',
         difficulty: 1,
         toxicity: 'toxic to pets',
         origin: 'East Africa'
      }
   },
   {
      id: '13',
      title: 'Blue Star Fern',
      scientificName: 'Phlebodium aureum',
      watering: Watering.weekly,
      image: 'plant_images/bluestar-fern.jpg',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Golden Polypody',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '14',
      title: 'Boston Fern',
      scientificName: 'Nephrolepis exaltata',
      watering: Watering.weekly,
      image: 'plant_images/boston-fern.jpg',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Sword Fern',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'North America'
      }
   },
   {
      id: '15',
      title: 'Butterfly Palm',
      scientificName: 'Dypsis lutescens',
      watering: Watering.weekly,
      image: 'plant_images/butterfly-palm.webp',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Areca Palm',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'Madagascar'
      }
   },
   {
      id: '17',
      title: 'Caladium Miss Muffet',
      scientificName: 'Caladium "Miss Muffet"',
      watering: Watering.weekly,
      image: 'plant_images/caladium-miss-muffet.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Miss Muffet Caladium',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '18',
      title: 'Caladium Moon & Summer Breeze',
      scientificName: 'Caladium "Moon & Summer Breeze"',
      watering: Watering.weekly,
      image: 'plant_images/caladium-moon-summer-breeze.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Moon & Summer Breeze Caladium',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '19',
      title: 'Caladium Raspberry Moon',
      scientificName: 'Caladium "Raspberry Moon"',
      watering: Watering.weekly,
      image: 'plant_images/caladium-raspberry-moon.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Raspberry Moon Caladium',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '20',
      title: 'Calathea',
      scientificName: 'Calathea makoyana',
      watering: Watering.weekly,
      image: 'plant_images/calathea.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Peacock Plant',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '21',
      title: 'Calathea Crimson',
      scientificName: 'Calathea "Crimson"',
      watering: Watering.weekly,
      image: 'plant_images/calathea-crimson.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Crimson Prayer Plant',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '22',
      title: 'Calathea Jungle Velvet',
      scientificName: 'Calathea "Jungle Velvet"',
      watering: Watering.weekly,
      image: 'plant_images/calathea-jungle-velvet.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Jungle Velvet Prayer Plant',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '23',
      title: 'Calathea Medallion',
      scientificName: 'Calathea "Medallion"',
      watering: Watering.weekly,
      image: 'plant_images/calathea-medallion.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Medallion Prayer Plant',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '24',
      title: 'Calathea Orbifolia',
      scientificName: 'Calathea orbifolia',
      watering: Watering.weekly,
      image: 'plant_images/calathea-orbifolia.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Round-leaf Calathea',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '25',
      title: 'Calathea Pinstripe',
      scientificName: 'Calathea ornata "Pinstripe"',
      watering: Watering.weekly,
      image: 'plant_images/calathea-pinstripe.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Pinstripe Prayer Plant',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '26',
      title: 'Calathea Triostar',
      scientificName: 'Calathea "Triostar"',
      watering: Watering.weekly,
      image: 'plant_images/calathea-triostar.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Tricolor Prayer Plant',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '27',
      title: 'Calathea White Fusion',
      scientificName: 'Calathea "White Fusion"',
      watering: Watering.weekly,
      image: 'plant_images/calathea-white-fusion.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'White Fusion Prayer Plant',
         difficulty: 4,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '28',
      title: 'Calathea White Star',
      scientificName: 'Calathea "White Star"',
      watering: Watering.weekly,
      image: 'plant_images/calathea-white-star.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'White Star Prayer Plant',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '29',
      title: 'Chinese Money Plant',
      scientificName: 'Pilea peperomioides',
      watering: Watering.weekly,
      image: 'plant_images/chinese-money-plant.jpg',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Pancake Plant',
         difficulty: 2,
         toxicity: 'non-toxic',
         origin: 'China'
      }
   },
   {
      id: '30',
      title: 'Ctenanthe Compact Star',
      scientificName: 'Ctenanthe "Compact Star"',
      watering: Watering.weekly,
      image: 'plant_images/ctenanthe-compact-star.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Compact Star Prayer Plant',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '31',
      title: 'Eucalyptus',
      scientificName: 'Eucalyptus',
      watering: Watering.weekly,
      image: 'plant_images/eucalyptus.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Eucalyptus',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'Australia'
      }
   },
   {
      id: '32',
      title: 'Fiddle Leaf Fig',
      scientificName: 'Ficus lyrata',
      watering: Watering.weekly,
      image: 'plant_images/fiddle-leaf-fig.webp',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Fiddle Leaf Fig',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'West Africa'
      }
   },
   {
      id: '33',
      title: 'Ficus Benghalensis Roy',
      scientificName: 'Ficus benghalensis "Roy"',
      watering: Watering.weekly,
      image: 'plant_images/ficus-benghalensis-roy.webp',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Banyan Tree',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '34',
      title: 'Golden Pothos',
      scientificName: 'Epipremnum aureum',
      watering: Watering.weekly,
      image: 'plant_images/golden-pothos.jpg',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: "Devil's Ivy",
         difficulty: 1,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '35',
      title: 'Hoya Linearis',
      scientificName: 'Hoya linearis',
      watering: Watering.weekly,
      image: 'plant_images/hoya-linearis.jpg',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Wax Plant',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '36',
      title: 'Jade Plant',
      scientificName: 'Crassula ovata',
      watering: Watering.weekly,
      image: 'plant_images/jade-plant.jpg',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Jade Plant',
         difficulty: 2,
         toxicity: 'non-toxic',
         origin: 'South Africa'
      }
   },
   {
      id: '37',
      title: 'Kentia Palm',
      scientificName: 'Howea forsteriana',
      watering: Watering.weekly,
      image: 'plant_images/kentia-palm.webp',
      sunlight: LightLevel.partial,
      maxheight: '8-10 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Paradise Palm',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'Australia'
      }
   },
   {
      id: '38',
      title: 'Marble Queen Pothos',
      scientificName: 'Epipremnum aureum "Marble Queen"',
      watering: Watering.weekly,
      image: 'plant_images/marble-queen-pothos.webp',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Pothos',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '39',
      title: 'Monstera Deliciosa',
      scientificName: 'Monstera deliciosa',
      watering: Watering.weekly,
      image: 'plant_images/monstera.jpg',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Swiss Cheese Plant',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '40',
      title: 'Neon Pothos',
      scientificName: 'Epipremnum aureum "Neon"',
      watering: Watering.weekly,
      image: 'plant_images/neon-pothos.webp',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Lime Pothos',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '41',
      title: 'Never Never Plant',
      scientificName: 'Ctenanthe oppenheimiana',
      watering: Watering.weekly,
      image: 'plant_images/never-never-plant.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Prayer Plant',
         difficulty: 3,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '42',
      title: 'Oxalis',
      scientificName: 'Oxalis triangularis',
      watering: Watering.weekly,
      image: 'plant_images/oxalis.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Purple Shamrock',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '43',
      title: 'Peace Lily',
      scientificName: 'Spathiphyllum',
      watering: Watering.weekly,
      image: 'plant_images/peace-lily.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Spathiphyllum',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '44',
      title: 'Peach Flamingo Flower',
      scientificName: 'Anthurium andraeanum "Peach"',
      watering: Watering.weekly,
      image: 'plant_images/peach-flamingo-flower.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Peach Anthurium',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '45',
      title: 'Peperomia',
      scientificName: 'Peperomia obtusifolia',
      watering: Watering.weekly,
      image: 'plant_images/peperomia.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Baby Rubber Plant',
         difficulty: 2,
         toxicity: 'non-toxic',
         origin: 'South America'
      }
   },
   {
      id: '46',
      title: 'Philodendron Melanochrysum',
      scientificName: 'Philodendron melanochrysum',
      watering: Watering.weekly,
      image: 'plant_images/philodendron-melanochrysum.webp',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Black Gold Philodendron',
         difficulty: 4,
         toxicity: 'toxic to pets',
         origin: 'Colombia'
      }
   },
   {
      id: '47',
      title: 'Philodendron Micans',
      scientificName: 'Philodendron hederaceum var. micans',
      watering: Watering.weekly,
      image: 'plant_images/philodendron-micans.webp',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Velvet Leaf Philodendron',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '48',
      title: 'Philodendron White Princess',
      scientificName: 'Philodendron erubescens "White Princess"',
      watering: Watering.weekly,
      image: 'plant_images/philodendron-white-princess.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'White Princess Philodendron',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'South America'
      }
   },
   {
      id: '49',
      title: 'Pink Flamingo Flower',
      scientificName: 'Anthurium andraeanum "Pink"',
      watering: Watering.weekly,
      image: 'plant_images/pink-flamingo-flower.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Pink Anthurium',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '50',
      title: 'Pink Nanouk',
      scientificName: 'Tradescantia "Nanouk"',
      watering: Watering.weekly,
      image: 'plant_images/pink-nanouk.webp',
      sunlight: LightLevel.partial,
      maxheight: '1-2 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Fantasy Venice',
         difficulty: 2,
         toxicity: 'mildly toxic to pets',
         origin: 'North America'
      }
   },
   {
      id: '51',
      title: 'Red Heart Syngonium',
      scientificName: 'Syngonium podophyllum "Red Heart"',
      watering: Watering.weekly,
      image: 'plant_images/red-heart-syngonium.webp',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Arrowhead Plant',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '52',
      title: 'Rubber Plant',
      scientificName: 'Ficus elastica',
      watering: Watering.weekly,
      image: 'plant_images/rubber-plant.jpg',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Indian Rubber Plant',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '53',
      title: 'Rubber Plant Belize',
      scientificName: 'Ficus elastica "Belize"',
      watering: Watering.weekly,
      image: 'plant_images/rubber-plant-belize.webp',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Rubber Plant',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '54',
      title: 'Satin Pothos',
      scientificName: 'Scindapsus pictus',
      watering: Watering.weekly,
      image: 'plant_images/satin-pothos.webp',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Silver Pothos',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '55',
      title: 'Snake Plant Moonshine',
      scientificName: 'Sansevieria trifasciata "Moonshine"',
      watering: Watering.monthly,
      image: 'plant_images/snake-plant-moonshine.webp',
      sunlight: LightLevel.direct,
      maxheight: '2-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Moonshine Snake Plant',
         difficulty: 1,
         toxicity: 'toxic to pets',
         origin: 'West Africa'
      }
   },
   {
      id: '56',
      title: 'Spider Plant',
      scientificName: 'Chamaedorea elegans',
      watering: Watering.weekly,
      image: 'plant_images/spider-plant.jpg',
      sunlight: LightLevel.partial,
      maxheight: '4-6 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Spider Plant',
         difficulty: 2,
         toxicity: 'non-toxic',
         origin: 'Central America'
      }
   },
   {
      id: '57',
      title: 'String of Hearts',
      scientificName: 'Ceropegia woodii',
      watering: Watering.weekly,
      image: 'plant_images/string-of-hearts.jpg',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Rosary Vine',
         difficulty: 2,
         toxicity: 'non-toxic',
         origin: 'South Africa'
      }
   },
   {
      id: '58',
      title: 'Trigona African Milk Tree',
      scientificName: 'Trigona africanus',
      watering: Watering.weekly,
      image: 'plant_images/african-milk-tree-trigona.jpg',
      sunlight: LightLevel.partial,
      maxheight: '3-4 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'African Milk Tree',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Africa'
      }
   },
   {
      id: '59',
      title: 'Variegated Monstera',
      scientificName: 'Monstera deliciosa "Variegata"',
      watering: Watering.weekly,
      image: 'plant_images/variegated-monstera.webp',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Swiss Cheese Plant',
         difficulty: 4,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '60',
      title: 'Variegated Peace Lily',
      scientificName: 'Spathiphyllum "Variegated"',
      watering: Watering.weekly,
      image: 'plant_images/variegated-peace-lily.webp',
      sunlight: LightLevel.partial,
      maxheight: '2-3 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Spathiphyllum',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Central America'
      }
   },
   {
      id: '61',
      title: 'Variegated Rubber Plant',
      scientificName: 'Ficus elastica "Variegata"',
      watering: Watering.weekly,
      image: 'plant_images/variegated-rubber.webp',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Variegated Ficus',
         difficulty: 2,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   },
   {
      id: '62',
      title: 'Weeping Fig',
      scientificName: 'Ficus benjamina',
      watering: Watering.weekly,
      image: 'plant_images/weeping-fig.webp',
      sunlight: LightLevel.partial,
      maxheight: '6-8 feet',
      soilDrainage: Drainage.high,
      tags: {
         common_names: 'Benjamin Fig',
         difficulty: 3,
         toxicity: 'toxic to pets',
         origin: 'Asia'
      }
   }
];
