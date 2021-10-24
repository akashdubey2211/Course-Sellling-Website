import A from '../images/Js.jpeg';
import B from '../images/Node.png';
import C from '../images/React.jpg';
import D from '../images/aws-logo.png';
export const courses = [
  {
    title: "Complete JavaScript BootCamp",
    img:A,
    author: "Doug Funny",
    price: 1900,
    saleOptIn: true,
    position: 0,
    id: 0,
    length: "28 hours",
    accessType: "lifetime access",
    certification: "yes",
    tagline:
      "In this two week course, you will focus on the bigger picture while you implement the most powerful automated sales system ever created.",
    adText:
      "Did you know, 25% of business owners work over 60 hours per week? Learn to work smarter, by leveraging technology.",
    features: [
      "Automation training from real world computer scientists",
      "Learn google voice commands",
      "Email reminders that work for you and your clients",
      "Find digital assistance to do the repetitive work",
      "Learn how to hire virtual assistants to handle the things that come in last minute",
      "Know what you need to get done every day to write your own success story",
      "Take the stress out of developing your business",
    ],
  },
  {
    title: "Complete Backend With Node.js",
    img:B,
    author: "Corey Matthews",
    price: 1300,
    sale: 90,
    position: 1,
    id: 1,
  },
  {
    title: "Complete React.js Course",
  img:C,
    author: "Aubrey Plaza",
    price: 1900,
    saleOptIn: true,
    position: 2,
    id: 2,
  },
  {
    title: "AWS course from Scratch",
    img:D,
    author: "Adam Demamp",
    saleOptIn: true,
    price: 1600,
    position: 3,
    id: 3,
  },
];

export const sale = 0.1;
