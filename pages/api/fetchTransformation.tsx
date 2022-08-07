// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { sanityClient } from '../../sanity'

export default async function fetchTransformation(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        const query = `
        *[_type == "clientTransformation"]
        `;
        const allTransformation = await sanityClient.fetch(query)
        res.status(200).json(allTransformation)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Could'nt submit comment", err })
    }
}
