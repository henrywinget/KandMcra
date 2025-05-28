import React from 'react';

import { Row, Col, Container } from "reactstrap";

import Fade from 'react-reveal/Fade';

import "./Home.css";

const Home = () => {
	return (
	<div className="carousel-body">
		<Container>
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
							fontWeight: 'bolder',
							background: 'white',
							opacity: 1,
							borderRadius: '20px',
							width: '250px',
							padding: '0 20px',
							fontSize: '54px',
							fontFamily: '\'Pacifico\', cursive',
						}}>Becka's House</h1>
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
				}}>Becka's House</span></h1>}
				
			</Fade>
			<Fade bottom>
				<p>A permanent, supported house in a fully customized, enriching, Christian family home.</p>
			</Fade>
		</div>
		</Container>
	</div>
	)
};

export default Home;