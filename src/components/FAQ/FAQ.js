import React, { Component } from 'react';

import { Container, Row, Col } from "reactstrap";

import FaqCard from '../ui/faqCard';

import "./FAQ.css";
const faqs = [
	{
		question: "How do we apply for our loved one to become a resident in a K&M Home?",
		answer: "You can call or email us with any further questions that are not answered.  Otherwise, complete and submit the Intake Form and we will be in communication with you."
	},
	{
		question: "What is the monthly cost to live in a K&M Home?",
		answer: "Pricing varies depending on the level of support and home.  Monthly costs consist of rent, utilities, full-time caregiver services, meals and snacks, and home maintenance. Our goal is to provide abundant life through a Christian Family setting, and we strive to be good stewards of our resources.  Through active donors, Medicaid waiver programs, and private pay, our goal is to keep costs under $2,000 a month.  Each placement is different depending on the Medicaid waiver program, SSI, or private pay situation."
	},
	{
		question: "What transportation services does the full-time caregiver provide?",
		answer: "Our caregivers provide transportation to and from group activities.  For example, social activities within the community such as church, meals in local restaurants, bowling, movies, shopping trips, etc.  For other transportation needs such as getting to and from a day habilitation,  vocational program or employment, we recommend DART Paratransit or other ride services."
	},
	{
		question: "Who will take my loved one to his/her routine appointments such as medical, dental, therapy, or other service providers?",
		answer: "The family or K&M can assist with making arrangements with Attendant care providers to escort your loved one to these appointments for a small additional fee."
	},      {
		question: "Does my loved one get his/her own room? What about a private bathroom?",
		answer: "Our residents have their own rooms.  In some situations, they will have a private bathroom and in some situations they may share a bathroom with one other resident."
	},
	{
		question: "Is the house furnished?",
		answer: "Our homes are furnished with the exception of your loved one’s bedroom.  Each resident will provide his/her own bedroom furniture including bed and bath linens.  You may decorate the bedroom to suit your loved one’s tastes.  You may also provide a TV in their bedroom, although we do not provide cable TV in the house. Internet is provided and smart TV’s can use the internet for streaming."
	},
	{
		question: "If my loved one lives in a K&M Home, what might their schedule consist of ?",
		answer: "A typical day begins with wake up and breakfast.  After breakfast, it is recommended that the residents have their own schedule from 9:00 a.m. – 2:00 p.m. Monday through Friday wherein the full-time caregiver is not responsible in providing support during these hours. Some of our residents work, others attend a day-habilitation program, and others have dedicated attendants who provide support in or out of the home during these hours.  K&M will work with your family to understand the most appropriate schedule for your loved one.\n" +
			"\tAfter vocational or day habilitation, our residents enjoy down time to rest for 1.5 hours.  From 3:30pm – 5:00pm our residents share activities together before beginning meal preparations and participation based upon their abilities and interests followed by a family style dinner together.  Afterwards all residents assist in dinner clean up and house chores. After kitchen clean up and chores, if the weather is nice, they will go on a walk, participate in fun game or activity or enjoy fellowship in the family room or on the back patio, followed by nightly bedtime routines, quiet time and lights out.\n"
	},
	{
		question: "Are K&M Homes co-ed?",
		answer: "No.  Our houses are either all female or all male. "
	},
	{
		question: "If my loved one lives in a K&M Home, what will his/her weekend schedule look like?",
		answer: "K&M Homes are closed on the first and third weekends of the month to provide respite for our care-givers.  Residents leave by 6:00 p.m. on Friday and return after 5:00 p.m. on Sunday.  On the second, fourth and fifth weekends of the month, scheduled community outings and group activities in the house are planned."
	},
	{
		question: "Does K&M Homes have special events for the residents and their families?",
		answer: "Yes.  We host a monthly dinner with residents’ families on the first Sunday of the month at 5:00 p.m. and other holiday gatherings and special events throughout the year."
	},
	{
		question: "What permanent solution do you offer for residents living in a K&M Home?",
		answer: "Our mission of providing secure permanent supported housing means that you will not have to worry about what will happen to your loved one after you are no longer capable of overseeing the care for her/him.  We offer solutions to ensure your loved one will always have secure supported housing should their need reach beyond the capabilities of living in our Christian family home setting and those of our full-time caregivers."
	},
	{
		question: "Does K & M  currently have openings for residents in any of their homes?",
		answer: "Review the information on our K&M Homes page to find out which homes may have openings."
	},
	{
		question: "Are K&M Homes closed at other times during the year?",
		answer: "To provide respite and holiday time off for our House Parents, our homes are closed to residents for a total of six weeks (excluding the first and third weekends unless holidays fall within the weekend closure schedule) each calendar year.  Closures coincide with major holidays and allow residents the opportunity to spend time with their families during these closures."
	},


];


class Faq extends Component {
	render() {
		
		
		return (
			<div id="frequently-asked-questions" className="Faq-area">
				<Container>
					<Row className="Faq-header">
						<Col md={12}>
							<h1 className="Page-header">FAQ</h1>
						</Col>
					</Row>
					{faqs.map((faq, i) => <FaqCard key={"faq-" + i} keyVar={"faq-" + i} title={faq.question}>{faq.answer}</FaqCard>)}
				</Container>
			</div>
		);
	}
}

export default Faq;