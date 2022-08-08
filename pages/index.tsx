import type { NextPage } from 'next'
import Head from 'next/head'
// custom components
import HeroSection from '../components/home/HeroSection'
import WelcomeSection from '../components/home/WelcomeSection'
import PlansSection from '../components/home/PlansSection'
import ReviewSection from '../components/home/ReviewSection'
import BlogPreviewSection from '../components/home/BlogPreviewSection'
import TransformationSection from '../components/home/TransformationSection'
import TestimonialSection from '../components/home/TestimonialSection'
import StartToday from '../components/home/StartToday'
import AboutMe from '../components/home/AboutMe'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UNION XESTHETICS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <WelcomeSection />
      <TransformationSection />
      <PlansSection />
      <ReviewSection />
      <BlogPreviewSection />
      <TestimonialSection />
      {/* <StartToday /> */}
      <AboutMe />
      {/* about us / description */}
    </div >
  )
}

export default Home
