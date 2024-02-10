import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeSection() {
  return (
    <section className="border border-gray-200 rounded-lg shadow-lg py-8 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to Vendor 1 Driving School</h2>
        <p className="text-lg mb-4">Vendor 1 Driving School is committed to providing high-quality driving education. Our experienced instructors are dedicated to helping you become a safe and confident driver.</p>
        <Link to="/exam" className="inline-block border border-gray-200 rounded-lg shadow-lg text-white px-6 py-3 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600">Take Exam</Link>
        <Link to="#contact" className="inline-block ml-4 border border-gray-200 rounded-lg shadow-lg text-blue-500 px-6 py-3 rounded-lg font-semibold">Contact Us</Link>
      </div>
    </section>
  );
}

export default WelcomeSection;
