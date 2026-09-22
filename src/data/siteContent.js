import kashmirDalLake from "../assets/packages/kashmir-dal-lake.jpg";
import vaishnoDeviBhavan from "../assets/packages/vaishno-devi-bhavan.jpg";

export const brand = {
  name: "Travel with A & T",
  tagline: "Curating Unforgettable Journeys",
  subTagline: "Premier travel experiences curated across India and beyond",
  phone: "+91 95990 83509",
  whatsapp: "919599083509",
  email: "travelwithaandt@gmail.com",
  address: "Head Office: Delhi | Branch Office: Srinagar, Jammu and Kashmir",
  headOffice: "Delhi, India",
  branchOffice: "Srinagar, Jammu and Kashmir, India",
  gst: "GSTIN: 20XXXXX1234Z5",
  socialLinks: {
    instagram: "https://instagram.com/travelwithaandt",
    facebook: "https://facebook.com/travelwithaandt",
    youtube: "https://youtube.com/@travelwithaandt",
  },
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Premier Travel Company · Delhi & Srinagar",
  heading: "Escape the Ordinary,",
  headingAccent: "Discover the Extraordinary",
  subheading:
    "From domestic tours and international holidays to flights, hotels, visas, and taxi transfers, Travel with A & T crafts journeys that become stories worth telling.",
  ctas: [
    { label: "Explore Packages", href: "#packages", variant: "primary" },
    { label: "Talk to Expert", href: "#contact", variant: "outline" },
  ],
  stats: [
    { value: "5000+", label: "Happy Travellers" },
    { value: "200+", label: "Destinations" },
    { value: "12+", label: "Years Experience" },
    { value: "98%", label: "Satisfaction Rate" },
  ],
};

