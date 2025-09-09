export const VALUE_PILLARS = [
  { title: "Reliable caregivers", desc: "Vetted, trained, supervised." },
  { title: "Flexible plans", desc: "From a few hours to 24/7." },
  { title: "Transparent pricing", desc: "Clear rates, no surprises." },
];

export const SERVICES = [
  {
    slug: "companionship",
    title: "Companionship & Safety Checks",
    desc: "Conversation, light activities, engagement, check-ins.",
    image: "/robin/services-companionship.jpg",
  },
  {
    slug: "personal-care",
    title: "Personal Care",
    desc: "Bathing, dressing, grooming, toileting, mobility assistance.",
    image: "/robin/services-companionship.jpg", // replace with /robin/services-personal-care.jpg when available
  },
  {
    slug: "medication-reminders",
    title: "Medication Reminders",
    desc: "Non-medical reminders, schedules, pickup support.",
    image: "/robin/services-companionship.jpg", // placeholder until a meds image is added
  },
  {
    slug: "meals-housekeeping",
    title: "Meals & Housekeeping",
    desc: "Meal prep, dishes, laundry, tidy living spaces.",
    image: "/robin/services-meals.jpg",
  },
  {
    slug: "transport",
    title: "Errands & Transportation",
    desc: "Groceries, appointments, social visits, pharmacy.",
    image: "/robin/services-transport.jpg",
  },
  {
    slug: "respite",
    title: "Respite Care",
    desc: "Short-term relief for family caregivers.",
    image: "/robin/services-companionship.jpg",
  },
];

export const PLANS = [
  {
    name: "Starter (Light Support)",
    from: "From $30/hr",
    popular: false,
    bullet: [
      "4–8 hrs/week",
      "Companionship, reminders, light housekeeping",
      "Short outings & wellness check-ins",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Standard (Daily Help)",
    from: "From $50/hr",
    popular: true,
    bullet: [
      "12–20 hrs/week",
      "Personal care blocks, meals, transportation",
      "Consistent daily support",
    ],
    cta: "Choose Standard",
  },
  {
    name: "Plus (Comprehensive)",
    from: "From $100/hr",
    popular: false,
    bullet: [
      "40+ hrs/week",
      "Extended personal care, meal planning, routines",
      "Higher needs support",
    ],
    cta: "Talk about Plus",
  },
  {
    name: "Live-In / 24-Hour Care",
    from: "Custom quote",
    popular: false,
    bullet: [
      "Around-the-clock support",
      "Rotating caregivers (day & night)",
      "Care plan tailored to household",
    ],
    cta: "Discuss Live-In Care",
  },
];

export const FAQ_PREVIEW = [
  { q: "Can we start small and adjust later?", a: "Yes — plans are flexible." },
  { q: "Will you replace a caregiver if it’s not a fit?", a: "Absolutely — we rematch quickly." },
  { q: "How do payments work?", a: "Weekly / bi-weekly invoicing; card or bank transfer." },
];
