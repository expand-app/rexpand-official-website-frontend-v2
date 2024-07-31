import NextHead from "next/head";

interface HeadProps {
  title?: string;
  description?: string;
  keyword?: string;
}

const Head: React.FC<HeadProps> = ({
  title = "睿思班",
  description = "睿思班 | 9年专注留学生求职",
  keyword = "睿思班,求职简历,职业规划,面试",
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
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"></link>
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
