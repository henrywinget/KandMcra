import React, { Component } from 'react';
import { Container } from 'reactstrap';

import "./Why.css";

class Why extends Component {

	render() {
		const whys = [
			{
				q: <span>Why <span className="KM-font">K&M</span>?</span>,
				a: [
					<p>We build relationships first.</p>,
					<p>While our goal is to provide permanent supported housing fully customized to an individual’s needs, it really begins with relationships.  It’s not just about brick and mortar.  It’s about providing the “scaffolding” for abundant life, which includes rich relationships in a safe environment where each person is loved and valued.  It means being a “family member” with a House Mom and House Sisters, or House Dad and House Brothers.</p>,
					<p>In a <span className="KM-font" style={{ color: 'inherit', fontSize: 'inherit' }}>K&M</span> House, our residents, referred to as House Sisters or House Brothers, are a necessary contributor in making a <span className="KM-font" style={{ color: 'inherit', fontSize: 'inherit' }}>K&M</span> House a home.</p>,
				]
			},
			{
				q: <span>What we provide for the House Brother or House Sister:</span>,
				a: [
					<p>Independence in living with individualized support, abundant life and rich relationships.</p>,
					<p>We focus on abilities and continuance improvement by introducing new experiences that help broaden skills and interests. As a contributing member of the House Family, participation in daily group activities fosters meaningful relationships and generate new abilities.</p>,
					<p>Whether it’s going on a community outing, helping with meal planning and preparations or always having a positive word of affirmation for the other housemates, each family member is cherished because of their unique talents and pure joy they bring to one another.</p>,
				]
			},
			{
				q: <span>What we provide for the Extended Family:</span>,
				a: [
					<p>Comfort and peace of mind in knowing that your loved one is surrounded by peers and a caregiver who love them as family.</p>,
					<p>They will be living in a safe Christian home with customized support to live independently, while fostering relationships to live abundantly.  Our permanent supported solution brings relief in knowing that your wishes for your loved one will be carried out when you are no longer adequately capable or alive to do so.</p>
				]
			},
			{
				q: <span>How we establish a <span className="KM-font">K&M</span> House and our House Families:</span>,
				a: [
					<p>Need drives us while we let God orchestrate His divine plan and use us to do His work.</p>,
					<p>Becka’s House is the first <span className="KM-font" style={{ color: 'inherit', fontSize: 'inherit' }}>K&M</span> House that opened on June 1, 2019. The vision for Becka’s House created opportunities for a House Family consisting of three House Sisters and one House Mom.</p>,
					<p>The need started with Becka, who was graduating from the Experiences in Transition (EXIT) Program at the Texas School for the Blind and Visually Impaired (TSBVI) and moving out of a supported dorm environment where she had lived for four years.  Identifying Becka’s need to continue living independently with support to live her most abundant, meaningful life with the skills and abilities she obtained from TSBVI, <span className="KM-font" style={{ color: 'inherit', fontSize: 'inherit' }}>K&M</span> networked and searched, finding our wonderful House Mom who moved in to the Becka’s House on May 1, one month before Becka’s graduation and transition into the home. We understand the importance for our House Parent to feel perfectly comfortable and settled into the home before the House Sisters or House Brothers move in.</p>,
					<p>Becka moved in on June 1 but spent a couple of weekends in the house during the month of May to get familiar with her place of residence before her official move-in date.  We met McKenzie, House Sister #2, in May, and she began regular visits to the house to develop relationships with Becka and our House Mom in June.</p>,
					<p>Through frequent visits, outings within the community and meals shared together, we made a combined family decision (McKenzie’s immediate family, Becka’s immediate family and our House Mom) that McKenzie was indeed a perfect fit!  McKenzie moved into Becka’s House in July.</p>,
					<p>House Sister #3 takes residence soon! Emma has spent quality time in the home, cultivating and growing relationships with Becka and Mackenzie, sharing fun experiences and community outings together.</p>,
					<p>While these friendships continue to grow and flourish, we are confident that God has designed this dynamic sisterhood created at Becka’s House.</p>,
				]
			},
		];

		return (
			<div id="about" className="Why-out-container">
				<Container className="Why-in-container">
					{whys.map((why, ind) => {
						const question = why.q;

						return (
							<div className={"Why-block"} key={"q-" + ind}>
								<h2 className="Why-question">{question}</h2>
								{why.a.map((ans, ansI) => {
									const isFirst = ansI === 0;
									const style = {
										textAlign: isFirst ? 'center' : 'left',
										fontWeight: isFirst ? 'bolder' : null,

									};
									return <div className="Why-answer-p" style={style} key={"q-" + ind + "-a-" + ansI}>{ans}</div>
								})}
							</div>
						)
					})}
				</Container>
			</div>
		);
	}
}

export default Why;