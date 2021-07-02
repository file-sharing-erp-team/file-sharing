import { AuthPage } from "./pages/AuthPage";
import { ReqPage } from "./pages/ReqPage";
import {Page404} from './pages/Page404'
import {CreateReqPage} from './pages/CreateReqPage'
import { AUTH_ROUTE, REQ_ROUTE, ERR_ROUTE, CREATE_ROUTE , ADMIN_ROUTE} from "./utils/consts";
import { CreationPage } from "./pages/CreationPage";
import { DashBoard } from "./Admin/DashBoard";

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

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: DashBoard
    }
]

export const noAuthRoutes = [
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    }
]