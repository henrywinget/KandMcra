import React, { Component } from 'react';
import {
	Card, CardImg, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle
} from 'reactstrap';

class AllHomes extends Component {
	
	render() {
		const allHomes = [
			{
				src: '',
				title: "Becka's House",
				description: ""
				
			}
		];
		
		return (
			<div className="All-homes-area">
				{allHomes.map((home, index) => {
					return (
						<div>
							<Card>
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
								</CardBody>
								<img width="100%" src={home.src} alt="Card image cap" />
								<CardBody>
									<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
									<CardLink href="#">Card Link</CardLink>
									<CardLink href="#">Another Link</CardLink>
								</CardBody>
							</Card>
						</div>
					)
				})}
			</div>
		);
	}
}

export default AllHomes;