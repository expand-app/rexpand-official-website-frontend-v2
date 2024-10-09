import NextHead from "next/head";

interface HeadProps {
  title?: string;
  description?: string;
  keyword?: string;
}

const Head: React.FC<HeadProps> = ({
  title = "睿思班求职",
  description = "睿思班求职 | 9年专注留学生求职",
  keyword = "睿思班求职,求职简历,职业规划,面试",
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      ></meta>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:url" content="https://rexpandcareer.com/about" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://rexpandcareer.com/about" />
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
      <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "睿思班",
          url: "https://rexpandcareer.com",
          logo: "https://rexpandcareer.com/_next/static/media/logo_green.e3921224.svg",
        })}
      </script>
    </NextHead>
  );
};

export default Head;