export const holidayPackages = [
  {
    id: "kashmir-paradise-circuit",
    category: "Popular",
    badge: "Best Seller",
    destination: "Srinagar, Gulmarg, Pahalgam & Sonamarg",
    duration: "6 Nights / 7 Days",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Dal Lake Shikara & Houseboat", "Gulmarg Gondola Ride", "Betaab & Aru Valleys", "Thajiwas Glacier Sonamarg"],
    description: "The complete Kashmir circuit — experience peaceful Dal Lake houseboats, Gulmarg's snow peaks, Pahalgam's pine rivers, and Sonamarg's golden glaciers.",
  },
  {
    id: "kashmir-honeymoon-special",
    category: "Honeymoon",
    badge: "Romantic",
    destination: "Kashmir Honeymoon Special",
    duration: "5 Nights / 6 Days",
    image: "https://images.pexels.com/photos/16182234/pexels-photo-16182234.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Private Candlelight Houseboat", "Sunset Shikara Cruise", "Gulmarg Apharwat Gondola", "Betaab Valley Photoshoot"],
    description: "Handcrafted for couples — romantic stays in carved cedar houseboats on Dal Lake, flower-filled shikara rides, and breathtaking snow-peaked vistas.",
  },
  {
    id: "gulmarg-snow-adventure",
    category: "Adventure",
    badge: "Snow & Ski",
    destination: "Gulmarg Ski & Snow Escape",
    duration: "4 Nights / 5 Days",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Phase 1 & 2 Gondola Rides", "Apharwat Peak Snow Walk", "Skiing & Snowboarding Lessons", "Alpine Pine Trails"],
    description: "Asia's premier winter wonderland — ascend the world's second-highest cable car to 4,000m, ski powdery slopes, and enjoy cozy fireside evenings.",
  },
  {
    id: "pahalgam-valley-retreat",
    category: "Family",
    badge: "Popular",
    destination: "Pahalgam Valley & Lidder River",
    duration: "4 Nights / 5 Days",
    image: "https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Betaab Valley Exploration", "Aru Valley Meadows", "Chandanwari Snow Point", "Baisaran Mini Switzerland"],
    description: "The Valley of Shepherds — tranquil pine forests, roaring Lidder river streams, scenic pony rides across Baisaran, and verdant meadows.",
  },
  {
    id: "sonamarg-golden-glacier",
    category: "Adventure",
    badge: "Scenic",
    destination: "Sonamarg Meadow of Gold",
    duration: "3 Nights / 4 Days",
    image: "https://images.pexels.com/photos/24974721/pexels-photo-24974721.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Thajiwas Glacier Trek", "Zero Point Zojila Pass", "Sindh River Trout Stream", "Lush Alpine Meadows"],
    description: "Kashmir's gateway to Ladakh — breathtaking hanging glaciers, rushing glacial rivers, and dramatic snow passes at the threshold of the Himalayas.",
  },
  {
    id: "srinagar-dal-heritage",
    category: "Popular",
    badge: "Heritage",
    destination: "Srinagar Dal Lake & Mughal Heritage",
    duration: "3 Nights / 4 Days",
    image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Heritage Houseboat Stay", "Floating Flower & Veg Market", "Nishat & Shalimar Gardens", "Shankaracharya Hilltop"],
    description: "The royal soul of Kashmir — glide through mirror-like waters of Dal Lake, marvel at 400-year-old terraced Mughal gardens, and explore old-city artisans.",
  },
  {
    id: "gurez-valley-offbeat",
    category: "Offbeat",
    badge: "Hidden Gem",
    destination: "Offbeat Gurez Valley & Habba Khatoon",
    duration: "5 Nights / 6 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbw1HoXj5CR-qIanOg5OmCbqIEDqi3-RbDZYsyl_ybKQ&s=10",
    highlights: ["Habba Khatoon Pyramid Peak", "Kishanganga River Valley", "Dawar Historic Border Village", "Untouched Alpine Wildlife"],
    description: "Untouched by commercial crowds — journey through razdan pass to discover emerald green valleys, pyramid peaks, and warm Dard Shin hospitality.",
  },
  {
    id: "doodhpathri-yusmarg-meadows",
    category: "Offbeat",
    badge: "Offbeat",
    destination: "Doodhpathri & Yusmarg Untouched Glades",
    duration: "4 Nights / 5 Days",
    image: "https://images.unsplash.com/photo-1689961962572-988369409784?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Valley of Milk Rivers", "Nilnag Forest Lake", "Tatakooti Peak Panoramas", "Lush Pine Treks"],
    description: "Pristine meadow sanctuaries — velvety grass carpeted with wildflowers, frothing streams, and tranquil pine wilderness away from city noise.",
  },
  {
    id: "grand-kashmir-family-tour",
    category: "Family",
    badge: "Family Special",
    destination: "Grand Kashmir 8-Day Family Vacation",
    duration: "7 Nights / 8 Days",
    image: "https://images.pexels.com/photos/36100089/pexels-photo-36100089.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Complete 4-Valley Tour", "Deluxe Houseboat & Stays", "Family Pony Rides & Sledging", "Pampore Saffron & Apple Orchards"],
    description: "The ultimate family holiday — perfectly paced itinerary covering Srinagar, Gulmarg, Pahalgam, and Sonamarg with private transfers and personal guide.",
  },
  {
    id: "vaishno-devi-kashmir-yatra",
    category: "Family",
    badge: "Spiritual",
    destination: "Vaishno Devi & Kashmir Divine Yatra",
    duration: "6 Nights / 7 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6db7SiFEY9uBypus_g6yl7h__PnSdoL7R8faafv_mpw&s=10",
    highlights: ["Mata Vaishno Devi Bhawan Darshan", "Scenic Patnitop Halt", "Srinagar Dal Lake Shikara", "Gulmarg Snow Mountains"],
    description: "A deeply fulfilling spiritual journey combining blessings at Mata Vaishno Devi Shrine with the celestial natural beauty of Kashmir Valley.",
  },
  {
    id: "kashmir-autumn-saffron-chinar",
    category: "Popular",
    badge: "Autumn Special",
    destination: "Kashmir Autumn Chinar & Saffron Trails",
    duration: "4 Nights / 5 Days",
    image: "https://images.pexels.com/photos/5776631/pexels-photo-5776631.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Naseem Bagh Golden Chinars", "Pampore Purple Saffron Bloom", "Apple Harvest in Shopian", "Crisp Autumn Shikara Rides"],
    description: "Experience Kashmir painted in amber, crimson, and gold during autumn — witness vibrant saffron blooms and walk beneath majestic blazing chinar canopies.",
  },
  {
    id: "kashmir-winter-wonderland",
    category: "Honeymoon",
    badge: "Winter Magic",
    destination: "Kashmir Winter Wonderland & Frozen Lakes",
    duration: "5 Nights / 6 Days",
    image: "https://images.pexels.com/photos/14974761/pexels-photo-14974761.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Snow-blanketed Dal Lake", "Gulmarg Deep Powder Snow", "Traditional Kangri & Kahwa", "Heated Luxury Accommodations"],
    description: "When paradise turns white — enjoy snowy boat rides, frozen cascades, hot Kashmiri Kahwa tea by the log fire, and surreal snowy mountain panoramas.",
  },
];

