export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  course: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "GolfBack has completely changed the way we approach revenue management. Our direct bookings are up significantly, and the automated marketing has saved us countless hours every week.",
    name: "Bo Lehew",
    title: "General Manager",
    course: "Painted Hills Golf Club",
  },
  {
    quote:
      "The dynamic pricing tools alone paid for the entire platform within the first month. We're finally in control of our own tee sheet.",
    name: "Mike Richardson",
    title: "Director of Golf",
    course: "Missouri Bluffs Golf Club",
  },
  {
    quote:
      "Switching from our third-party marketplace to GolfBack was the best business decision we made. We own our customer data and our revenue now.",
    name: "Sarah Chen",
    title: "Owner",
    course: "Windsor Parke Golf Club",
  },
];
