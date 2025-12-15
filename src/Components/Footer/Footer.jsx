import { Catalog } from "./Catalog/Catalog";
import { Social } from "./Social/Social";
import { Contacts } from "./Contacts/Contacts";
import { Copyright } from "./Copyright/Copyright";
import { Developers } from "./Developers/Developers";
import s from './Footer.module.scss'
import cn from 'classnames'
import { Container } from "../Layout/Container/Container";


export const Footer = () => (

    <footer >
        <Container className={s.container}>
            <Catalog />
            <Social />
            <Contacts />
            <Copyright />
            <Developers />
        </Container>
    </footer>
)