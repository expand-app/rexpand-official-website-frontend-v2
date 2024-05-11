import React, {useMemo} from 'react';
import { NextPage } from "next";
import styles from './index.module.css';
import Header, { Theme } from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { freeResourceListData } from '@/data/free_resource';
import Image from 'next/image';
import useScreen from '@/components/useScreen/useScreen';
import { FreeResourceData } from '../components/FreeResourceList/FreeResourceList';


export const FreeResourceDetailPage: NextPage = () => {
    const { isMobile } = useScreen();
    const router = useRouter();
    const { id } = router.query;

    const currentArticle = useMemo(()=>{
        if ( id != undefined) {
            let idNum: number = parseInt(id as string);
    
            return freeResourceListData.find((item)=>item.id+'' == id);
        }
        return null;
    }, [freeResourceListData, id]);

    return (
        <>
            <Head>
                <title>{currentArticle?.title} - 免费资源 - Rexpand</title>
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
            <div>
                 {isMobile?.()? 
                <MobileView currentArticle={currentArticle || undefined}/>
                :
                  <PCView currentArticle={currentArticle || undefined}/>
                  }
            </div>
        </>
    );
}

function MobileView ({currentArticle}: FreeResourceDetailPageProps) {

    return (
        <main className={clsx('bg-white m-main', styles.m_main)}>
                <Header theme={Theme.LIGHT}/>
                <div className="m-section">
                    <div className='container mx-auto flex justify-center'>
                        <div className='m-fr-article-box'>
                            <div className='fr-article'>
                                {currentArticle ? 
                                    <>
                                        <div className="fr-article-header">
                                            <Image src={currentArticle?.image} 
                                                alt={currentArticle?.title} 
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                borderRadius: 8,
                                                }}
                                                width={765} height={362} 
                                                />
                                            <div className='fr-article-title'>{currentArticle?.title}</div>
                                            <div className='fr-article-lastupdate'>最后更新时间: <span>{currentArticle?.lastUpdateDate}</span></div>
                                        </div>

                                        <div className='fr-article-body'>
                                            <div dangerouslySetInnerHTML={{ __html: currentArticle?.content?.join('') ?? '' }} />
                                        </div>
                                    </>            
                                    :
                                    null
                                }
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </main>
    );
}

function PCView ({currentArticle}: FreeResourceDetailPageProps) {

    return (
        <main className={clsx('bg-white', styles.main)}>
            <Header theme={Theme.LIGHT}/>
            <div className='container mx-auto flex justify-center w-1/2'>
                <div className='fr-article-box'>
                    <div className='fr-article'>
                        {currentArticle ? 
                            <>
                                <div className="fr-article-header">
                                    <Image src={currentArticle?.image} 
                                        alt={currentArticle?.title} 
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        borderRadius: 8,
                                        }}
                                        width={765} height={362} 
                                        />
                                    <div className='fr-article-title'>{currentArticle?.title}</div>
                                    <div className='fr-article-lastupdate'>最后更新时间: <span>{currentArticle?.lastUpdateDate}</span></div>
                                </div>

                                <div className='fr-article-body'>
                                    <div dangerouslySetInnerHTML={{ __html: currentArticle?.content?.join('') ?? '' }} />
                                </div>
                            </>            
                            :
                            null
                        }
                    </div>
                    
                </div>
                
            </div>
            <Footer />
        </main>
    );
}
export default FreeResourceDetailPage;


interface FreeResourceDetailPageProps {
    currentArticle?: FreeResourceData;
}