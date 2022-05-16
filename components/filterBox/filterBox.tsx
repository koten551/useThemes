import React, { useState } from 'react'
import { Container, Text, Button, Link, Row, Spacer, Avatar, Col } from '@nextui-org/react'
import styles from './styles.module.scss'
import { BiLinkExternal } from 'react-icons/bi'


const FilterBox: React.FC = () => {
    return(
        <Container>
            <Button 
                className={styles.title}
            >
                FILTER
            </Button>
        </Container>
    )
}


export default FilterBox