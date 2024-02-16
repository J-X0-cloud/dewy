import type { FaqItem } from "@/types/content";

const medicalAdvice: FaqItem = {
  question: "Is Dewy medical advice?",
  answer:
    "No. Dewy is a routine and journaling tool. It doesn't diagnose, treat or prescribe anything. If something about your skin worries you, please talk to a dermatologist or another licensed professional.",
};

export const homeFaq: FaqItem[] = [
  {
    question: "What does Dewy actually do?",
    answer:
      "Dewy is a skincare routine app. You check in on how your skin feels, and Dewy's assistant builds and adjusts your AM and PM routine around the products you already own, keeps your shelf organized and shows how your check-ins change over weeks.",
  },
  {
    question: "Do I have to take selfies?",
    answer:
      "No. Check-ins are a quick, tap-based log of how each zone of your skin feels, plus optional notes and tags. There's no camera step, and nothing about your face is ever uploaded.",
  },
  medicalAdvice,
  {
    question: "Does Dewy sell products or take commissions?",
    answer:
      "No. Dewy works with whatever is already on your bathroom shelf. There are no sponsored placements, and the assistant never pushes you toward a brand.",
  },
  {
    question: "Which phones does it run on?",
    answer:
      "Dewy runs on iPhone (iOS 17 and later) and Android (10 and later). Your routine, shelf and check-ins sync between devices when you sign in.",
  },
];

export const pricingFaq: FaqItem[] = [
  {
    question: "Is there a free trial of Plus?",
    answer:
      "Yes. Plus comes with a 7-day free trial on both iPhone and Android, and you can cancel from your phone's subscription settings anytime during it.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "You keep everything. Your check-ins, shelf and routines stay in the free plan; features like monthly recaps simply pause until you come back.",
  },
  {
    question: "Can I share Plus with a partner?",
    answer:
      "Plus Duo covers two people for $59.99 a year. Each person gets their own private shelf, routines and check-ins.",
  },
  {
    question: "Do you offer student pricing?",
    answer:
      "Yes. Students get 40% off the annual plan. Write to hello@dewy.com from your school email address and we'll send a code.",
  },
  {
    question: "Is Dewy medical advice?",
    answer:
      "No. Dewy is a routine and journaling tool. It doesn't diagnose, treat or prescribe anything. For any skin concern, please see a licensed professional.",
  },
];
