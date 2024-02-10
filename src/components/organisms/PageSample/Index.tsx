import React from 'react';
import Navbar from './Navbar'; // Make sure the path matches where your Navbar component is located
import Footer from './Footer'; // Make sure the path matches where your Footer component is located

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
        <p>This is a sample page to demonstrate a basic layout with a Navbar and a Footer using Tailwind CSS.</p>
        {/* You can add more content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Page;