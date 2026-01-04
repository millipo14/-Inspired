import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import s from './Pagination.module.scss'
import BtnRight from '../../assets/arrow-right.svg?react'
import BtnLeft from '../../assets/arrow-left.svg?react'
import cn from 'classnames'
import { setPage } from "../../features/goodsSlice";
import { useEffect, useState } from "react";

export const Pagination = () => {
    const [pagePagination, setPagePagination] = useState('')
    const pathname = useLocation().pathname;
    const { page, pages } = useSelector(state => state.goods)
    const dispatch = useDispatch()

    useEffect(() => {
        setPagePagination(page)
    }, [page, setPagePagination])

    const handlePageChange = (newPage) => {
        setPagePagination(newPage)
    }

    const handlePrevPage = () => {
        if (pagePagination > 1) {
            handlePageChange(pagePagination - 1)
        }
    }

    const handleNextPage = () => {
        if (pagePagination < pages) {
            handlePageChange(pagePagination + 1)
        }
    }

    const renderPaginationItems = () => {
        const paginationItems = [];
        let startPage = (pagePagination === pages) && (pages >= 3)
            ? pagePagination - 2 : Math.max(1, pagePagination - 1);
        let endPage = Math.min(startPage + 2, pages)
        for (let i = startPage; i <= endPage; i++) {
            paginationItems.push(
                <li key={i} className={s.item}>
                    <NavLink
                        to={`${pathname}?page=${i}`}
                        className={cn(s.link, i === pagePagination ?? s.linkActive)}
                        onClick={() => handlePageChange(i)}
                    >{i}</NavLink>
                </li>
            )
        }
        return paginationItems;
    }

    return (
        pages > 1 &&
        <div className={s.pagination}>
            <button
                className={s.arrow}
                onClick={handlePrevPage}
                disabled={pagePagination <= 2}
            >
                <BtnLeft />
            </button>
            <ul className={s.list}>
                {renderPaginationItems()}
            </ul>
            <button
                className={s.arrow}
                onClick={handleNextPage}
                disabled={pagePagination >= pages - 1 || pages <= 3}
            >
                <BtnRight />
            </button>
        </div>
    )
}