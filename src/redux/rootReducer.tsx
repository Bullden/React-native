import { Reducer, combineReducers } from "redux";
import { LoginState } from "./login/types";
import { loginReducer } from "./login/reducer";

export interface RootState {
    // error: string;
    login: LoginState;
    // home: HomeState;
    // registration: RegistrationState;
    // adminBookPage: AdminBookPageState,
    // cardPage: CardsPageState;
    // change: UserChangeState;
    // changeUser: ChangeUserState
  
  }
  
  const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    login: loginReducer,
    // changeUser: changeUserReducer,
    // home: homeReducer,
    // registration: registrationReducer,
    // adminBookPage : adminBookPageReducer,
    // cardPage: CardPageReducer,
    // change: userChangeReducer
  });
  
  export default rootReducer;