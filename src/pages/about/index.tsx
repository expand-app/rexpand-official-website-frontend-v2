import { NextPage } from "next";
import Head from "next/head";

export const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Us - My Company</title>
        <meta
          name="description"
          content="Learn more about My Company, our mission, and what we do."
        />
        <meta property="og:title" content="About Us - My Company" />
        <meta
          property="og:description"
          content="Learn more about My Company, our mission, and what we do."
        />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.yourwebsite.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "My Company",
            url: "https://www.yourwebsite.com",
            logo: "https://www.yourwebsite.com/logo.png",
          })}
        </script>
      </Head>

      <main>
        <h1>About Our Company</h1>

        <p>
          My Company is dedicated to providing high-quality services and
          customer satisfaction. We strive to meet and exceed your expectations.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
