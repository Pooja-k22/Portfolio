import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_scaqh9m",       // ✅ Your Service ID
        "template_6c7sp2p",      // ✅ Your Template ID
        form.current,
        "7QArKm7Cv3VYUMMJf"      // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Failed to send message. Try again!");
        }
      );
  };

  return (
    <div className="bg-[#0a192f] min-h-screen">
      <div className="p-5 md:mx-45 py-25">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Contact Me</h2>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-lg p-5 md:p-16 md:m-10 shadow-lg text-white space-y-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div>
            <label className="block text-sm text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"   // ✅ must match template variable {{name}}
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white px-4 py-4 rounded focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"   // ✅ must match template variable {{email}}
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white p-4 rounded focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Message</label>
            <textarea
              name="message"   // ✅ must match template variable {{message}}
              required
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-gray-900 text-white p-4 rounded focus:outline-none focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-400 text-white px-6 py-2 rounded text-sm hover:bg-[#0a192f] hover:border hover:border-cyan-400 hover:text-white transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
