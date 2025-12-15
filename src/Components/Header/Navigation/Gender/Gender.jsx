import s from './Gender.module.scss'
const list = [
    { link: 'women', title: 'Женщины' },
    { link: 'men', title: 'Мужчины' }
]
export const Gender = () => (
    <ul className={s.gender}>
        {list.map(item => (
            <li className={s.item}>
                <a href={item.link} className={s.link}>
                    {item.title}
                </a>
            </li>
        ))}
    </ul >
)