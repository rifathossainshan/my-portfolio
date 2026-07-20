import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these placeholders with your actual EmailJS IDs
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    setTimeout(() => {
      setStatus('success');
      form.current.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Get In <span className="text-accent-blue">Touch</span></h2>
        <p className="text-gray-500 dark:text-gray-400">Let's build something amazing together.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <FiMail size={24} />
              </div>
              <div>
                <p className="font-medium text-gray-500">Email</p>
                <a href="mailto:hello@rifat.com" className="font-semibold hover:text-accent-blue transition">hello@rifat.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-coral/10 flex items-center justify-center text-accent-coral">
                <FiMapPin size={24} />
              </div>
              <div>
                <p className="font-medium text-gray-500">Location</p>
                <p className="font-semibold">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h4 className="font-medium mb-4 text-gray-500">Social Profiles</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent-blue hover:text-white transition"><FiLinkedin size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent-blue hover:text-white transition"><FiGithub size={20} /></a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="glass p-8 rounded-2xl flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-500">Name</label>
            <input type="text" name="user_name" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-blue outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-500">Email</label>
            <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-blue outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-500">Message</label>
            <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-blue outline-none transition resize-none"></textarea>
          </div>
          <button type="submit" disabled={status === 'sending'} className="mt-2 w-full py-3 rounded-lg bg-accent-blue text-white font-medium hover:bg-blue-600 transition flex justify-center items-center">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="text-green-500 text-center mt-2 text-sm">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
