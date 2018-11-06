import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react';
import tobias from '../../images/tobias.png';
import alex from '../../images/F1.jpg';
import fred from '../../images/fred.png';
import mireille from '../../images/mireille.png';
import cecile from '../../images/cecile.png';
import gaston from '../../images/gaston.png';
import './styleAfr.css';

class Managment extends Component {
	render() {
		return (
			<div style={{ position: 'relative', background: 'white', width: '100%', paddingTop: '90px' }}>
				<h2 className='managment manAfr' style={{ marginBottom: '25px' }}>Management</h2>
				<div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className='border'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='border'></span>
				</div>
				<Grid style={{ width: '100%', background: 'white', margin: '0px' }}>
					<GridRow style={{ background: 'white' }} centered>
						<GridColumn style={{ background: 'white' }} className='imgHol' computer={5} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={tobias} circular />
							<h3 className='employers'>Tobias Reiter, MSc.</h3>
							<h4 className='employersH4'>Founder and Director of Corporate Development</h4>
							<p>While studying International Business Administration at Vienna University of Economics and Business, Tobias developed an arbitrage alert service. His academic experience in St. Petersburg, Russia, at the Graduate School of Management and at the University of Groningen in the Netherlands, where Tobias earned a Master‘s degree in International Business and Management, has enabled him to build an international business network. Tobias Reiter’s work experience in Africa, the U.S. and Asia as well as his various entrepreneurial activities allowed him to acquire experience in a number of different industries.</p>
						</GridColumn>
						<GridColumn style={{ background: 'white' }} className='imgHol' computer={5} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={alex} circular />
							<h3 className='employers'>Alex Musyoka, BSc.</h3>
							<h4 className='employersH4'>Managing Director</h4>
							<p>Born in Nairobi, Kenya, Alex Musyoka has acquired a deep understanding of the pharmaceutical industry. Before joining VIEBEG MEDICAL, Alex worked as a manager for more than 8 years for several companies engaging in pharmaceutical distribution in East Africa. He holds a Bachelor’sdegree in Business Administration. Alex’ received valuable training abroad, such as in Dubai, where he worked closely with experts on finding high quality products that suit the East African market. Besides his precious product know-how and market knowledge, Alex is extremely skilled when it comes to analyse the market, business development and networking.</p>
						</GridColumn>
						<GridColumn style={{ background: 'white' }}  computer={5} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={fred} circular />
							<h3 >Fred Rubimbura, BSc.</h3>
							<h4 >Chief Pharmacist</h4>
							<p>Prior to joining VIEBEG, Fred worked for various pharmaceutical companies in Rwanda.
Moreover, he worked for private hospitals in East Africa, where he acquired valuable skills,
such as legal and ethical issues and how to interact with customers and patient care.
His studies of pharmacy allowed him to gain the necessary technical expertise and laboratory
skills to ensure VIEBEG’s success. Fred specialized in pharmacology and in analysing as
well as dispensing pharmaceutical products. He also holds the valuable JMS Pharmaceutical
industrial training certificate from India. Fred is dynamic, passionate, ambitious and eager to
learn.</p>
						</GridColumn>
						<GridColumn style={{ background: 'white' }}  computer={5} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={mireille} circular />
							<h3 >Mireille Umwiza, BSc.</h3>
							<h4 >Head of Corporate Accounting</h4>
							<p>Mireille joined VIEBEG Medical as Head of Corporate Accounting in 2018. In her position,
Mireille can leverage her experience in Human Resource Management, accounting and
project management. Mireille started her career at Marriott International focusing on
customer care and Human Resource Management. Having worked on several HRM and
accounting projects in Rwanda, Mireille complements the team with her strong accounting
and project management background. Mireille graduated from Mount Kenya University and
holds a Bachelor’s degree in Hospitality Management.</p>
						</GridColumn>
						<GridColumn style={{ background: 'white' }}  computer={5} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={cecile} circular />
							<h3 >Cecile Mukamurisa, BSc.</h3>
							<h4 >Sales manager</h4>
							<p>Cecile was born in Rwanda and holds a Bachelor’s degree in Dentistry from the University of
Rwanda. Cecile started her career as an assistant dental technician at DEVA Clinic in Kigali.
She then worked as a dentist at different dental clinics in Rwanda, where she gained valuable
product knowledge and a deep understanding of customer and patient care. Cecile also
worked at the University of Rwanda at the Dental Consultancy Center, where she conducted
several research projects on the oral health status of Rwanda. Before joining VIEBEG
Medical, Cecile worked as Chief of dental department at WIRINGIRE Clinic in Kigali.
Cecile holds certificates in Analysis of Medical Data from Rwanda Allied Health
Professional Council and from Harvard University.</p>
		</GridColumn>
						
						<GridColumn style={{ background: 'white' }}  computer={5} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={gaston} circular />
							<h3 >Gaston Sindayigaya</h3>
							<h4 >Office Assistant</h4>
							<p>Gaston is responsible for administrative tasks at VIEBEG, which include organizational and
support tasks as well as customer service. Gaston is a valuable contribution to VIEBEG and
supports the team with his slightly different take on challenges and tireless working routine.
Prior to working for VIEBEG, he gained experiences in different industries in Rwanda, such
as working for one of the biggest gas companies of Rwanda as a project manager. Gaston is
eager to learn, very disciplined, and has strong communication skills.</p>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}

export default Managment;
