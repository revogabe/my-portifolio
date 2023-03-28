import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    const { starsCount } = req.body
    const data = await prisma.stars.update({
      where: {
        id: '64220cc6fea027a3eeddc5ad',
      },
      data: {
        starsCount,
      },
    })
    res.status(200).json(data)
  }

  await prisma.stars.findMany().then((data: any[]) => {
    res.status(200).json(data[0])
  })
}

export default handler
