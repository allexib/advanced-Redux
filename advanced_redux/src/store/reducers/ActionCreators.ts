import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {async} from "q";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }
//some error литнер ругается на отсутствие  поля message у ошибки e.
// На попытку задать тип (e: AxiosError) тоже матерится.
// Помогло только переопределить тип через as:

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async () => {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data;
    }
)