import React from "react";
import { Users, Target, Heart, Award } from "lucide-react";

export default function About() {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "5★", label: "Average Rating" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Our Mission",
      description: "To bring authentic Indian products and experiences to every home, connecting communities through quality and tradition."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Our Values",
      description: "We believe in authenticity, quality, and building lasting relationships with our customers and artisan partners."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Our Promise",
      description: "Premium quality products, exceptional service, and a seamless shopping experience that exceeds expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              About <span className="text-yellow-300">Apna Thikana</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              Where tradition meets innovation in the digital marketplace
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Apna Thikana began with a simple vision: to create a modern Indian storefront that bridges
              the gap between traditional craftsmanship and contemporary digital commerce. Founded on the
              principles of performance, design, and compliance, we've built more than just an online store.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We're a community that celebrates the rich heritage of Indian culture while embracing
              innovative technology to deliver exceptional shopping experiences. Every product in our
              collection is carefully curated to ensure authenticity, quality, and cultural significance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, Apna Thikana stands as a testament to what's possible when tradition meets
              innovation, serving customers worldwide while supporting local artisans and businesses
              across India.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Drives Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>





        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8 text-orange-100">
            Be part of our mission to celebrate and preserve Indian heritage through commerce
          </p>

        </div>
      </div>
    </div>
  );
}
