import React, { Component } from 'react';
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Row,
	Col,
	Container
} from 'reactstrap';

import beckasHouse from "../../images/beckashouse.png";

import "./AllHomes.css";

class AllHomes extends Component {
	
	render() {
		const allHomes = [
			{
				src: beckasHouse,
				title: "Becka's House",
				est: '6-1-2019',
				description: "Learn about Becka's House"
				
			}
		];
		
		return (
			<div id="homes" className="All-homes-area">
				<Container>
				<Row className="All-cards">
				<Col md={12} className="All-homes-header">
					<h1 className="Page-header"><span className="KM-font">More info </span></h1>
				</Col>
				{allHomes.map((home, index) => {
					return (
						<Col md={6} key={"Home-card-" + index}>
							<Card className="Home-card">
								<CardBody>
									<CardTitle className="Home-card-title">{home.title}</CardTitle>
									<CardSubtitle className="Home-card-title KM-font">{home.est}</CardSubtitle>
								</CardBody>
								<img className="Home-card-img" width="100%" src={home.src} alt={`Card for ${home.title} established on ${home.est}`} />
								<div className="Home-card-overlay">
									<div className="Home-card-text">{home.description}</div>
								</div>
								{/*<CardBody>*/}
									{/*<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*/}
									{/*<CardLink href="#">Card Link</CardLink>*/}
									{/*<CardLink href="#">Another Link</CardLink>*/}
								{/*</CardBody>*/}
							</Card>
						</Col>
					)
				})}
				</Row>
				</Container>
			</div>
		);
	}
}

export default AllHomes;