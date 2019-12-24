import React from 'react';

import { Row, Col } from "reactstrap";

import Fade from 'react-reveal/Fade';

import "./Home.css";

const Home = () => {
	return (
	<div className="carousel-body">
		<div className="home-floater">
			<Fade bottom>
				{window.innerWidth < 650 ? <div className="Phone_home">
					<Row>
						<Col style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center'
						}
						}>
						<h1 style={{
							color: '#FF5733',
							fontWeight: 'bolder',
							background: 'white',
							opacity: 1,
							borderRadius: '20px',
							width: '250px',
							padding: '0 20px',
							fontSize: '54px',
							fontFamily: '\'Pacifico\', cursive',
						}}>K&M</h1>
						</Col>
					</Row>
					<Row>
						<Col>
						<h1>Residential Solutions</h1>
						</Col>
					</Row>
				</div>
					:
				<h1><span style={{
					color: '#FF5733',
					fontWeight: 'bolder',
					background: 'white',
					borderRadius: '20px',
					padding: '0 20px',
					fontSize: '54px',
					fontFamily: '\'Pacifico\', cursive',
				}}>K&M</span> Residential Solutions</h1>}
				
			</Fade>
			<Fade bottom>
				<p>Providing permanent supported housing in a fully customized enriching Christian family home.</p>
			</Fade>
		</div>
	</div>
	)
};

export default Home;