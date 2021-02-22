import React from "react"
import ReactDOM from "react-dom"
import { useRoutes } from "hookrouter"
import { routes } from "./routes"
import { NotFoundPage } from "./pages"

const App = () => {
    const routeResult = useRoutes(routes)
    return routeResult || <NotFoundPage />
}

ReactDOM.render(<App />, document.getElementById("root"))
