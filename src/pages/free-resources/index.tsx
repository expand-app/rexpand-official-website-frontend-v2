import React, { useState } from 'react';
import { NextPage } from "next";
import styles from './index.module.css';
import Header, { Theme } from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';
import FreeResourceList from './components/FreeResourceList/FreeResourceList';
import { freeResourceListData } from '@/data/free_resource';
import LinkFilter from './components/LinkFilter/LinkFilter';
import Head from 'next/head';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const FreeResourcesPage: NextPage = () => {
    const [currentFilterIndex, setCurrentFilterIndex] = useState(0);

    const handleFilterChange = (index: number) => {
        setCurrentFilterIndex(index);
    }


    return (
       <div>
         <Head>
            <title>睿思班 | 让内推引领求职</title>
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
            <div className={styles.page}>
            <Header theme={Theme.LIGHT}/>
                
                <div className='container mx-auto w-3/4'>
                    <div className='pl-2 overflow-auto'>
                        <LinkFilter 
                            className={styles.filter}
                            current={currentFilterIndex} 
                            data={['全部','求职规划','面试技巧', '行业知识']} onChange={handleFilterChange}/>
                    </div>
                    <div className='pb-12'>
                        <FreeResourceList data={freeResourceListData} />
                    </div>
                </div>

                <Footer />
            </div>
        </main>
       </div>
    );
}

export default FreeResourcesPage;