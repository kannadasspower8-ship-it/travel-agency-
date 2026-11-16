/**
 * Thirumala Travel Agency - Central Data Store
 * Structured database of Destinations, Packages, Services, and Testimonials.
 * Decoupled from presentation for CMS/API readiness.
 */

const TRAVEL_DATA = {
  destinations: [
    {
      id: "ooty-nilgiris",
      name: "Ooty & Nilgiris",
      tagline: "Queen of Hill Stations & Nilgiri Hills",
      shortDesc: "Explore Ooty, Coonoor, Nilgiris, Pykara Lake, Doddabetta Peak, and scenic tea plantations.",
      fullDesc: "Nestled in the Nilgiri Hills of Tamil Nadu, Ooty is renowned for its cool mountain climate, panoramic viewpoints, botanical gardens, and sprawling tea estates. Our itineraries cover Ooty local attractions, Doddabetta, Pykara waterfalls, and scenic Coonoor.",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      packageCount: 2,
      idealDuration: "1N/2D & 2N/3D",
      bestTimeToVisit: "All Year Round",
      topAttractions: [
        "Government Rose Garden & Botanical Garden",
        "Doddabetta Peak & Tea Factory",
        "Ooty Lake & Boat House",
        "Sims Park, Lamb's Rock & Dolphin's Nose (Coonoor)",
        "Pykara Waterfalls & Lake (2N/3D Tour)"
      ],
      travelTips: [
        "Carry light woolens or sweaters as evening temperatures drop pleasantly.",
        "Local tea and homemade chocolates are popular items in Ooty markets."
      ]
    },
    {
      id: "odisha",
      name: "Odisha Spiritual Circuit",
      tagline: "Puri • Konark • Bhubaneswar",
      shortDesc: "Sacred pilgrimage covering Bhubaneswar temples, Puri Jagannath Darshan, Konark Sun Temple, and Puri Beach.",
      fullDesc: "The Odisha Spiritual Circuit brings together profound spiritual darshan and iconic Kalinga temple architecture. Experience morning darshan at Jagannath Puri, UNESCO World Heritage Konark Sun Temple, ancient Bhubaneswar shrines, and tranquil coastal beaches.",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80"
      ],
      packageCount: 1,
      idealDuration: "2 Days / 1 Night",
      bestTimeToVisit: "October to March",
      topAttractions: [
        "Puri Jagannath Temple Darshan",
        "Konark Sun Temple Architectural Wonder",
        "Lingaraj, Mukteshwar & Rajarani Temples",
        "Puri Beach & Chandrabhaga Beach"
      ],
      travelTips: [
        "Dress conservatively when visiting holy temple premises.",
        "Early morning darshan offers serene and comfortable temple visits."
      ]
    },
    {
      id: "andaman",
      name: "Andaman Islands",
      tagline: "Port Blair • Havelock • Neil Island",
      shortDesc: "Historic Cellular Jail, pristine Radhanagar Beach, Elephant Beach coral waters, and natural rock bridges.",
      fullDesc: "The Andaman archipelago features crystal-clear waters, lush tropical beauty, and national freedom struggle heritage. Our approved 4N/5D tour connects the capital Port Blair with Swaraj Dweep (Havelock) and Shaheed Dweep (Neil) via inter-island catamarans.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      ],
      packageCount: 1,
      idealDuration: "4 Nights / 5 Days",
      bestTimeToVisit: "October to May",
      topAttractions: [
        "Cellular Jail National Memorial & Light and Sound Show",
        "Radhanagar Beach (Beach No. 7)",
        "Elephant Beach (Optional Water Sports)",
        "Natural Living Coral Bridge (Neil Island)",
        "Bharatpur & Laxmanpur Beaches"
      ],
      travelTips: [
        "Catamaran tickets between Port Blair, Havelock, and Neil are included in the package.",
        "Water sports at Elephant Beach are optional extra-cost items excluded from base package."
      ]
    },
    {
      id: "north-india",
      name: "North India Pilgrimage",
      tagline: "Varanasi • Gaya • Ayodhya • Prayagraj",
      shortDesc: "Sacred circuit covering Kashi Vishwanath, Gaya Vishnupad, Bodh Gaya, Shri Ram Janmabhoomi, Triveni Sangam, and Ganga Aarti.",
      fullDesc: "A revered 4-day pilgrimage tracing India's most auspicious holy cities. Witness the grand evening Ganga Aarti in Kashi, offer prayers at Vishnupad and Mahabodhi in Gaya/Bodh Gaya, visit Shri Ram Janmabhoomi and Saryu Aarti in Ayodhya, and take holy darshan at Triveni Sangam in Prayagraj.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80"
      ],
      packageCount: 1,
      idealDuration: "4 Days / 3 Nights",
      bestTimeToVisit: "October to March",
      topAttractions: [
        "Kashi Vishwanath Temple & Dashashwamedh Ganga Aarti",
        "Vishnupad Temple (Gaya) & Mahabodhi Temple (Bodh Gaya)",
        "Shri Ram Janmabhoomi, Hanuman Garhi & Saryu Aarti (Ayodhya)",
        "Triveni Sangam & Bade Hanuman Mandir (Prayagraj)"
      ],
      travelTips: [
        "Comfortable walking shoes are recommended for temple corridors and river ghats.",
        "Pind Daan rituals, special darshan, and Ganga boat rides are optional extra-cost items."
      ]
    }
  ],

  packages: [
    {
      id: "ooty-tour-package-1n2d",
      slug: "ooty-tour-package-1n2d",
      name: "Ooty Tour Package",
      packageNumber: "PACKAGE 01",
      duration: "1 Night / 2 Days",
      destination: "Ooty – Coonoor",
      destinations: ["ooty", "coonoor"],
      tourType: "Family | Friends | Couple | Group Tour",
      packageTypes: ["Family", "Group", "Couple"],
      customizedTourAvailable: true,
      price: null,
      priceLabel: "Starting From ₹ ______ / Person",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
      closingRouteLine: "OOTY • COONOOR • NIL",
      travelStyle: ["family", "friends", "couple", "group"],
      highlights: [
        "Rose Garden",
        "Botanical Garden",
        "Doddabetta Peak",
        "Ooty Lake",
        "Tea Estates",
        "Sims Park",
        "Lamb's Rock",
        "Dolphin's Nose"
      ],
      inclusions: [
        "1 night hotel accommodation",
        "Breakfast",
        "Ooty & Coonoor sightseeing",
        "Comfortable transportation",
        "Driver allowance",
        "Toll & parking charges",
        "Pickup & drop"
      ],
      exclusions: [
        "Train / Bus tickets",
        "Lunch & Dinner",
        "Boat Ride Charges",
        "Entry Fees",
        "Personal Expenses",
        "Anything not mentioned under inclusions"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Ooty local sightseeing",
          items: [
            "Arrival at Ooty",
            "Hotel Check-in & Fresh-up",
            "Government Rose Garden",
            "Government Botanical Garden",
            "Doddabetta Peak",
            "Tea Estate & Tea Factory",
            "Chocolate Factory",
            "Ooty Lake & Boat House",
            "Evening: free shopping/leisure",
            "Overnight: Ooty"
          ]
        },
        {
          day: "Day 2",
          title: "Coonoor sightseeing & departure",
          items: [
            "Breakfast & check-out",
            "Proceed to Coonoor",
            "Sims Park",
            "Lamb's Rock",
            "Dolphin's Nose",
            "Tea Gardens",
            "Tea Factory / Tea Shop",
            "After sightseeing, departure",
            "Drop at Railway Station / Bus Stand"
          ]
        }
      ]
    },

    {
      id: "ooty-tour-package-2n3d",
      slug: "ooty-tour-package-2n3d",
      name: "Ooty Tour Package",
      packageNumber: "PACKAGE 02",
      duration: "2 Nights / 3 Days",
      destination: "Ooty – Coonoor – Nilgiris",
      destinations: ["ooty", "coonoor", "nilgiris"],
      tourType: "Family / Friends / Group Tour",
      packageTypes: ["Family", "Group", "Office/Corporate", "College & School", "Customized"],
      specialNote: "Special Group Rates Available",
      price: null,
      priceLabel: "Starting From ₹____ / Person (Special Group Rates Available)",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      closingRouteLine: "Ooty – Queen of Hill Stations / Explore Nilgiris",
      travelStyle: ["family", "friends", "group", "corporate"],
      highlights: [
        "2 Nights accommodation",
        "Ooty local sightseeing",
        "Pykara sightseeing",
        "Coonoor sightseeing",
        "Comfortable transportation",
        "Experienced driver",
        "Family & Group packages"
      ],
      inclusions: [
        "2 Nights accommodation",
        "Ooty local sightseeing",
        "Pykara sightseeing",
        "Coonoor sightseeing",
        "Comfortable transportation",
        "Experienced driver"
      ],
      exclusions: [
        "Train / Bus tickets",
        "Lunch & Dinner",
        "Boat ride charges",
        "Entry fees",
        "Personal expenses",
        "Anything not mentioned"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Ooty local sightseeing",
          items: [
            "Arrival + hotel check-in",
            "Rose Garden",
            "Government Botanical Garden",
            "Doddabetta Peak",
            "Tea Factory & Chocolate Factory",
            "Tea Estate View Point",
            "Ooty Lake & Boat House",
            "Evening shopping/leisure",
            "Overnight Ooty"
          ]
        },
        {
          day: "Day 2",
          title: "Pykara & Nature Tour",
          items: [
            "Pine Forest",
            "Shooting Point",
            "Pykara Waterfalls",
            "Pykara Lake / Boat House",
            "Wenlock Downs",
            "Emerald / Avalanche View",
            "Return Ooty, leisure",
            "Overnight Ooty"
          ]
        },
        {
          day: "Day 3",
          title: "Coonoor sightseeing & departure",
          items: [
            "Sims Park",
            "Lamb's Rock",
            "Dolphin's Nose",
            "Tea Estate",
            "Tea Factory / Tea Shop",
            "Departure from Ooty"
          ]
        }
      ]
    },

    {
      id: "odisha-spiritual-tour-2d1n",
      slug: "odisha-spiritual-tour-2d1n",
      name: "Odisha Spiritual Tour",
      packageNumber: "PACKAGE 03",
      duration: "2 Days / 1 Night",
      destination: "Bhubaneswar – Puri – Konark",
      destinations: ["odisha", "puri", "bhubaneswar", "konark"],
      tourType: "Spiritual | Family | Group Tour",
      packageTypes: ["Family", "Group", "Customized"],
      price: null,
      priceLabel: "Price not provided",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80",
      closingRouteLine: "Puri • Konark • Bhubaneswar",
      travelStyle: ["spiritual", "family", "group"],
      highlights: [
        "Puri Jagannath Temple",
        "Konark Sun Temple",
        "Lingaraj Temple",
        "Mukteshwar Temple",
        "Rajarani Temple",
        "Puri Beach",
        "Chandrabhaga Beach",
        "Comfortable transportation",
        "Hotel accommodation",
        "Family & Group"
      ],
      inclusions: [
        "1 Night Hotel Accommodation",
        "Breakfast",
        "Local Sightseeing & Transfers",
        "Transportation throughout tour",
        "Tour Coordinator / Driver Assistance"
      ],
      exclusions: [
        "Train / Flight Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Entry Fees, if applicable",
        "Special Darshan Charges, if any",
        "Anything not mentioned"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Bhubaneswar → Puri",
          items: [
            "Arrival Bhubaneswar",
            "Lingaraj Temple",
            "Mukteshwar Temple",
            "Rajarani Temple",
            "Proceed to Puri",
            "Jagannath Temple",
            "Puri Beach",
            "Evening local market",
            "Overnight Puri"
          ]
        },
        {
          day: "Day 2",
          title: "Puri → Konark → Bhubaneswar",
          items: [
            "Morning Darshan at Jagannath Temple",
            "Chandrabhaga Beach",
            "Konark Sun Temple",
            "Puri Beach / Local Shopping",
            "Proceed to Bhubaneswar",
            "Flight/train departure from Bhubaneswar"
          ]
        }
      ]
    },

    {
      id: "andaman-tour-package-4n5d",
      slug: "andaman-tour-package-4n5d",
      name: "Andaman Tour Package",
      packageNumber: "PACKAGE 04",
      duration: "4 Nights / 5 Days",
      destination: "Port Blair – Havelock Island – Neil Island",
      destinations: ["andaman", "port-blair", "havelock-island", "neil-island"],
      tourType: "Family | Couple | Friends | Group Tour",
      packageTypes: ["Family", "Couple", "Friends", "Group", "Customized"],
      price: null,
      priceLabel: "Price not provided",
      importantNote: "Water sports are optional and must remain excluded from the base package unless confirmed.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      closingRouteLine: "Andaman Awaits You",
      travelStyle: ["family", "couple", "friends", "group"],
      highlights: [
        "4 nights accommodation",
        "Port Blair sightseeing",
        "Havelock visit",
        "Neil visit",
        "Ferry transfers",
        "Airport transfers",
        "Cellular Jail",
        "Radhanagar Beach",
        "Elephant Beach",
        "Natural Bridge",
        "Professional Tour Assistance"
      ],
      inclusions: [
        "Hotel Accommodation",
        "Breakfast",
        "Inter-Island Ferry Tickets",
        "Sightseeing & Transfers",
        "Airport Pickup & Drop",
        "Tour Assistance"
      ],
      exclusions: [
        "Flight Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Water Sports / Adventure Activities",
        "Anything not specifically mentioned"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival Port Blair",
          items: [
            "Veer Savarkar International Airport",
            "Cellular Jail",
            "Corbyn's Cove Beach",
            "Light & Sound Show at Cellular Jail",
            "Overnight Port Blair"
          ]
        },
        {
          day: "Day 2",
          title: "Port Blair → Havelock Island",
          items: [
            "Ferry to Swaraj Dweep (Havelock)",
            "Radhanagar Beach",
            "Sea/sunset",
            "Beach photography & leisure",
            "Overnight Havelock"
          ]
        },
        {
          day: "Day 3",
          title: "Havelock Island",
          items: [
            "Elephant Beach",
            "Optional water sports: Snorkelling, Scuba Diving, Sea Walk, Glass-Bottom Boat Ride (Excluded from base package)",
            "Overnight Havelock"
          ]
        },
        {
          day: "Day 4",
          title: "Havelock → Neil Island → Port Blair",
          items: [
            "Ferry to Shaheed Dweep (Neil)",
            "Natural Bridge",
            "Bharatpur Beach",
            "Laxmanpur Beach",
            "Sunset & photography",
            "Return to Port Blair by ferry",
            "Overnight Port Blair"
          ]
        },
        {
          day: "Day 5",
          title: "Port Blair departure",
          items: [
            "Breakfast",
            "Shopping, souvenir shopping, local market",
            "Airport transfer"
          ]
        }
      ]
    },

    {
      id: "north-india-pilgrimage-tour-4d3n",
      slug: "north-india-pilgrimage-tour-4d3n",
      name: "North India Pilgrimage Tour",
      packageNumber: "PACKAGE 05",
      duration: "4 Days / 3 Nights",
      destination: "Varanasi • Gaya • Ayodhya • Prayagraj",
      destinations: ["north-india", "varanasi", "gaya", "ayodhya", "prayagraj"],
      tourType: "Spiritual | Pilgrimage | Family | Group Tour",
      packageTypes: ["Family", "Group", "Spiritual", "Customized"],
      price: null,
      priceLabel: "Price not provided",
      importantNote: "The following are optional/extra-cost items and must NOT be included in the base package unless separately confirmed: Pind Daan / Pitru rituals, Ganga boat ride, special darshan, entry fees where applicable.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
      closingRouteLine: "Varanasi • Gaya • Ayodhya • Prayagraj",
      travelStyle: ["spiritual", "family", "group"],
      highlights: [
        "Kashi Vishwanath",
        "Vishnupad",
        "Mahabodhi",
        "Shri Ram Janmabhoomi",
        "Hanuman Garhi",
        "Saryu Ghat",
        "Triveni Sangam",
        "Ganga Aarti"
      ],
      inclusions: [
        "3 nights accommodation",
        "Daily breakfast",
        "All sightseeing & transfers",
        "Comfortable tourist vehicle",
        "Airport / railway station transfers",
        "Toll, parking & driver charges",
        "Tour coordinator assistance"
      ],
      exclusions: [
        "Train/flight tickets",
        "Lunch & dinner",
        "Personal expenses",
        "Special Darshan charges",
        "Boat ride charges",
        "Pind Daan / ritual expenses",
        "Entry fees where applicable",
        "Any service not mentioned"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Varanasi → Gaya",
          items: [
            "Arrival Varanasi by train/flight",
            "Proceed Gaya",
            "Vishnupad Temple",
            "Akshay Vat",
            "Pind Daan / Pitru Rituals — Optional",
            "Proceed Bodh Gaya",
            "Mahabodhi Temple",
            "Bodhi Tree",
            "Overnight Gaya / Bodh Gaya"
          ]
        },
        {
          day: "Day 2",
          title: "Gaya → Ayodhya",
          items: [
            "Breakfast/check-out",
            "Proceed Ayodhya",
            "Hotel check-in",
            "Shri Ram Janmabhoomi Temple",
            "Hanuman Garhi",
            "Kanak Bhawan",
            "Ram Ki Paidi",
            "Saryu Ghat",
            "Evening Saryu Aarti",
            "Overnight Ayodhya"
          ]
        },
        {
          day: "Day 3",
          title: "Ayodhya → Prayagraj → Varanasi",
          items: [
            "Early check-out",
            "Triveni Sangam",
            "Bade Hanuman Mandir",
            "Proceed Varanasi",
            "Evening Ganga Aarti at Dashashwamedh Ghat",
            "Overnight Varanasi"
          ]
        },
        {
          day: "Day 4",
          title: "Varanasi local & departure",
          items: [
            "Kashi Vishwanath Temple",
            "Kaal Bhairav Temple",
            "Sankat Mochan Hanuman Temple",
            "Assi Ghat",
            "Optional Ganga Boat Ride",
            "Banarasi Silk/local shopping",
            "Varanasi airport/railway station departure"
          ]
        }
      ]
    }
  ],

  travelStyles: [
    { id: "family", name: "Family Vacations", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80", desc: "Comfortable vehicles, scenic sightseeing, and curated family-friendly stays.", count: "5 Packages" },
    { id: "spiritual", name: "Spiritual & Pilgrimage", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=700&q=80", desc: "Sacred temple darshans, heritage aartis, and guided pilgrimage journeys.", count: "2 Packages" },
    { id: "group", name: "Friends & Group Tours", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80", desc: "Comfortable group transportation, nature trails, and customized group itineraries.", count: "5 Packages" },
    { id: "couple", name: "Couples & Leisure", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=700&q=80", desc: "Relaxing hill stations and serene island getaways for couples.", count: "2 Packages" }
  ],

  services: [
    {
      id: "hotel-stay-breakfast",
      icon: "🏨",
      title: "Hotel Accommodations & Daily Breakfast",
      desc: "Comfortable hotel and resort stays with daily breakfast included as specified across our 5 tour packages.",
      features: [
        "Verified stays in Ooty, Puri, Port Blair, Havelock, Neil, Varanasi, Gaya & Ayodhya",
        "Daily breakfast provided at hotels and resorts as per package inclusions",
        "Twin, double, and family room allocations based on group size",
        "Clean, comfortable properties conveniently located near scheduled attractions"
      ]
    },
    {
      id: "tourist-transport",
      icon: "🚗",
      title: "Dedicated Private Tourist Vehicles",
      desc: "Dedicated private tourist vehicles assigned for all scheduled itinerary transfers, pickups, and sightseeing.",
      features: [
        "Airport and railway station pickup and drop assistance",
        "Comfortable private vehicle for all transfers and sightseeing throughout the tour",
        "Complete inter-city route coverage (e.g. Bhubaneswar–Puri–Konark, Varanasi–Gaya–Ayodhya–Prayagraj)",
        "Experienced, courteous local drivers familiar with all tour routes"
      ]
    },
    {
      id: "tolls-driver-parking",
      icon: "⛽",
      title: "Driver Allowance, Tolls, Fuel & Parking",
      desc: "All transit and vehicle operating expenses are fully included in the package base with zero hidden fees.",
      features: [
        "All driver allowances and night halt charges included",
        "All toll taxes and interstate permit charges included",
        "Parking fees at all scheduled sightseeing destinations included",
        "Full vehicle fuel covered for the complete itinerary route"
      ]
    },
    {
      id: "ferry-catamaran-tickets",
      icon: "⛴️",
      title: "Inter-Island Luxury Catamaran Tickets (Andaman)",
      desc: "Confirmed private cruise tickets included for island transits in the Andaman Tour Package (4N/5D).",
      features: [
        "Port Blair to Swaraj Dweep (Havelock Island) luxury catamaran ticket",
        "Havelock Island to Shaheed Dweep (Neil Island) ferry transfer",
        "Neil Island to Port Blair return cruise ticket",
        "Luxury private catamarans (Makruzz, Nautika, Green Ocean as per availability)"
      ]
    },
    {
      id: "entry-permits-tickets",
      icon: "🎫",
      title: "Monument Entry Tickets & Forest Permits",
      desc: "Scheduled entry admissions and transfer permits included in package itineraries.",
      features: [
        "Cellular Jail entry ticket & poignant Light and Sound show (Andaman)",
        "Forest department entry permits and boat transfers to Elephant Beach (Andaman)",
        "Coordinated access to Ooty Lake boat house, Pykara, and botanical gardens",
        "Smooth temple corridor visits across Puri, Kashi Vishwanath, and Ayodhya"
      ]
    },
    {
      id: "itinerary-coordination",
      icon: "🧭",
      title: "Complete Itinerary Sightseeing Execution",
      desc: "Full day-by-day sightseeing coverage according to the published itinerary of each tour package.",
      features: [
        "Step-by-step sightseeing execution matching your chosen package",
        "Ooty & Coonoor tea estates, viewpoints, and Nilgiri hill routes",
        "Bhubaneswar, Konark Sun Temple, and Puri Jagannath heritage circuit",
        "Kashi Ganga Ghats, Gaya Vishnupad, Bodh Gaya, Ayodhya & Prayagraj Sangam"
      ]
    }
  ],

  reviews: [
    {
      name: "Rajesh & Priya Sharma",
      location: "Bangalore",
      trip: "Ooty Tour Package",
      rating: 5,
      date: "February 2026",
      review: "Thirumala Travel Agency organized our Ooty trip smoothly. The vehicle was clean and on time, and our visits to Doddabetta, Botanical Garden, and Coonoor were handled with great care. Very dependable service.",
      travelerType: "Verified Traveller"
    },
    {
      name: "Dr. Arvind Kulkarni",
      location: "Pune",
      trip: "North India Pilgrimage Tour",
      rating: 5,
      date: "January 2026",
      review: "We traveled with our family for the Kashi, Gaya, Ayodhya, and Prayagraj yatra. The driver was exceptionally polite and knowledgeable about temple corridors and aarti timings. Highly recommended.",
      travelerType: "Verified Traveller"
    },
    {
      name: "Vikram Malhotra",
      location: "Delhi",
      trip: "Andaman Tour Package",
      rating: 5,
      date: "December 2025",
      review: "Our 4N/5D Andaman trip was seamless. Ferry tickets to Havelock and Neil were booked in advance, hotel check-ins were swift, and our local coordinator assisted us at every step. Authentic and reliable travel agency.",
      travelerType: "Verified Traveller"
    },
    {
      name: "Meenakshi Sundaram",
      location: "Chennai",
      trip: "Odisha Spiritual Tour",
      rating: 5,
      date: "November 2025",
      review: "Our 2-day visit covering Jagannath Puri, Konark Sun Temple, and Bhubaneswar was planned perfectly. Clear communication, comfortable car, and great support throughout.",
      travelerType: "Verified Traveller"
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.TRAVEL_DATA = TRAVEL_DATA;
}
