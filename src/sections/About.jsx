import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { FiCheck, FiAward, FiUsers, FiThumbsUp, FiGlobe } from "react-icons/fi";

const trustPoints = [
  "Head Office in Delhi & Srinagar Branch",
  "Tailored Domestic & International Tours",
  "Flight & Hotel Booking Under One Roof",
  "Dedicated In-Destination Support",
  "100% Transparent Pricing - No Hidden Costs",
  "Reliable Taxi Transfers & Visa Assistance",
];

const milestones = [
  { icon: FiUsers, value: "5,000+", label: "Families Served", color: "text-gold-500" },
  { icon: FiGlobe, value: "200+", label: "Destinations", color: "text-amber-warm" },
  { icon: FiAward, value: "12+", label: "Years Experience", color: "text-gold-500" },
  { icon: FiThumbsUp, value: "98%", label: "Client Satisfaction", color: "text-amber-warm" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative z-10 overflow-hidden shadow-navy">
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85"
                  alt="Dal Lake Shikara - Travel with A & T Srinagar Kashmir"
                  className="w-full h-80 lg:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-900/20" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-8 -right-6 w-44 h-32 overflow-hidden border-4 border-white shadow-navy z-20"
              >
                <img
                  src="https://images.pexels.com/photos/14974761/pexels-photo-14974761.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Gulmarg snow paradise Kashmir"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <div className="absolute top-0 left-0 w-1 h-full bg-gold-gradient z-20" />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="absolute -top-6 -left-6 z-30 w-24 h-24 bg-navy-900 flex flex-col items-center justify-center shadow-navy"
              >
                <span className="font-display font-bold text-3xl text-gold-400 leading-none">A&T</span>
                <span className="text-white text-xs font-medium tracking-wide text-center leading-tight mt-1">
                  Delhi &<br />Srinagar
                </span>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-heading mb-4">
                Rooted in Delhi & Srinagar,
                <br />
                <span className="text-gradient-gold">Crafted for the World</span>
              </h2>
              <div className="gold-divider mb-6" />

              <p className="text-navy-600 text-base leading-relaxed mb-4">
                Travel with A & T was founded with one clear conviction — that every journey should be seamless, inspiring, and deeply personal. With our Head Office in Delhi and Branch Office in Srinagar (Jammu & Kashmir), we bridge the vibrant capital with the crown jewel of the Himalayas.
              </p>
              <p className="text-navy-600 text-base leading-relaxed mb-8">
                From idyllic Kashmir valleys, houseboats, and Himalayan expeditions to domestic getaways, international vacations, air ticketing, hotel stays, and private transfers — our team brings passionate dedication and local expertise to every itinerary.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck size={10} className="text-navy-900 font-bold" strokeWidth={3} />
                    </div>
                    <span className="text-navy-700 text-sm leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary"
              >
                Plan Your Journey
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
            {milestones.map((m) => (
              <div key={m.label} className="bg-white px-6 py-8 text-center group hover:bg-navy-50 transition-colors duration-200">
                <m.icon size={24} className={`${m.color} mx-auto mb-3`} />
                <div className="font-display font-bold text-3xl text-navy-900 mb-1">{m.value}</div>
                <div className="text-navy-500 text-xs font-medium tracking-wide uppercase">{m.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
