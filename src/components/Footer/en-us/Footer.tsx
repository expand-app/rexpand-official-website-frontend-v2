import React from "react";
import styles from "../Footer.module.css";
import qrRexpandImg from "@/assets/qr_rexpand.png";
import qrDaeImg from "@/assets/qr_dae.png";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import SocialLinks from "../../SocialLinks/SocialLinks";
import { socialLinksData } from "@/data/social_link";
import useScreen from "../../useScreen/useScreen";
import MenuAccordion from "../components/MenuAccordion/MenuAccordion";

const Footer = () => {
  const { isMobile } = useScreen();

  return <div>{isMobile?.() ? <MobileView /> : <PCView />}</div>;
};

const MobileView = () => {
  return (
    <footer className={clsx("overflow-auto", styles.m_footer)}>
      <div className={clsx("flex flex-col")}>
        <MenuAccordion
          data={[
            {
              id: 1,
              title: "Career Training Courses and Services",
              children: [
                {
                  id: 11,
                  title: "Career Training Programs",
                  link: "/job/offer-guarantee",
                },
                {
                  id: 12,
                  title: "Success Stories",
                  link: "/success-cases",
                },
                {
                  id: 13,
                  title: "Free Resources",
                  link: "/free-resources",
                },
                {
                  id: 14,
                  title: "About Us",
                  link: "/about",
                },
              ],
            },
            {
              id: 2,
              title: "Terms and Policies",
              children: [
                {
                  id: 21,
                  title: "Privacy Policy",
                  link: "/privacy-policy",
                },
                {
                  id: 22,
                  title: "User Service Agreement",
                  link: "/user-service-agreement",
                },
                {
                  id: 23,
                  title: "Instructor Service Agreement",
                  link: "/mentor-service-agreement",
                },
              ],
            },
          ]}
        />

        <div className={styles.m_about_box}>
          <h1>About Us</h1>

          <ul className={clsx("list-reset flex flex-row", styles.m_qr_list)}>
            <li className="text-center">
              <Image src={qrRexpandImg} alt="WeChat Official Account" />
              <div className={styles.qr_text}>WeChat Official Account</div>
            </li>
            <li className="text-center">
              <Image src={qrDaeImg} alt="WeChat Official Account" />
              <div className={styles.qr_text}>
                Contact Career Consultant Dae
              </div>
            </li>
          </ul>
        </div>

        <SocialLinks data={socialLinksData} className={styles.m_social_links} />
      </div>

      <div className={`${styles.m_copy_right} py-4 text-sm`}>
        © 2022-2024 Rexpand All rights reserved. <br />
        <a href="#">京ICP备2022032082号-1</a>
      </div>
    </footer>
  );
};

const PCView = () => {
  return (
    <footer className={clsx("overflow-auto", styles.footer)}>
      <div
        className={clsx(
          "container mx-auto flex flex-col items-center",
          styles.container
        )}
      >
        <div
          className={clsx("w-full flex flex-col md:flex-row", styles.content)}
        >
          <div className="flex-1">
            <p className={clsx("text-black", styles.menu)}>
              Career Training Courses and Services
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/job/offer-guarantee" className={styles.submenu}>
                  Career Training Programs
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/success-cases" className={styles.submenu}>
                  Success Stories
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/free-resources" className={styles.submenu}>
                  Free Resources
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/about" className={styles.submenu}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className={clsx("text-black ", styles.menu)}>
              Terms and Policies
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/privacy-policy" className={styles.submenu}>
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/user-service-agreement" className={styles.submenu}>
                  User Service Agreement
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/mentor-service-agreement"
                  className={styles.submenu}
                >
                  Instructor Service Agreement
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <p className={styles.menu}>About Us</p>
            <ul className="list-reset flex flex-row gap-10">
              <li className="mt-2 mr-2 md:block md:mr-0  w-20  items-center text-center">
                <Image src={qrRexpandImg} alt="WeChat Official Account" />
                <div className={styles.qr_text}>WeChat Official Account</div>
              </li>
              <li className="mt-2 mr-2 md:block md:mr-0 w-20 text-center">
                <Image src={qrDaeImg} alt="WeChat Official Account" />
                <div className={styles.qr_text}>
                  Contact Career Consultant Dae
                </div>
              </li>
            </ul>
          </div>
        </div>

        <SocialLinks data={socialLinksData} className="mb-36px" />
      </div>

      <div className={`${styles.copy_right} py-4 text-sm`}>
        © 2022-2024 Rexpand All rights reserved.{" "}
        <a href="#">京ICP备2022032082号-1</a>
      </div>
    </footer>
  );
};

export default Footer;
