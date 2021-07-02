import { AuthPage } from "./pages/AuthPage";
import { ReqPage } from "./pages/ReqPage";
import {Page404} from './pages/Page404'
import {CreateReqPage} from './pages/CreateReqPage'
import { AUTH_ROUTE, REQ_ROUTE, ERR_ROUTE, CREATE_ROUTE } from "./utils/consts";
import { CreationPage } from "./pages/CreationPage";

export const authRoutes = [
    {
        path: REQ_ROUTE, 
        Component: ReqPage
    },
    {
        path: CREATE_ROUTE + "/:type",
        Component: CreateReqPage
    },
    {
        path: REQ_ROUTE, 
        Component: ReqPage
    }
]

export const publicRoutes = [
    {
        path: ERR_ROUTE,
        Component: Page404
    },
    {
        path: CREATE_ROUTE,
        Component: CreationPage
    },
    {
        path: CREATE_ROUTE + "/:type",
        Component: CreateReqPage
    }
]

export const noAuthRoutes = [
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    }
]