import React from "react";
import Footer from "@/components/Footer/en-us/Footer";
import Header, { Theme } from "@/components/Header/en-us/Header";
import { NextPage } from "next";
import styles from "./index.module.css";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import clsx from "clsx";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head/index.en";

const PrivacyPolicyPage: NextPage = () => {
  const { isMobile } = useScreen();

  const content: JSX.Element = (
    <div>
      <h1 className={styles.title}>Welcome to Rexpand</h1>

      <div>
        &quot;We,&quot; &quot;our,&quot; or &quot;Rexpand.&quot; We respect your
        privacy and are committed to protecting your personal information. The
        following privacy policy (&quot;Policy&quot;) explains how we collect,
        use, disclose, and protect the information you provide through our
        website and services.
        <br />
        By using Rexpand&apos;s services or accessing our website, please
        confirm that you have read, understood, and agreed to the data
        processing activities described in this Policy.
        <br />
        <h2>Information Collection</h2>
        We may collect and process the following information:
        <br />
        <ul className="list-disc pl-5">
          <li>
            Information you provide to us, such as information provided during
            registration or job search consulting services (e.g., name, email
            address, phone number, mailing address, professional background, and
            educational information).
          </li>
          <li>
            Technical information we automatically collect, including IP
            address, browser type, access time, etc.
          </li>
          <li>
            Information collected using cookies and other tracking technologies.
          </li>
        </ul>
        <h2>Information Usage</h2>
        We may use the collected information for the following purposes:
        <ol className="list-decimal pl-5">
          <li>To provide, improve, and personalize our services;</li>
          <li>To manage your account and process payments;</li>
          <li>
            To communicate with you, such as responding to your inquiries;
          </li>
          <li>
            To comply with legal requirements and prevent illegal activities.
          </li>
        </ol>
        <h2>Information Sharing and Disclosure</h2>
        Except as provided in this Policy, we do not share your personal
        information with third parties. We may share or disclose your
        information in the following circumstances:
        <ul className="list-disc pl-5">
          <li>With your consent;</li>
          <li>When required by law, or to protect our rights and property;</li>
        </ul>
        <h2>Data Security</h2>
        We are committed to protecting the security of your personal
        information. We use various security technologies and procedures to
        protect your personal information from unauthorized access, use, or
        disclosure.
        <br />
        <h2>Policy Changes</h2>
        We reserve the right to modify this Policy at any time. Any changes will
        be posted on our website with the latest effective date. Please review
        it regularly to stay informed of our latest privacy policy.
        <br />
        <h2>Cookie Policy</h2>
        We may use cookies and similar technologies to improve and personalize
        your user experience. If your browser settings allow cookies, we will
        consider this as your acceptance of our use of cookies
        <br />
        <h2>Data Storage and Transfer</h2>
        Your information may be stored and processed globally, including through
        cloud infrastructure. The data protection laws in these locations may
        differ from those in your country/region. If we transfer your personal
        data to other countries/regions, we will take steps to protect your
        personal information to ensure compliance with applicable laws.
        <h2>Third-Party Links</h2>
        Our website may contain links to other websites. Please note that we are
        not responsible for the content or privacy policies of these websites.
        We recommend that you read the privacy policies of these websites.
        <br />
        <h2>Your Rights</h2>
        Under applicable law, you may have the right to access, correct, delete
        your personal information, and restrict or object to our use of your
        information. If you wish to exercise these rights or have any questions
        about how we process your information, please contact us.
        <br />
        <h2>Contact Us</h2>
        Thank you for taking the time to read our privacy policy. We encourage
        you to understand how we process your information and how you can
        exercise your rights before using our services. If you have any
        questions or concerns about our privacy policy, or if you want to
        update, correct, or delete your personal information, please contact us:
        Email: info@rexpandco.com
        <br />
        Updated: May 1, 2024
      </div>
    </div>
  );

  return (
    <>
      <Head />

      <div>
        {isMobile?.() ? (
          <MobileView>{content}</MobileView>
        ) : (
          <PCView>{content}</PCView>
        )}
      </div>
    </>
  );
};

const MobileView = ({ children }: Props) => {
  return (
    <div>
      <Header theme={Theme.LIGHT} />
      <main className={clsx("", styles.m_main)}>
        <div className="container mx-auto max-w-screen-lg">
          <div className={styles.m_breadcrumb_box}>
            <Breadcrumb
              items={[
                {
                  title: "Homepage",
                  path: "/",
                },
                {
                  title: "Privacy Policy",
                  path: "/privacy-policy",
                },
              ]}
              className={styles.breadcrumb}
            />
          </div>

          <div className={clsx("", styles.m_box)}>{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const PCView = ({ children }: Props) => {
  return (
    <div>
      <Header theme={Theme.LIGHT} />
      <main className={clsx("mt-24 mb-12", styles.main)}>
        <div className="container mx-auto max-w-screen-lg">
          <div className={styles.breadcrumb_box}>
            <Breadcrumb
              items={[
                {
                  title: "Homepage",
                  path: "/",
                },
                {
                  title: "Privacy Policy",
                  path: "/privacy-policy",
                },
              ]}
              className={styles.breadcrumb}
            />
          </div>

          <div className={clsx("", styles.box)}>{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

interface Props {
  children: JSX.Element;
}
