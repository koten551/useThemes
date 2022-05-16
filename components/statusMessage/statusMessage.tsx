import React, {useState, useLayoutEffect} from 'react'
import { MdDone } from 'react-icons/md'
import { VscClose, VscWarning, VscError } from 'react-icons/vsc'
import { Container, Card, Text, Row, Button } from '@nextui-org/react'
import styles from './style.module.scss'
interface props {
    message: any
    status: string

}

const StatusMessage: React.FC<props> = ({ message, status }) => {
    const handleShow = (e: any) => {
        const parrent = e.target.closest('.statusContainer')
        console.log(parrent);
        
        if(parrent) {
            parrent.remove()
        }
    }

    return (
        <Row
            justify="space-between"
            align="center"
            className={`${styles[status]} statusContainer`}
        >
            <span className={styles.icon}>
                {status === "success" && <MdDone />}
                {status === "warning" && <VscWarning />}
                {status === "error" && <VscError />}

            </span>
            <Text
                h5
                weight="normal"
                className={styles[status]}
            >
                {message}
            </Text>
            <Button
                rounded
                size="xs"
                className={styles.closeBtn}
                onClick={handleShow}
            >
                <VscClose />
            </Button>
        </Row>
    )
}

export default StatusMessage 