export const hotelPackages = [
  {
    id: "hotel-khyber-gulmarg",
    name: "The Khyber Himalayan Resort & Spa",
    location: "Gulmarg, Kashmir",
    stars: 5,
    category: "Luxury Mountain Resort",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Heated Indoor Pool", "L'Occitane Spa", "Panoramic Peak View", "Ski Concierge", "Fine Dining"],
    description: "Perched 8,825 feet high amidst pine forests, Khyber is Gulmarg's premier luxury retreat with breathtaking Apharwat mountain panoramas.",
  },
  {
    id: "hotel-lalit-grand-palace",
    name: "The Lalit Grand Palace",
    location: "Srinagar, Kashmir",
    stars: 5,
    category: "Royal Heritage Palace",
    image: "https://images.pexels.com/photos/7611449/pexels-photo-7611449.jpeg?auto=compress&cs=tinysrgb&w=1200",
    amenities: ["Dal Lake Overlook", "Rejuve Spa", "Royal Palace Grounds", "Chinar Lawns", "Indoor Heated Pool"],
    description: "Built in 1910 by Maharaja Pratap Singh, this royal palace overlooks Dal Lake and encapsulates century-old regal Kashmiri luxury.",
  },
  {
    id: "hotel-vivanta-dal-view",
    name: "Vivanta Dal View (Taj)",
    location: "Srinagar, Kashmir",
    stars: 5,
    category: "Luxury Lake Resort",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Infinity Hillside Pool", "Jiva Spa", "Valley & Lake Views", "Kashmiri Wazwan", "Terrace Lounge"],
    description: "Perched on Kralsangri hill with a bird's-eye view of Dal Lake and the Zabarwan range, offering unmatched contemporary elegance.",
  },
  {
    id: "hotel-luxury-heritage-houseboats",
    name: "Mascot & Wangnoo Heritage Houseboats",
    location: "Nigeen Lake, Srinagar, Kashmir",
    stars: 5,
    category: "Carved Cedar Houseboat",
    image: "https://images.pexels.com/photos/16182234/pexels-photo-16182234.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Handcrafted Walnut Wood", "Private Sundeck", "Dedicated Butler", "Complimentary Shikara", "Authentic Kahwa"],
    amenities: ["Handcrafted Cedar Wood", "Private Lake Sundeck", "Personal Butler", "Shikara Transfers", "Traditional Fireplace"],
    description: "Living heritage on the tranquil waters of Nigeen Lake — intricate Kashmiri woodwork, hand-knotted Persian carpets, and peaceful morning mists.",
  },
  {
    id: "hotel-kolahoi-green-pahalgam",
    name: "Kolahoi Green Resort & Spa",
    location: "Pahalgam, Kashmir",
    stars: 5,
    category: "Riverside Resort",
    image: "https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg?auto=compress&cs=tinysrgb&w=1200",
    amenities: ["Lidder Riverfront", "Pine Garden Lawns", "Ayurvedic Spa", "Mountain Balconies", "Bonfire Evenings"],
    description: "Nestled in Pahalgam amidst towering pines and Apple Orchards, featuring expansive lawns and serene views of the Himalayan peaks.",
  },
  {
    id: "hotel-radisson-srinagar",
    name: "Radisson Collection Hotel & Spa, Riverfront",
    location: "Srinagar, Kashmir",
    stars: 5,
    category: "Riverfront Luxury",
    image: "https://images.pexels.com/photos/13671454/pexels-photo-13671454.jpeg?auto=compress&cs=tinysrgb&w=1200",
    amenities: ["Jhelum River Views", "Luxury Wellness Spa", "Multi-Cuisine Dining", "Club Lounge", "Airport Concierge"],
    description: "Situated on the banks of River Jhelum, blending artisanal Kashmiri craftsmanship with world-class hospitality.",
  },
];

export const services = [
  {
    id: "svc-1",
    icon: "FaPlane",
    title: "Domestic & International Flights",
    description:
      "Best airfare deals for both domestic and international routes with reliable booking support and flexible travel options.",
  },
  {
    id: "svc-2",
    icon: "FaHotel",
    title: "Domestic & International Hotel Booking",
    description:
      "We arrange hotel bookings across India and abroad, from budget stays to premium resorts with reliable end-to-end support.",
  },
  {
    id: "svc-3",
    icon: "FaPassport",
    title: "Visa Apply Services",
    description:
      "End-to-end visa application assistance with documentation help, appointment guidance, and smooth processing support.",
  },
  {
    id: "svc-4",
    icon: "FaRoute",
    title: "Tour Packages",
    description:
      "We create ready and custom tour packages for destinations like 4 Dham Yatra, Manali, Goa, Kerala, Thailand, Bali, and more.",
  },
  {
    id: "svc-5",
    icon: "FaCarSide",
    title: "Taxi Transfer Services",
    description:
      "Comfortable taxi services for one place to another, including airport pickup, hotel transfer, local travel, and outstation rides.",
  },
  {
    id: "svc-6",
    icon: "FaUsers",
    title: "Group & Family Travel",
    description:
      "Group tours, family vacations, pilgrimage departures, and special travel planning with end-to-end coordination.",
  },
  {
    id: "svc-7",
    icon: "FaShieldAlt",
    title: "Complete Travel Support",
    description:
      "From enquiry to return journey, we support bookings, coordination, itinerary changes, and transparent trip planning under one roof.",
  },
];

