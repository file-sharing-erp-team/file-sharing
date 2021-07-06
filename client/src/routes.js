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
        Component: ReqPage,
        id: 1
    },
    {
        path: CREATE_ROUTE + "/:type",
        Component: CreateReqPage,
        id: 2
    },
    {
        path: CREATE_ROUTE, 
        Component: CreationPage,
        id: 3
    }
]

export const publicRoutes = [
    {
        path: ERR_ROUTE,
        Component: Page404,
        id: 3
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: DashBoard,
        id: 1
    }
]

export const noAuthRoutes = [
    {
        path: AUTH_ROUTE,
        Component: AuthPage,
        id: 1
    }
]