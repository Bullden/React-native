import { RootState } from "../../redux/rootReducer";
import { LoginState } from "./types";

export const initialState: LoginState = {
    email: "",
    phone: "",
    name: "",
    isLoggedIn: false,
};

export function loginReducer(state: LoginState = initialState,action:any) {
    switch(action.type) {
        case `@@login/DO_LOGIN`: {
            console.log('ACTION',action.data);
            const data = action.data
            return{
                ...state,
                name: data.name,
                email: data.email,
                isLoggedIn: data.isLoggedIn,
                phone: data.phone
            }
        }
        default:
            return state;
    }
}
export const login = (state: RootState) => state.login;