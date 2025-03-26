import Carousels from '../components/Carousels'
import Courses from '../components/Courses'
import WhatsIncluded from '../components/WhatsIncluded'
import WhyUs from '../components/WhyUs'
import './styles.css'

export default function HomePage() {
  return (
    <div>
      <Carousels />
      <WhatsIncluded />
      <WhyUs />
      <Courses />
    </div>
  )
}
