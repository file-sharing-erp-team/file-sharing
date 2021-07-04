import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes, noAuthRoutes, adminRoutes} from './../routes'

export const AppRouter = ({isAuth}) => {
    console.log(isAuth)
    let role= false
    return(
            <Switch>
                {isAuth && authRoutes.map(route => {
                    return(<Route key={route.path} path={route.path} component={route.Component} exact /> && <Redirect to ="/my" />)
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
                <Redirect to="/404" />
            </Switch>
    )
}