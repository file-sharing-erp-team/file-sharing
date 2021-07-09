import { AuthPage } from "./pages/AuthPage";
import { ReqPage } from "./pages/ReqPage";
import {Page404} from './pages/Page404'
import {CreateReqPage} from './pages/CreateReqPage'
import {RequestInfoPage} from './pages/RequestInfoPage'
import { AUTH_ROUTE, REQ_ROUTE, ERR_ROUTE, CREATE_ROUTE , ADMIN_ROUTE, INFO_ROUTE, MESSAGES_ROUTE, USER_DATA_ROUTE} from "./utils/consts";
import { CreationPage } from "./pages/CreationPage";
import { DashBoard } from "./Admin/DashBoard";
import { RequestPage } from "./Admin/RequestPage";
import { MessagesList } from "./Admin/MessagesList";
import { ChatPage } from "./pages/ChatPage";
import { UpdateUsers } from "./Admin/UpdateUsers";
import { CreateUserPage } from "./Admin/CreateUserPage";



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
    },
    {
        path: INFO_ROUTE + "/:id", 
        Component: RequestInfoPage,
        id: 3
    },
    {
        path: MESSAGES_ROUTE,
        Component: ChatPage,
        id: 4
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
    },
    {
        path: ADMIN_ROUTE  + INFO_ROUTE + "/:id",
        Component: RequestPage,
        id: 2
    },
    {
        path: ADMIN_ROUTE + MESSAGES_ROUTE,
        Component: MessagesList,
        id: 3
    },
    {
        path: ADMIN_ROUTE + USER_DATA_ROUTE,
        Component: UpdateUsers,
        id: 4
    },
    {
        path: ADMIN_ROUTE + USER_DATA_ROUTE + "/create",
        Component: CreateUserPage,
        id: 5
    }
]

export const noAuthRoutes = [
    {
        path: AUTH_ROUTE,
        Component: AuthPage,
        id: 1
    }
]