import React, { Component } from 'react';

import { FaHandHoldingHeart } from "react-icons/fa";


import { Row, Col, Container } from 'reactstrap';

import "./Donate.css";

class Donate extends Component {
	render() {
		return (
			<div id="donate" className="Donate-area">
				<Container>
					<Row className="Donate-header">
						<Col md={12}>
							<h1 className="Page-header">Donate</h1>
						</Col>
					</Row>
					<Row>
						<Col md={12} className="Donate-header-area">
							<a  className="Donate-bjb-header" target='_blank' rel="noopener noreferrer" href="https://secure.donationpay.org/charitysmith/give5.php?f=bjb-memorial-fund">
								<h5>
									<span>
										<FaHandHoldingHeart /> Donate to the BJB memorial fund
									</span>
								</h5>
							</a>
						</Col>
					</Row>
					<Row>
						<Col md={4} className="Donate-in-container">
							<p className="Donate-p ">The BJB Memorial Fund, established in 2019, is a tribute to the memory of Bonnie Jane Budahelyi.
								Her youngest granddaughter, Becka, was diagnosed at birth (January 18, 1997) with porencephaly, an extremely rare neurological disorder of the central nervous system.
								Due to her diagnosis, Becka has multiple disabilities, including cerebral palsy, autism and she is legally blind. </p>
						</Col>
						<Col md={4} className="Donate-in-container">
							<p className="Donate-p">To help honor Bonnie’s love and admiration of Becka and all of God’s children living with and without disabilities,
								distributions from this fund will help develop, operate and maintain neighborhood homes in the Dallas-Fort Worth area that provide
								supported permanent housing to adults with intellectual and developmental disabilities (IDD) due to the overwhelming need.
							</p>
						</Col>
						<Col md={4} className="Donate-in-container">
							<p className="Donate-p">
								Currently, 100,000 adults with IDD living in the DFW metroplex have at least one challenge to living independently.
								There are beds in Medicaid Waiver Group Homes and Centers for only 3,000 adults in the state of Texas.
								This permanent housing solution brings peace to aging parents and grandparents.</p>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<a className="Donate-bjb-header" rel="noopener noreferrer"  href="https://charitysmith.org/memorial-funds/bjb-memorial-fund/" target="_blank">
								Learn more
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Donate;