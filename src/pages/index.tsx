import { NextSeo } from "next-seo";
import type { NextPage } from "next";
// custom components
import {
  HeroSection,
  WelcomeSection,
  PlansSection,
  ReviewSection,
  BlogPreviewSection,
  TransformationSection,
  TestimonialSection,
  AboutMe,
} from "components/home";

const home: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="Union Xesthetic"
        description="Union Xesthetic Fitness training program provides personalized fitness plan for muscle building and fat loss. This is most comprehensive program and trains you for complete health, fitness and performance. Your improvement will happen in all components of physical fitness. You will not only be able to do daily tasks efficiently, but also take part in competitive sports."
      />
      <HeroSection />
      <WelcomeSection />
      <TransformationSection />
      <PlansSection />
      <ReviewSection />
      <BlogPreviewSection />
      <TestimonialSection />
      <AboutMe />
    </div>
  );
};

export default home;
