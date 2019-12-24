import React, { Component } from 'react';
import { FaHardHat, FaFacebookF, FaInstagram } from "react-icons/fa";

import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<footer className="footer center has-background-light">
				<div className="container">
					<div className="footer-all-icons">
						<a href="www.facebook.com/beckabhouse">
							<div className="footer-icon-circle">
								<div className="footer-icon">
									<FaFacebookF/>
								</div>
							</div>
						</a>
						<a href="www.instagram.com/beckas_house">
							<div className="footer-icon-circle">
								<div className="footer-icon">
									<FaInstagram/>
								</div>
							</div>
						</a>
					</div>
					<div className="footer-navigation">
						<a className="footer-nav-anchors " href="/">
							<span>About</span>
						</a>
						<a className="footer-nav-anchors" href="/homes">
							<span>K&M Homes</span>
						</a>
						<a className="footer-nav-anchors" href="/frequently-asked-questions">
							<span>FAQ</span>
						</a>
						<a className="footer-nav-anchors" href="/donate">
							<span>Donate</span>
						</a>
						<a className="footer-nav-anchors" href="/contact">
							<span>Contact</span>
						</a>
					</div>
					<div className="footer-motto">
						Providing permanent supported housing in a fully customized
						enriching Christian family home.
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;