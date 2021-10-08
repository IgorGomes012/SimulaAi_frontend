import type { NextApiRequest, NextApiResponse } from 'next'

export interface LoginToken {
  token: string
}

export interface LoginError {
  error: string
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<LoginToken | LoginError>
) {
  setTimeout(() => {
    if (req.body.email === 'dev@mail.com' && req.body.senha === '123456789') {
      return res.status(200).json({ token: 'fake-token-for-while' })
    } else {
      return res.json({ error: 'dados inválidos' })
    }
  }, 1000)
}

export const config = {
  api: {
    externalResolver: true
  }
}
