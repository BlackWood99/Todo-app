import { NavLink } from "react-router-dom"

export const Navbar: React.FC = () => {
	return (
		<header className='indigo'>
			<div className='container'>
				<nav className='pxNav'>
					<div className='nav-wrapper'>
						<NavLink to='/' className='brand-logo'>
							ToDo
						</NavLink>
						<ul id='nav-mobile' className='right hide-on-med-and-down'>
							<li>
								<NavLink to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink to='/about'>About</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}
