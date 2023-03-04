import { NextSeo } from "next-seo";
// custom components
import {
  HeroSection,
  WelcomeSection,
  PlansSection,
  ReviewSection,
  TransformationSection,
  TestimonialSection,
  AboutMe,
} from "@components/home";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Union Xesthetic"
        description="Union Xesthetic Fitness training program provides personalized fitness plan for muscle building and fat loss. This is most comprehensive program and trains you for complete health, fitness and performance. Your improvement will happen in all components of physical fitness. You will not only be able to do daily tasks efficiently, but also take part in competitive sports."
      />
      <HeroSection />
      <WelcomeSection />
      <TransformationSection />
      <PlansSection />
      <ReviewSection />
      <TestimonialSection />
      <AboutMe />
    </>
  );
}
