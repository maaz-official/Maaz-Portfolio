import React from 'react';
import HeroSection from '../components/HeroSection';
import ExperienceTimeline from '../components/ExperienceTimeline';

const Home = () => {
  return (
    <>
      <HeroSection />
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Professional Experience
          </h2>
          <ExperienceTimeline />
        </div>
      </section>
    </>
  );
};

export default Home;