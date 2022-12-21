// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api以下に置いたファイルではAPIを定義する。ページと同様にファイルの場所によってパスが決まる。
// ビルド時は使うことができない

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}
