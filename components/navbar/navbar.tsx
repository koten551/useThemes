import React, { useState } from 'react'
import { Container, Text, Button, Link, Row, Spacer, Avatar, Col } from '@nextui-org/react'
import { BiLinkExternal } from 'react-icons/bi'

import styles from './styles.module.scss'
const NavbarItem: React.FC<{ name?: any, link?: string, children?: any, bold?: boolean }> = ({ name, link = null, children = null, bold = false }) => {

    const [select, setSelect] = useState(false)
    const handleClick = () => {
        setSelect(true)
    }
    return (
        <>
            {!link &&
                <div
                    onClick={handleClick}
                    style={bold ? { fontWeight: "bold" } : {}}
                    className={`${styles.navItem} ${select && styles.selected}`}>
                    {name}
                    <Spacer x={0.2} />
                    {children}
                </div>}
            {link &&
                <a
                    href={link}
                    style={bold ? { fontWeight: "bold" } : {}}
                    className={`${styles.navItem} ${select && styles.selected}`}>
                    {name}
                </a>}
        </>
    )
}


const Navbar: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    return (
        <Container
            fluid
            css={{ padding: "0", maxWidth: "none" }}>
            <Row
                align="center"
                className={styles.navBar}>
                <Spacer x={1} />
                <Col span={9}>
                    <Row>
                        <NavbarItem
                            name="UserSight"
                            link="#"
                            bold
                        />
                        <NavbarItem name="button" />
                    </Row>
                </Col>


                <Col span={3}>
                    <Row
                        justify="flex-end"
                        align="center" >
                        {loggedIn &&
                            <>
                                <NavbarItem children={<Avatar src="https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg" />} />
                                <Spacer x={0.7} />
                                <div style={{ borderRight: "1px solid #181E30", height: "64px" }}></div>
                                <Spacer x={0.7} />
                                <NavbarItem name="Log out" children={<BiLinkExternal />} />
                            </>
                        }
                    </Row>
                </Col>
                <Spacer x={1} />
            </Row>

        </Container>
    )
}

export default Navbar
