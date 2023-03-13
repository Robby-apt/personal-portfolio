import React from 'react';
import ContactMedia from './contact-components/ContactMedia';
import ContactForm from './contact-components/ContactForm';
import Footer from './contact-components/Footer';

function Contact() {
	return (
		<div id="contact" className="section darkSection">
			<div className="sectionContainer">
				<h1 className="sectionTitle">Contact</h1>
				<h2 className="sectionSub">Feel free to contact me</h2>

				<div className="contactFormAndMedia">
					<ContactMedia />
					<ContactForm />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
