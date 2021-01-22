import React from 'react';
import { Form, Section, Head } from './ContactStyle';

function Contact() {
	return(
		<Section className="main__gap">
			<div className="container">
				<Head>drop me a line</Head>
				<Form>
					<div className="input__wrapper">
						<input type="text" name="name" id="name" placeholder="your name"/>
						<input type="email" name="email" id="email" placeholder="your email"/>
					</div>
					<textarea name="" id="" cols="30" rows="10" placeholder="your massage"></textarea>
					<input type="submit" value="Send Massage"/>
				</Form>
			</div>
		
		</Section>
		
	);
}

export default Contact;
