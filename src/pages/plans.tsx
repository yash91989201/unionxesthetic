import { NextSeo } from "next-seo";
// custom components
import { PlansSection } from "components/home";

const plans = () => {
  return (
    <>
      <NextSeo
        title="Fitness Plans"
        description="Let us help you achieve your goal with a solid workout plan."
      />
      <PlansSection />
    </>
  );
};

export default plans;
