import { Container } from "../../Layout/Container/Container";
import s from './Top.module.scss'
import cn from 'classnames'
import logo from '/src/assets/logo.svg'
import { NavLink } from "react-router-dom";
import LikeSVG from '../../../assets/heart.svg?react'
import SearchSVG from '../../../assets/search.svg?react'
import CartSVG from '../../../assets/cart.svg?react'

export const Top = () => (
    <div className={s.top}>
        <Container className={s.topContainer}>
            <a href="tel: 8 930 490 26 20" className={cn(s.topLink, s.topPhone)}>8 930 490 26 20</a>

            <NavLink to="/" className={s.topLogo}>
                <img src={logo} alt="Логотип Inspired" />
            </NavLink>

            <div className={s.topNavigation}>
                <ul className={s.topNavList}>
                    <li className={s.topNavItem}>
                        <button className={s.topLink}>
                            <SearchSVG />
                        </button>
                    </li>
                    <li className={s.topNavItem}>
                        <NavLink to='/cart' className={s.topLink}>
                            <CartSVG />
                        </NavLink>
                    </li>
                    <li className={s.topNavItem}>
                        <NavLink to='/favorite' className={cn(s.topLink, s.like)}>
                            <LikeSVG />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Container>
    </div>

)