import Carousels from '../components/Carousels'
import Courses from '../components/Courses'
import FAQ from '../components/FAQ'
import Reviews from '../components/Reviews'
import WhatsIncluded from '../components/WhatsIncluded'
import WhyUs from '../components/WhyUs'
import YoutubeVideo from '../components/YoutubeVideo'
import './styles.css'

export default function HomePage() {
  const videoId = 'e5Hc2B50Z7c';

  return (
    <div>
      <Carousels />
      <WhatsIncluded />
      <WhyUs />
      <Courses />
      <Reviews />
      <YoutubeVideo videoId={videoId} />
      <FAQ />
    </div>
  )
}
