import NextHead from 'next/head';

const defaultTitle = process.env.NEXT_PUBLIC_SITE_TITLE || '';
const defaultDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || '';
const defaultOGURL = process.env.NEXT_PUBLIC_WEBSITE_URL || '';
const defaultOGImage = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/social-card.png`;
const favicon = '/zorbDevil_1.png'

type SeoProps = {
  title?: string,
  description?: string,
  url?: string,
  ogImage?: string
}

export function Seo({ title, description, url, ogImage }: SeoProps) {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title ? `${title} | Private Destruction` : defaultTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || defaultDescription} />
      <link rel="icon" type="image/png" sizes="24x24" href={favicon} />
      <meta property="og:url" content={url || defaultOGURL} />
      <meta property="og:title" content={title || 'JDR, AUCTION'} />
      <meta property="og:description" content="A PLACE TO COP JDR 1 OF 1s"/>
      <meta name="twitter:creator" content={`@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`} />
      <meta name="twitter:site" content={url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://i.seadn.io/gcs/files/5729f7790694c292d143ed5ff1cb4530.png?auto=format&w=1000" />
      <meta property="og:image" content="https://i.seadn.io/gcs/files/5729f7790694c292d143ed5ff1cb4530.png?auto=format&w=1000" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>
  )
}