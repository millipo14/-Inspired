import { useSelector } from 'react-redux'
import s from './Color.module.scss'


export const Color = ({ color, check }) => {

    return (
        <li className={s.color}>
            {color}
        </li>
    )
}