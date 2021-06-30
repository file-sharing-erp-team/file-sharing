import { AuthPage } from "./pages/AuthPage";
import { ReqPage } from "./pages/ReqPage";
import {Page404} from './pages/Page404'
import { AUTH_ROUTE, REQ_ROUTE, ERR_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: REQ_ROUTE, 
        Component: ReqPage
    }
]

export const publicRoutes = [
    {
        path: ERR_ROUTE,
        Component: Page404
    }
]

export const noAuthRoutes = [
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    }
]