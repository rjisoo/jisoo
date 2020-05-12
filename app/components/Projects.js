import React, { Component } from 'react';
import Icon from 'react-fontawesome';

import Heading from './Heading';


export default (props) => {
return (
<div id="projects" className="project">
  <Heading {...props.headings} />  
	<div className="container">
		<div className="row">
		{
			props.projects.map((project, i) => (
			<div key={i} className="col-md-6 project-item">
				<div className="project-link">
					<div className="project-hover">
						<div className="project-hover-content">
							<div className="wrapper">
							<h2 className="header">{project.name}</h2>
							<hr />
							<span className="detail">{project.detail}</span>
							</div>
							<ul>
							{
								project.skills.map((skill, i) => (
									<li key={i}>{skill}</li>
								))
							}
							</ul>
						</div>
					</div>
					<img src={`/image/${project.image}`} className="img-responsive" />
					<div className="project-caption">
						<h4>{project.name}</h4>
						<p className="text-muted">{project.role}</p>
					</div>
					<div className="project-caption-hover">
						<ul className="list-inline project-buttons">
						{
							project.urls.map((url, i) => (
								<li key={i} className={url.icon === "desktop" ? "desktop" : null}>
									<a target="_blank" href={url.href}><Icon name={url.icon} /></a>
								</li>
							))
						}
						</ul>
					</div>
				</div>
			</div>
			))
		}
		</div>
	</div>
</div>
)}