export const testimonials = [
  {
    id: "t-1",
    name: "Dr. Ananya & Rohan Sen",
    location: "South Delhi",
    rating: 5,
    avatar: "AS",
    package: "Kashmir Honeymoon Special",
    review:
      "Travel with A & T arranged an unforgettable honeymoon for us! From the candlelit dinner on a luxury cedar houseboat on Dal Lake to our Phase 2 Gondola ride in Gulmarg, their Srinagar branch team made sure every single detail was seamless and romantic.",
  },
  {
    id: "t-2",
    name: "Rajesh & Sunita Malhotra",
    location: "Delhi NCR",
    rating: 5,
    avatar: "RM",
    package: "Grand Kashmir Family Tour",
    review:
      "Traveling with senior parents and young children can be daunting, but Travel with A & T made our Kashmir vacation completely effortless. Having their branch office right in Srinagar gave us immense peace of mind. Polite chauffeurs and exceptional service throughout!",
  },
  {
    id: "t-3",
    name: "Vikramaditya Rathore",
    location: "Gurgaon, Haryana",
    rating: 5,
    avatar: "VR",
    package: "Gulmarg Ski & Snow Adventure",
    review:
      "Our 5-day snow escape to Gulmarg was world-class. The team secured our Gondola Phase 2 passes in advance, connected us with a certified local ski instructor, and arranged cozy heated mountain accommodations. Highly recommended!",
  },
  {
    id: "t-4",
    name: "Meenakshi & Sameer Iyer",
    location: "Lajpat Nagar, Delhi",
    rating: 5,
    avatar: "MI",
    package: "Offbeat Gurez & Doodhpathri",
    review:
      "We wanted to see offbeat Kashmir beyond regular crowds. The team crafted an incredible itinerary through Razdan Pass into Gurez Valley and Doodhpathri glades. Breathtaking landscapes, 100% transparent pricing, and 24/7 on-call support.",
  },
];

export const faqs = [
  {
    id: "faq-1",
    question: "How do I book a travel package with Travel with A & T?",
    answer:
      "Simply fill out our enquiry form, call us directly at 9599083509, or message us on WhatsApp. Our travel experts in Delhi and Srinagar will get back to you quickly and help create the right itinerary.",
  },
  {
    id: "faq-2",
    question: "Do you offer customised tour packages?",
    answer:
      "Yes. All our packages can be customised for dates, duration, hotels, inclusions, and special requests based on your budget and preferences.",
  },
  {
    id: "faq-3",
    question: "What is the payment process?",
    answer:
      "We accept UPI, net banking, credit cards, debit cards, and bank transfers. Advance payment is required to confirm bookings, with the balance due before departure.",
  },
  {
    id: "faq-4",
    question: "Do you assist with visa applications?",
    answer:
      "Yes. We provide complete visa application support for many international destinations and help with documents, appointments, and submission guidance.",
  },
  {
    id: "faq-5",
    question: "Do you provide hotel, flight, and taxi booking separately?",
    answer:
      "Yes. You can book domestic or international hotels, flights, visa services, taxi transfers, or complete holiday packages with us separately as needed.",
  },
  {
    id: "faq-6",
    question: "Where are your offices located?",
    answer:
      "Our Head Office is located in Delhi, and our Branch Office is situated in Srinagar, Jammu and Kashmir. We provide seamless travel support across North India and worldwide.",
  },
];

export const contactInfo = {
  phone: "+91 95990 83509",
  whatsapp: "919599083509",
  whatsappMessage: "Hello! I'm interested in booking a travel package with Travel with A & T. Please help me.",
  email: "travelwithaandt@gmail.com",
  emailSubject: "Travel Package Enquiry - Travel with A & T",
  address: "Head Office: Delhi | Branch Office: Srinagar, Jammu and Kashmir",
  headOffice: {
    title: "Head Office",
    city: "Delhi",
    state: "Delhi",
    address: "Delhi, India",
    phone: "+91 95990 83509",
    mapUrl: "https://maps.google.com/?q=Delhi+India",
  },
  branchOffice: {
    title: "Branch Office",
    city: "Srinagar",
    state: "Jammu and Kashmir",
    address: "Srinagar, Jammu and Kashmir, India",
    phone: "+91 95990 83509",
    mapUrl: "https://maps.google.com/?q=Srinagar+Jammu+and+Kashmir",
  },
  hours: "Mon-Sat: 9:30 AM - 7:30 PM | Sun: 10:00 AM - 5:00 PM",
  mapUrl: "https://maps.google.com/?q=Delhi+India",
};
