import React from 'react';
import { Stethoscope, UserPlus, Brain, Puzzle, Book, Calculator, Link } from 'lucide-react';

export default function page() {
    const games = [
        { name: 'Brain Boost', icon: Brain, description: 'Enhance cognitive skills through structured activities.' },
        { name: 'Number Mastery', icon: Calculator, description: 'Develop mathematical abilities with targeted exercises.' },
        { name: 'Language Development', icon: Book, description: 'Improve communication skills with specialized tasks.' },
        { name: 'Problem Solving', icon: Puzzle, description: 'Build analytical thinking with tailored challenges.' },
    ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-blue-700">Cognoo</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['About', 'Programs', 'Research', 'Cofntact'].map((item) => (
              <a key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 p-8">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Medical professionals working with children on educational activities"
              className="w-full h-auto object-cover"
              style={{ height: '500px', width: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-green-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Cognoo</h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                  Integrating medical expertise with educational technology for optimal child development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-32">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <UserPlus className="h-12 w-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 text-center mb-2">Guardian Access</h3>
            <p className="text-gray-600 text-center mb-4">
              Monitor and support your child's therapeutic learning journey.
            </p>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md text-white font-medium transition-colors"
            >
                Guardian Login
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <Stethoscope className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-green-700 text-center mb-2">Professional Portal</h3>
            <p className="text-gray-600 text-center mb-4">
              Access tools to guide, assess, and customize patient progress.
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-md text-white font-medium transition-colors">
              Professional Login
            </button>
          </div>
        </section>

        {/* Learning Programs */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-6">Therapeutic Learning Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {games.map((game, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center justify-center mb-3">
                  {React.createElement(game.icon, { className: "h-8 w-8 text-blue-500" })}
                </div>
                <h4 className="text-lg font-semibold text-blue-700 text-center mb-2">{game.name}</h4>
                <p className="text-sm text-gray-600 text-center">
                  {game.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="text-center mt-24 mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Why Choose Cognoo?</h3>
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              { title: 'Evidence-Based Approach', description: 'Programs designed on proven medical research', icon: '🔬' },
              { title: 'Personalized Treatment', description: 'Adaptive learning tailored to each child', icon: '🎯' },
              { title: 'Expert Oversight', description: 'Guided by experienced medical professionals', icon: '👨‍⚕️' },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <span className="text-3xl mb-2 block">{feature.icon}</span>
                <h4 className="text-lg font-semibold text-blue-700 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">About Us</h5>
              <p className="text-sm text-blue-200">Cognoo: Innovative therapeutic learning solutions for every child's unique developmental journey.</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {['Home', 'Programs', 'Research', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase()}`} className="text-sm text-blue-200 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <p className="text-sm text-blue-200">Email: info@cognoomedical.com</p>
              <p className="text-sm text-blue-200">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="text-sm text-blue-200 hover:text-white transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p className="text-sm text-blue-200">&copy; 2024 Cognoo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
