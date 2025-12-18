import { NavLink } from 'react-router-dom'
import s from './Category.module.scss'
import cn from 'classnames'

const list = [
    { link: 'bras', title: 'Бюстгальтеры' },
    { link: 'panties', title: 'Трусы' },
    { link: 'socks', title: 'Носки' },
    { link: 'bathrobes', title: 'Халаты' },
    { link: 'thermal', title: 'Термобелье' },
    { link: 'pijames', title: 'Пижамы' }
];


export const Category = () => (
    <ul className={s.category}>
        {list.map(i => (
            <li key={i.link} className={s.item}>
                <NavLink to={i.link} className={({ isActive }) => (cn(s.link, isActive && s.linkActive))}>
                    {i.title}
                </NavLink>
            </li>
        ))}
    </ul>
)

