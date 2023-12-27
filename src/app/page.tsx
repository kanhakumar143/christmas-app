import ChristmasWish from '@/Components/ChristmasWish'
import Snowfall from '@/Components/Snowfall'

export default function Home() {
  return (
    <> 
      <div className="relative h-screen overflow-hidden">
        <Snowfall />
        <ChristmasWish />
      </div>
    </>
  )
}
