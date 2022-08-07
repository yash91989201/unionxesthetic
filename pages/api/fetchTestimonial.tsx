// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { sanityClient } from '../../sanity'

export default async function fetchTestimonial(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        const query = `
        *[_type == "clientTestimonial"]
        `;
        const allTestimonial = await sanityClient.fetch(query)
        res.status(200).json(allTestimonial)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Could'nt submit comment", err })
    }
}
