import { NextSeo } from "next-seo"
// custom components
import PlansSection from "../components/home/PlansSection"

const plans = () => {
    return (
        <>
            <NextSeo
                title="Fitness Plans"
                description=""
            />
            <PlansSection />
        </>
    )
}

export default plans