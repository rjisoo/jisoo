import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Scroll from 'react-scroll';
const Link = Scroll.Link;

export default (props) => {
return (
<nav className="navbar navbar-default navbar-fixed-right navbar-shrink">
	<ul className="nav navbar-nav">
	{
		props.navbar.map((nav, i) => {
			return (
			<li key={i} className="nav-item">
				<Link 
					activeClass="active" 
					className={`test${i+1} nav-link`} 
					to={`test${i+1}`}
					spy={true} 
					smooth={true} 
					duration={500}>
				{nav}
				</Link></li>
		)})
	}
	</ul>
</nav>
)}
