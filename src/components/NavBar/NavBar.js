import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from 'reactstrap';

import './NavBar.css';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}
	
	toggle = () => {
		this.setState({ isOpen: !this.state.isOpen })
	};
	
	render () {
		
		const { isOpen } = this.state;
	
		return (
				<div>
					<Navbar className="transparent" expand="xs">
						<NavbarToggler onClick={this.toggle} />
						<Collapse className="flex-navbar" isOpen={isOpen} navbar>
							<Nav className="all-navs" navbar>
								<Fade top>
								<NavItem>
									<NavLink href="/" right>About</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/homes" right>K&M Homes</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/frequently-asked-questions" right>FAQ</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/donate" right>Donate</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/contact" right>Contact</NavLink>
								</NavItem>
								</Fade>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			);
	}
}

export default NavBar;
