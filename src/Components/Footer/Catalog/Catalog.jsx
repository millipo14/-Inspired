import s from '../Footer.module.scss'
import cn from 'classnames'

export const Catalog = () => (
    <div>
        <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
        <ul className={s.categoryList}>
            <li>
                <p className={s.categorySubtitle}>Женщины</p>
                <ul className={s.categorySublist}>
                    <li>Бюстгальтеры</li>
                    <li>Трусы</li>
                    <li>Носки</li>
                    <li>Халаты</li>
                    <li>Термобелье</li>
                    <li>Пижамы</li>
                </ul>
            </li>

            <li>
                <p className={s.categorySubtitle}>Мужчины</p>
                <ul className={s.categorySublist}>
                    <li>Трусы</li>
                    <li>Носки</li>
                    <li>Халаты</li>
                    <li>Термобелье</li>
                </ul>
            </li>
        </ul>
    </div>
)