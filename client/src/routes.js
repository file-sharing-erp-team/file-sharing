import { AuthPage } from "./pages/AuthPage";
import { ReqPage } from "./pages/ReqPage";
import { AUTH_ROUTE, REQ_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: REQ_ROUTE, 
        Component: ReqPage
    }
]

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    }
]