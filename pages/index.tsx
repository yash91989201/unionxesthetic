import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
// custom components
import HeroSection from '../components/home/HeroSection'
import WelcomeSection from '../components/home/WelcomeSection'
import PlansSection from '../components/home/PlansSection'
import ReviewSection from '../components/home/ReviewSection'
import BlogPreviewSection from '../components/home/BlogPreviewSection'
import TransformationSection from '../components/home/TransformationSection'
import TestimonialSection from '../components/home/TestimonialSection'
import AboutMe from '../components/home/AboutMe'

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="Home"
        description=""
      />
      <HeroSection />
      <WelcomeSection />
      <TransformationSection />
      <PlansSection />
      <ReviewSection />
      <BlogPreviewSection />
      <TestimonialSection />
      <AboutMe />
    </div >
  )
}

export default Home
