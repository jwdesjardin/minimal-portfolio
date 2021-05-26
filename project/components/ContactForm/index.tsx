import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const ContactForm = () => {
	return (
		<section className='content-container mb-20 xl:flex xl:py-10'>
			<h2 className='heading-text mt-10 mb-6 xl:w-5/12'>Contact Me</h2>

			<form action='' className='xl:w-7/12'>
				<div>
					<label className='input-label' htmlFor='name'>
						Name
					</label>
					<input className='input' name='name' type='text' placeholder='Jane Appleseed' />
				</div>
				<div>
					<label className='input-label' htmlFor='email'>
						Email Address
					</label>
					<input className='input' name='email' type='text' placeholder='email@example.com' />
				</div>
				<div>
					<label className='input-label' htmlFor='name'>
						Messages
					</label>
					<textarea className='input' name='message' placeholder='How can i help?' rows={5} />
				</div>
				<button className='secondary-button '>Send Message</button>
			</form>
		</section>
	)
}

export default ContactForm
