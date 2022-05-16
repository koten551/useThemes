import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../utils'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import axios, { AxiosResponse } from 'axios'

const loginSlice = createSlice({
    name: 'login',
    initialState: {

    },
    reducers: { 

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state, action) => {

            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                //action.payload.onSuccess()
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                action
            })
    }
})
export const fetchLogin = createAsyncThunk('auth/fetchLogin',async (data: any) => {
    const res = await axios(`${API_URL}/auth/login`, {
        ...data
    })
})

export default loginSlice
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector