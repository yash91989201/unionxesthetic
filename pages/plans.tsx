import { NextSeo } from "next-seo"
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