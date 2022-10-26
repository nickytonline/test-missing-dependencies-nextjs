export default function handler(_req, res) {
  // simulating preview mode, see https://nextjs.org/docs/advanced-features/preview-mode
  res.setPreviewData({ someData: 'some data' })
  res.redirect('/test')
}