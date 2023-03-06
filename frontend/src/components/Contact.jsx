import React from 'react';
import Form from './contact-components/Form.jsx'
import Footer from './contact-components/Footer';

function Contact() {
	return (
		<div id="contact" className="section lightSection">
			<h1 className="sectionTitle">Contact</h1>
			<h2 className="sectionSub">Feel free to contact me</h2>

			<div className="contactFormAndMedia">
				<div className="contactDetails">
					<p className="contactPrompt">
						Feel free to reach out to me on the
						<br />
						following platforms
					</p>

					<p className="contactInfo">
						Telephone: +254 797 943 037
						<br />
						Email: robin.kw99@gmail.com
					</p>

					<div className="socialMedia">
						<a
							href="https://www.linkedin.com/in/robin-wafula-95a09218a/"
							target="_blank"
						>
							<i className="fab fa-linkedin-in fa-customize"></i>
						</a>

						<a href="https://github.com/Robby-apt" target="_blank">
							<i className="fab fa-github fa-customize"></i>
						</a>

						<p className="contactConclusion">
							Write to me, let's work together.
						</p>
					</div>
				</div>

				<Form/>
			</div>

			<Footer />
		</div>
	);
}

export default Contact;
