import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import { Navbar } from "./components/Navbar"
import { AboutPage } from "./pages/AboutPage"
import { TodoPage } from "./pages/TodoPage"

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route component={TodoPage} path='/' exact />
					<Route component={AboutPage} path='/about' exact />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
