import { CarouselMod } from '../components/CarouselMod'
import './styles.css'

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl h-[4rem] flex items-center justify-center">
        Learn. Build.&nbsp; <span className="text-red-500">Succeed.</span>
      </h1>
      <CarouselMod />
    </div>
  )
}
