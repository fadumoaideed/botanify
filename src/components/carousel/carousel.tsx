import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CarouselContainer, CarouselTrack, PlantCard } from './carousel.style'

interface Plant {
   id: number
   name: string
   image: string
   description: string
}

// Our own wrap function to handle circular navigation
const wrap = (min: number, max: number, value: number): number => {
   const rangeSize = max - min
   return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const plants: Plant[] = [
   {
      id: 1,
      name: 'Dracaena Trifasciata',
      image: '/plants/dracaena.jpg',
      description: 'One of the most effective houseplants in air purification.'
   },
   {
      id: 2,
      name: 'Crassula Ovata',
      image: '/plants/crassula.jpg',
      description: 'Also known as Jade Plant, perfect for beginners.'
   },
   {
      id: 3,
      name: 'Haworthiopsis Attenuata',
      image: '/plants/haworthiopsis.jpg',
      description: 'A small succulent with distinctive white stripes.'
   },
   {
      id: 4,
      name: 'Browningia Hertlingiana',
      image: '/plants/browningia.jpg',
      description: 'A beautiful cactus species that is easy to maintain.'
   },
   {
      id: 5,
      name: 'Chlorophytum Comosum',
      image: '/plants/chlorophytum.jpg',
      description: 'Also known as Spider Plant, great for hanging baskets.'
   }
]

const variants = {
   center: {
      x: 0,
      scale: 1.2,
      zIndex: 5,
      opacity: 1,
      transition: {
         duration: 0.5
      }
   },
   left: {
      x: -300,
      scale: 0.8,
      zIndex: 3,
      opacity: 0.8,
      transition: {
         duration: 0.5
      }
   },
   right: {
      x: 300,
      scale: 0.8,
      zIndex: 3,
      opacity: 0.8,
      transition: {
         duration: 0.5
      }
   },
   hidden: {
      x: 0,
      scale: 0.8,
      zIndex: 1,
      opacity: 0,
      transition: {
         duration: 0.5
      }
   }
}

export const Carousel: React.FC = () => {
   const [[page, direction], setPage] = useState([0, 0])
   const ROTATION_INTERVAL = 3000 // 3 seconds between each rotation

   useEffect(() => {
      const interval = setInterval(() => {
         setPage(([currentPage, _]) => [currentPage + 1, 1])
      }, ROTATION_INTERVAL)

      return () => clearInterval(interval)
   }, [])

   const plantIndex = wrap(0, plants.length, page)

   const getVisiblePlants = () => {
      const currentIndex = plantIndex
      const prevIndex = wrap(0, plants.length, currentIndex - 1)
      const nextIndex = wrap(0, plants.length, currentIndex + 1)

      return [
         { ...plants[prevIndex], position: 'left' },
         { ...plants[currentIndex], position: 'center' },
         { ...plants[nextIndex], position: 'right' }
      ]
   }

   return (
      <CarouselContainer>
         <CarouselTrack>
            <AnimatePresence initial={false} custom={direction}>
               {getVisiblePlants().map((plant) => (
                  <PlantCard
                     key={plant.id}
                     custom={direction}
                     variants={variants}
                     initial="hidden"
                     animate={plant.position as 'left' | 'center' | 'right'}
                     transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                     }}
                  >
                     <img src={plant.image} alt={plant.name} />
                     <h3>{plant.name}</h3>
                     <p>{plant.description}</p>
                  </PlantCard>
               ))}
            </AnimatePresence>
         </CarouselTrack>
      </CarouselContainer>
   )
}
