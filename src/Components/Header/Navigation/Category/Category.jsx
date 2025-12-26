import { NavLink, useLocation } from 'react-router-dom'
import s from './Category.module.scss'
import cn from 'classnames'
import { useSelector } from 'react-redux'

export const Category = () => {
    const { activeGender, categories } = useSelector(state => state.navigation)
   // const categoryList = list.find(i => i.link === gender)

    return (
        <ul className={s.category}>
            {categories[activeGender]?.list?.map(i => (
                <li key={i.slug} className={s.item}>
                    <NavLink to={`${activeGender}/${i.slug}`} className={({ isActive }) =>
                        (cn(s.link, (isActive || activeGender === i.link) && s.linkActive))}>
                        {i.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

