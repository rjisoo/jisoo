import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import ReactTooltip from 'react-tooltip';
import Heading from './Heading';

export default (props) => {
return (
<div>
<div id="contacts" className="background-white">
	<div className="container">
		<Heading {...props.headings} />   
		<div className="row">
			<div className="contact-link">
				<h3 className="section-subheading text-muted">
					If you want to know more about me,
				</h3>
				<h3 className="section-subheading text-muted">
					or want to be a member of 
					<a data-tip data-for="realjisoo">'The Real Jisoo', </a>
				</h3>
				<h3 className="section-subheading text-muted">please feel free to reach out to me!</h3>
				<ReactTooltip 
					id="realjisoo" 
					effect="solid" 
					place="bottom"
					delayHide={300}
				>
				<img src="/image/therealjisoo.png" />
				</ReactTooltip>
				<ul className="list-inline social-buttons">
				{
					props.contacts.map((contact, i) => (
						<li key={i}>
							<a target={contact.icon === "envelope" ? "" : "_blank"} href={contact.url}>
							<Icon name={contact.icon} />
							</a>
						</li>
					))
				}
				</ul>
				<h3 className="section-subheading text-muted">Download the latest version of my resume.</h3>
				<ul className="list-inline social-buttons">
					<li>
						<a href="/image/resume.pdf" download>
						<img src="/image/resume.png" />
						</a>
					</li> 
				</ul>
			</div>
		</div>
	</div>
</div>
<footer>
	<div className="container">
		<div className="row">
			<span className="copyright">Jisoo Ryu © 2017</span>
		</div>
	</div>
</footer>
</div>

)}