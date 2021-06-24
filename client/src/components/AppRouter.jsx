import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from './../routes'

export const AppRouter = () => {
    const isAuth = true
    return(
            <Switch>
                {isAuth && authRoutes.map(route => {
                    return(<Route key={route.path} path={route.path} component={route.Component} exact />)
                })}
                {publicRoutes.map(route => {
                    return(<Route key={route.path} path={route.path} component={route.Component} exact />)
                })}
                <Redirect to="/404" />
            </Switch>
    )
}