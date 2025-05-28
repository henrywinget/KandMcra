import React, { Component } from 'react';

import { Container } from 'reactstrap';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer center has-background-light">
					<Container>
						<div className="footer-all-icons">
							<a href="https://www.facebook.com/beckabhouse">
								<div className="footer-icon-circle">
									<div className="footer-icon">
										<FaFacebookF />
									</div>
								</div>
							</a>
							<a href="https://www.instagram.com/beckas_house">
								<div className="footer-icon-circle">
									<div className="footer-icon">
										<FaInstagram />
									</div>
								</div>
							</a>
						</div>
						<div className="footer-navigation">
							<a className="footer-nav-anchors" href="#homes">
								<span><span className="KM-font" style={{ color: 'white' }}>Becka's House</span></span>
							</a>
							<a className="footer-nav-anchors " href="#about">
								<span>About</span>
							</a>
							<a className="footer-nav-anchors" href="#donate">
								<span>Donate</span>
							</a>
							{/* <a className="footer-nav-anchors" href="#frequently-asked-questions">
								<span>FAQ</span>
							</a> */}
							<a className="footer-nav-anchors" href="#contact">
								<span>Contact</span>
							</a>
						</div>
						<div className="footer-motto">
							A permanent, supported house in a fully customized,
							enriching, Christian family home.
						</div>
					</Container>
				</footer>
				<footer className="footer-bottom">
					<div><span style={{ color: 'white' }} className="KM-font">Becka's House </span> &copy; 2018-2025</div>
				</footer>
			</div>
		);
	}
}

export default Footer;