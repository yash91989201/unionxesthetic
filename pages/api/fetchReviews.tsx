// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { sanityClient } from '../../sanity'

export default async function fetchReviews(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        const query = `
        *[_type == "clientReview"]
        `;
        const allReviews = await sanityClient.fetch(query)
        res.status(200).json(allReviews)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Could'nt submit comment", err })
    }
}
