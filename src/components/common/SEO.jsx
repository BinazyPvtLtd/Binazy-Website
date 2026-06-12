import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://binazy.org";
const DEFAULT_TITLE =
  "Binazy Pvt Ltd | Web, App, AI & Business Software Development";
const DEFAULT_DESCRIPTION =
  "Binazy builds scalable websites, mobile apps, ERP systems, AI tools, and business software for startups and growing companies.";

const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image,

  robots = "index, follow",
}) => {
  const canonicalUrl = getAbsoluteUrl(path);
  const imageUrl = image ? getAbsoluteUrl(image) : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content="Binazy" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  );
};

export default SEO;
