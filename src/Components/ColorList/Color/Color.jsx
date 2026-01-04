import s from './Color.module.scss'
import { useEffect, useRef } from 'react';
import cn from 'classnames'

export const Color = ({ color, check }) => {
    // вариант с исп useRef
    const colorRef = useRef(null)
    useEffect(() => {
        colorRef?.current.style.setProperty("--data-color", color)
    }, [color])

    return (
        <li className={cn(s.color, check ? s.colorCheck : "")}
            // style={{ '--data-color': color }}
        ref={colorRef}
        />
    )
} 