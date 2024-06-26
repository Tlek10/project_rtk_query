import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

interface userState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: userState = {
    users: [],
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default userSlice.reducer;
