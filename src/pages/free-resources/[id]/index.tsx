import React from 'react';
import { NextPage } from "next";
import styles from './index.module.css';
import Header, { Theme } from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import clsx from 'clsx';

const FreeResourceDetailPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>免费资源 - Rexpand</title>
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
            <main className={clsx('mb-12', styles.main)}>
                <Header theme={Theme.LIGHT}/>
                <div className='container mx-auto flex justify-center'>
                    <div className='w-1/2 border'>
                csdf
                    </div>
               
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default FreeResourceDetailPage;