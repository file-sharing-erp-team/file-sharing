import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes, noAuthRoutes, adminRoutes} from './../routes'

export const AppRouter = ({isAuth, role}) => {
    return(
            //? Switch is now working but where is some bugs with Redirecting
            <Switch>
                {isAuth && authRoutes.map(route => {
                    return(<Route key={route.path} path={route.path} component={route.Component} exact /> )
                })}
                {!isAuth && noAuthRoutes.map(route => {
                    return(<Route key={route.path} path={route.path} component={route.Component} exact />)
                })}
                {isAuth && role && adminRoutes.map(route => {
                    return(<Route key={route.path} path={route.path} component={route.Component} exact /> )
                })}
                {publicRoutes.map(route => {
                    return(<Route key={route.path} path={route.path} component={route.Component} exact />)
                })}
                <Route path="/" exact>
                    {isAuth && role && <Redirect to="/admin" />}
                    {isAuth && !role && <Redirect to="/my" />}
                    {!isAuth && <Redirect to="/auth" />}
                </Route>
            </Switch>
    )
}