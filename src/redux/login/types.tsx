export enum LoginActions {
  DO_LOGIN = 'DO_LOGIN',
  // LOGIN_SUCCESS = "LOGIN_SUCCESS",
  // LOGIN_FAILED = "LOGIN_FAILED",
  // DO_LOGOUT = "DO_LOGOUT"
}

export interface LoginRequest {
  email: string;
  name: string;
  phone: string
  isLoggedIn: boolean;
}

export interface LoginState {
    email: string;
    name: string;
    phone: string
    isLoggedIn: boolean;
}