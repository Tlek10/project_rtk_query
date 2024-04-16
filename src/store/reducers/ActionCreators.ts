import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../../models/IUser";


export const fetchUsers = createAsyncThunk(
    'user/fetchALl',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to load data");
        }
    }
);
