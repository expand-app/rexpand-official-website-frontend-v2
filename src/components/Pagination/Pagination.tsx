import React, { useMemo } from 'react';
import styles from './Pagination.module.css';
import clsx from 'clsx';

const Pagination = ({page, pageSize, totalCount}: Props) => {

    const pageAry = useMemo(()=>{
        const pageAry = [];
        const totalPages = Math.ceil(totalCount / pageSize);
        for(let i = 0 ; i < totalPages; i ++) {
            pageAry.push((i+1));
        }
        return pageAry;
    }, [pageSize, totalCount])
    return (
        <div className={styles.pagination}>
            {pageAry?.map((curPage)=>{
                return <div key={curPage} className={clsx(styles.page_indicator, {[styles.active]: page === curPage})}>{curPage}</div>;
            })}
        </div>
    );
}

export default Pagination;

interface Props {
    page: number;
    pageSize: number;
    totalCount: number;
}