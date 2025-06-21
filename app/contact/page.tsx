'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:akashmourya9522@gmail.com?subject=Message from ${form.name}&body=Email: ${form.email}%0D%0A%0D%0A${form.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='font-sans bg-gray-100 text-gray-800'>
      <section className='flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
          Contact SleepTracker
        </h1>
        <p className='text-lg md:text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
          Have questions or need help? Get in touch with us!
        </p>
      </section>

      <section className='py-16 px-8 bg-white'>
        <h2 className='text-3xl font-bold text-center mb-8'>Get in Touch</h2>
        <form
          className='max-w-3xl mx-auto space-y-6'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:border-2 focus:outline-none'
              placeholder='Your Name'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='mt-1 block w-full px-4 py-2  border-gray-300 rounded-md shadow-sm focus:outline-none  border-2 focus:border-purple-500'
              placeholder='Your Email'
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              value={form.message}
              onChange={handleChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:outline-none focus:border-2'
              placeholder='Your Message'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-gradient-to-r to-blue-500 from-purple-500  text-white px-4 py-2 rounded-md font-medium shadow-md  cursor-pointer'
          >
            Send Message
          </button>
        </form>
      </section>

      <section className='py-16 px-8 bg-gray-100'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Contact Information
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <h3 className='text-xl font-bold mb-2'>Email</h3>
            <p className='text-gray-600'>support@sleeptracker.com</p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-2'>Phone</h3>
            <p className='text-gray-600'>+91 999XXXXXXX</p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-2'>Address</h3>
            <p className='text-gray-600'>
              Sleep Tracker HQ, 123 Sleepy Lane, Dream City, ST 45678k
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;