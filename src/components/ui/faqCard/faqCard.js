import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import './faqCard.css';

const FaqCard = (props) => {
	const [collapse, setCollapse] = useState(false);
	
	const toggle = () => setCollapse(!collapse);
	
	return (
		<div key={props.keyVar}>
			{/*<Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>*/}
			<div className="Faq-title" onClick={toggle}>
				<h5 className="Faq-title-text">{props.title}</h5>
			</div>
			<Collapse
				isOpen={collapse}
			>
				<Card>
					<CardBody>
						{props.children}
					</CardBody>
				</Card>
			</Collapse>
		</div>
	);
}

export default FaqCard;