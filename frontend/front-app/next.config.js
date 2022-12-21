// next.config.js:Next.jsの細かい設定を決定できるファイル
// リダイレクトやwebpackのカスタマイズなど可能
// next.config.jsは、Node.jsのモジュールであり、ブラウザ側のビルドではなく、Next.jsのサーバー側のビ
// ルドの段階で使用される

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
