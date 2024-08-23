import NextHead from "next/head";

interface HeadProps {}

const Head: React.FC<HeadProps> = ({}) => {
  return (
    <NextHead>
      <title>
        9 Years of Focus on Chinese International Student Job Search
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      ></meta>
      <meta
        name="description"
        content="9 Years of Focus on Chinese International Student Job Search"
      />
      <meta property="og:title" content="Rexpand" />
      <meta
        property="og:description"
        content="9 Years of Focus on Chinese International Student Job Search"
      />
      <meta property="og:url" content="https://rexpandcareer.com/about" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://rexpandcareer.com/about" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rexpand",
          url: "https://rexpandcareer.com",
          logo: "https://rexpandcareer.com/_next/static/media/logo_green.e3921224.svg",
        })}
      </script>
    </NextHead>
  );
};

export default Head;
