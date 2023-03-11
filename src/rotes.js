import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/constants"
import Login from "./components/login"
import Chat from "./components/chat"

export const PublicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Login />
    }
]

export const PrivateRoutes = [
    {
        path: CHAT_ROUTE,
        element: <Chat />
    }
]