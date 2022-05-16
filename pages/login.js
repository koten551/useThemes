

import Head from 'next/head'
import { useRouter } from 'next/router'
//import NodeRSA from 'node-rsa'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
//import RetinaImage from 'react-retina-image'
//import { schemaUser } from '../backend/utils/validate'
//import { checkAuth, login } from '../redux/auth/auth.action'
import { envVar } from '../env.vars'
//import { SET_SHOW_LOADING } from '../redux/system/system.types'
import { StatusMessage, Navbar } from '../components'
import { Container, Row, Col, Image, Text, Spacer, Checkbox, Link, Button, Input } from '@nextui-org/react';
import { fetchLogin } from '../redux/auth/loginSlice'
import {useAppDispatch} from '../redux/auth/loginSlice'
import { API_URL, pubKey } from '../utils'
import NodeRSA from 'node-rsa'
import axios, { AxiosResponse } from 'axios'

const Login = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [saveMe, setSaveMe] = useState(false)

   



    const handleUsernameInput = (e) => {
        setUsername(e.target.value)
        
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    const gotoHome = () => {
        console.log('gotoHome')
        router.push('/')
    }
    const onSuccess = () => {
        return true
    }

    const onFailure = () => {
        return true
    }
    
    const handleSubmit = async (e) => {
        const publicKey = new NodeRSA(pubKey)
        const hashPassword = publicKey.encrypt(password, 'base64')
        const data = {
            username, 
            password: hashPassword, 
            rememberMe: saveMe, 
            onSuccess, 
            onFailure
        }
        dispatch(fetchLogin(data))
        
        
        // const res = await axios.post(`${API_URL}/auth/login`, {
        //     ...data
        // })
        // if(res.data.loggedIn === true) {
        //     gotoHome()
        // }
    }
    return (
        <>
            <Head>
                <title>
                    Login to
                    {' '}
                    {envVar.brandName}
                    {' '}
                    by originally.us
                </title>
            </Head>

            <Navbar />

            <Container
                css={{ height: '100vh' }}
                className="full-page-wrapper">
                <Container
                    display="flex"
                    direction="column"
                    justify="center"
                    css={{ height: '100%' }}
                >

                    <Container
                        css={{ maxWidth: "512px" }}
                        className="form-container">
                        <Row justify="center" align="center">
                            <Image
                                width={95}
                                height={95}
                                src={envVar.logoSource}
                                alt="Default Image"
                                objectFit="cover"
                            />
                        </Row>
                        <Spacer y={1} />
                        <Row justify="center" align="center">
                            <Text h1> UserSight </Text>
                        </Row>
                        <Spacer y={0.5} />
                        <Row justify="center" align="center">
                            <Text h5>Please log in with your email.</Text>
                        </Row>
                        <Spacer y={1} />
                        <Row>
                            <Input
                                size="lg"
                                bordered
                                underlined={false}
                                fullWidth
                                css={{ borderRadius: "1px" }}
                                placeholder="Enter your username"
                                value={username}
                                onChange={handleUsernameInput}
                            />
                        </Row>
                        <Spacer y={1} />
                        <Row>
                            <Input.Password
                                size="lg"
                                bordered
                                underlined={false}
                                fullWidth
                                css={{ borderRadius: "5px" }}
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordInput}
                            />
                        </Row>
                        <Spacer y={1} />
                        <Row justify="space-between">
                            <Checkbox
                                defaultSelected={saveMe}
                                onChange={() => setSaveMe(!saveMe)}
                            >
                                <Text h4 size="15px" weight="normal">Remember me</Text>
                            </Checkbox>
                            <Link href="#">
                                Forgot password?
                            </Link>
                        </Row>
                        <Spacer y={1} />
                        <Row justify="center">
                            <Button
                                size="lg"
                                css={{ width: "100%", borderRadius: "5px" }}
                                onClick={handleSubmit}
                            >
                                LOG IN
                            </Button>
                        </Row>

                        <Spacer y={2} />
                        <Row justify="center">
                            <StatusMessage message="something when wrong!" status={'error'} />
                        </Row>
                    </Container>
                </Container>

            </Container>
        </>
    )
}

export default Login