import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-800 mb-6">Welcome to Doctor House</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Doctor House, we combine medical expertise, state-of-the-art facilities, and heartfelt compassion to ensure the best healthcare experience for you.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Our Mission */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To improve lives through compassionate, innovative, and personalized healthcare services that prioritize your well-being and happiness.
            </p>
          </div>

          {/* Our Values */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Values</h2>
            <p className="text-gray-700">
              We are driven by integrity, empathy, and excellence, striving to create trusted relationships and exceeding patient expectations.
            </p>
          </div>

          {/* Experienced Team */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Experienced Medical Team</h2>
            <p className="text-gray-700">
              With a team of top-tier professionals, we bring expertise and care to every patient, staying ahead with the latest medical innovations.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-700">
              We offer advanced facilities, compassionate care, and patient-first service, ensuring the best healthcare experience for you and your loved ones.
            </p>
          </div>

          {/* State-of-the-Art Facilities */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">State-of-the-Art Facilities</h2>
            <p className="text-gray-700">
              Our hospital is equipped with cutting-edge medical technology, offering innovative solutions for diagnostics, treatments, and recovery.
            </p>
          </div>

          {/* Community Care */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Community Care</h2>
            <p className="text-gray-700">
              We are committed to supporting the community with health awareness programs, free medical camps, and accessible healthcare services.
            </p>
          </div>

          {/* Specialized Departments */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Specialized Departments</h2>
            <p className="text-gray-700">
              Our specialized departments include cardiology, orthopedics, pediatrics, and more, providing expert care tailored to your needs.
            </p>
          </div>

          {/* Patient-Centered Approach */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Patient-Centered Approach</h2>
            <p className="text-gray-700">
              We put you first. Your comfort, convenience, and care are at the core of everything we do, ensuring a holistic healing journey.
            </p>
          </div>

          {/* Innovation in Healthcare */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Innovation in Healthcare</h2>
            <p className="text-gray-700">
              We embrace the future with groundbreaking advancements in healthcare technology, providing revolutionary treatments and solutions.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-800 text-white py-4 px-8 rounded-full text-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
