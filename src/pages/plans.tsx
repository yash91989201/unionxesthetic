import { NextSeo } from "next-seo";
// custom components
import { PlansSection } from "components/home";

export default function Plans() {
  return (
    <>
      <NextSeo
        title="Fitness Plans"
        description="Let us help you achieve your goal with a solid workout plan."
      />
      <PlansSection />
    </>
  );
}
