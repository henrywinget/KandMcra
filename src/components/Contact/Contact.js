import React, { Component } from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "./Contact.css";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div id="contact" className="Contact-all-area">
				<Container>
					<Row className="Faq-header">
						<Col md={12}>
							<h1 className="Page-header">Contact</h1>
						</Col>
					</Row>
					<div className="Contact-form-area">
						{/* <Form>
							<Row>
								<Col md={6}>
									<FormGroup>
										<Label for="firstName">First Name</Label>
										<Input type="text" name="firstName" id="firstName" placeholder="Jane" />
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Label for="lastName">Last Name</Label>
										<Input type="text" name="lastName" id="lastName" placeholder="Doe" />
									</FormGroup>
								</Col>
							</Row>
							<FormGroup>
								<Label for="emailInput">Email</Label>
								<Input type="email" name="email" id="emailInput" placeholder="jdoe@gmail.com" />
							</FormGroup>
							<FormGroup>
								<Label for="examplePassword">Phone number</Label>
								<Input type="tel" name="number" id="examplePassword" placeholder="555-555-5555" />
							</FormGroup>
							<FormGroup>
								<Label for="howDidYouHear">How did you hear about us?</Label>
								<Input type="select" name="selectMulti" id="howDidYouHear">
									<option>Healthcare Professional/Physician Referral</option>
									<option>Online Ad</option>
									<option>Online Search</option>
									<option>Billboards</option>
									<option>Phone Call</option>
									<option>Radio</option>
									<option>Print Add</option>
									<option>Direct Mail</option>
									<option>Event</option>
									<option>Family/Friend</option>
									<option>Other</option>
								</Input>
							</FormGroup>
							<FormGroup tag="fieldset">
								<FormGroup>
									<Label for="subjectMatter">Subject</Label>
									<Input type="text" name="firstName" id="subjectMatter" placeholder="Interest in K&M" />
								</FormGroup>
								<FormGroup>
									<Label for="messageMatter">Message</Label>
									<Input type="textarea" name="text" id="messageMatter" />
								</FormGroup>
							</FormGroup>
							<Button className="Contact-form-button">Submit</Button>
						</Form> */}
						<p>For all business inquiries email us at:</p>
						<h6 className="Faq-title-text" style={{ wordWrap: 'break-word' }}>contact@beckashouse.com</h6>
					</div>
				</Container>
			</div>
		);
	}
}

export default Contact;