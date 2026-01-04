import { NavLink, useParams } from 'react-router-dom'
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
                    <NavLink
                        className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
                        to={`/catalog/${activeGender}/${i.slug}`}>
                        {i.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

// export const Category = () => {
//     const { activeGender, categories } = useSelector(state => state.navigation)
//     // const categoryList = list.find(i => i.link === gender)

//     return (
//         <ul className={s.category}>
//             {categories[activeGender]?.list?.map(i => (
//                 <li key={i.slug} className={s.item}>
//                     <NavLink
//                         className={({ isActive }) =>
//                             (cn(s.link, (isActive || activeGender === i.link ) && s.linkActive))}
//                         to={`/catalog/${activeGender}/${i.slug}`}>
//                         {i.title}
//                     </NavLink>
//                 </li>
//             ))}
//         </ul>
//     )
// }

// export const Category = () => {
//     const { categories } = useSelector(state => state.navigation)
//     const { gender } = useParams() // Получаем gender из URL
//     Если gender не указан, используем значение по умолчанию
//     const activeGender = gender || 'women';

//     return (
//         <ul className={s.category}>
//             {categories[activeGender]?.list?.map(i => (
//                 <li key={i.slug} className={s.item}>
//                     <NavLink
//                         className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
//                         to={`/catalog/${activeGender}/${i.slug}`}>
//                         {i.title}
//                     </NavLink>
//                 </li>
//             ))}
//         </ul>
//     )
// }

