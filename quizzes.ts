export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  icon: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    id: "online-shopping",
    title: "Online Shopping",
    icon: "ShoppingCart",
    questions: [
      { id: "q1", question: "What should you check before buying from an online store?", options: ["The color of the website", "SSL certificate and reviews", "How many images they have", "The font they use"], correctAnswer: 1 },
      { id: "q2", question: "Which payment method is safest for online shopping?", options: ["Wire transfer to seller", "Credit card or secure payment platform", "Sending cash by mail", "Cryptocurrency only"], correctAnswer: 1 },
      { id: "q3", question: "What is phishing?", options: ["A type of online game", "Fraudulent attempt to obtain sensitive data", "A shopping discount", "A delivery method"], correctAnswer: 1 },
      { id: "q4", question: "What does HTTPS mean in a website URL?", options: ["The site is fast", "The connection is encrypted", "The site is free", "The site is popular"], correctAnswer: 1 },
      { id: "q5", question: "What should you do if a deal seems too good to be true?", options: ["Buy immediately", "Share with friends", "Research the seller first", "Ignore it completely"], correctAnswer: 2 },
      { id: "q6", question: "Where should you avoid entering payment info?", options: ["Trusted e-commerce sites", "Public WiFi networks", "Your home computer", "Mobile banking apps"], correctAnswer: 1 },
      { id: "q7", question: "What is a secure password?", options: ["Your name", "123456", "Mix of letters, numbers, symbols", "Your birthday"], correctAnswer: 2 },
      { id: "q8", question: "What should you keep after an online purchase?", options: ["Nothing", "Order confirmation and receipt", "The box only", "The seller's photo"], correctAnswer: 1 },
      { id: "q9", question: "How can you verify a seller's reputation?", options: ["By their profile picture", "By reading customer reviews", "By their username", "By the price only"], correctAnswer: 1 },
      { id: "q10", question: "What is two-factor authentication?", options: ["Using two passwords", "An extra verification step beyond password", "Having two accounts", "Logging in twice"], correctAnswer: 1 },
    ],
  },
  {
    id: "mobile-payments",
    title: "Mobile Payments",
    icon: "Smartphone",
    questions: [
      { id: "q1", question: "What is mobile money?", options: ["Physical money on your phone", "Digital financial service via mobile", "A mobile game", "A phone accessory"], correctAnswer: 1 },
      { id: "q2", question: "Why should you never share your PIN?", options: ["It's not important", "Others might access your money", "It saves battery", "It's a tradition"], correctAnswer: 1 },
      { id: "q3", question: "What should you do after a mobile money transaction?", options: ["Delete the message", "Verify the confirmation SMS", "Turn off your phone", "Call the recipient"], correctAnswer: 1 },
      { id: "q4", question: "How can you protect your mobile wallet?", options: ["Share PIN with family", "Use a strong PIN and lock screen", "Write PIN on your phone", "Use 0000 as PIN"], correctAnswer: 1 },
      { id: "q5", question: "What is a common mobile money scam?", options: ["Getting a receipt", "Fake 'you've won' messages", "Checking your balance", "Paying a bill"], correctAnswer: 1 },
      { id: "q6", question: "What should you do if you send money to the wrong number?", options: ["Ignore it", "Contact your provider immediately", "Send more money", "Wait a week"], correctAnswer: 1 },
      { id: "q7", question: "How often should you check your mobile money statement?", options: ["Never", "Regularly to spot unauthorized transactions", "Once a year", "Only when problems arise"], correctAnswer: 1 },
      { id: "q8", question: "What is a mobile money agent?", options: ["A spy", "An authorized person who facilitates transactions", "A phone technician", "A bank manager"], correctAnswer: 1 },
      { id: "q9", question: "Can you pay bills using mobile money?", options: ["No, never", "Yes, many services accept mobile payments", "Only in some countries", "Only for phone bills"], correctAnswer: 1 },
      { id: "q10", question: "What happens if your phone is stolen with mobile money?", options: ["Nothing", "Contact provider to block the account", "Buy a new phone", "The money is gone forever"], correctAnswer: 1 },
    ],
  },
  {
    id: "e-government",
    title: "E-Government",
    icon: "Landmark",
    questions: [
      { id: "q1", question: "What are e-government services?", options: ["Online games", "Government services available online", "Social media", "Email services"], correctAnswer: 1 },
      { id: "q2", question: "What is a digital ID used for?", options: ["Playing games", "Verifying identity for online services", "Making phone calls", "Sending texts"], correctAnswer: 1 },
      { id: "q3", question: "How can you tell if a government website is official?", options: ["It has nice colors", "It uses official domain extensions", "It has many ads", "It loads slowly"], correctAnswer: 1 },
      { id: "q4", question: "What can you do on e-government portals?", options: ["Play games", "Apply for documents and pay taxes", "Order food", "Stream movies"], correctAnswer: 1 },
      { id: "q5", question: "Why is e-government important?", options: ["It replaces all offices", "It makes services more accessible", "It's just for fun", "It's only for tech experts"], correctAnswer: 1 },
      { id: "q6", question: "What should you never share on government sites?", options: ["Your name", "Your password with others", "Your application", "Your address"], correctAnswer: 1 },
      { id: "q7", question: "What is an e-signature?", options: ["A handwritten scan", "A digital way to sign documents", "A photo of you", "A typed name"], correctAnswer: 1 },
      { id: "q8", question: "How do you create a government portal account?", options: ["No registration needed", "Register with valid ID and personal details", "Use any fake info", "Ask a friend"], correctAnswer: 1 },
      { id: "q9", question: "What if a government site asks for payment via gift card?", options: ["Pay immediately", "It's a scam — official sites use formal methods", "Buy the gift card", "Share the code"], correctAnswer: 1 },
      { id: "q10", question: "Can you track applications online?", options: ["Never", "Yes, most e-gov portals offer tracking", "Only by phone", "Only in person"], correctAnswer: 1 },
    ],
  },
  {
    id: "digital-safety",
    title: "Digital Safety",
    icon: "Shield",
    questions: [
      { id: "q1", question: "What makes a strong password?", options: ["Short and simple", "Long with mixed characters", "Your pet's name", "Same as username"], correctAnswer: 1 },
      { id: "q2", question: "What is malware?", options: ["A type of software update", "Malicious software that harms devices", "A mobile app", "An email provider"], correctAnswer: 1 },
      { id: "q3", question: "How can you avoid phishing?", options: ["Click all links", "Verify sender before clicking links", "Reply to all emails", "Open all attachments"], correctAnswer: 1 },
      { id: "q4", question: "Why should you update your software?", options: ["For new colors", "To fix security vulnerabilities", "It's not necessary", "To slow down your device"], correctAnswer: 1 },
      { id: "q5", question: "What is public WiFi risk?", options: ["It's too fast", "Others may intercept your data", "It costs money", "It improves battery"], correctAnswer: 1 },
      { id: "q6", question: "What is social engineering?", options: ["Building social media", "Manipulating people to reveal information", "Engineering social apps", "A career path"], correctAnswer: 1 },
      { id: "q7", question: "Should you use the same password everywhere?", options: ["Yes, easier to remember", "No, use unique passwords per account", "Doesn't matter", "Only for email"], correctAnswer: 1 },
      { id: "q8", question: "What is a VPN?", options: ["A video player", "A tool that encrypts your internet connection", "A social network", "A virus"], correctAnswer: 1 },
      { id: "q9", question: "How do you recognize a secure website?", options: ["It has many images", "It shows a padlock and HTTPS", "It loads slowly", "It has pop-ups"], correctAnswer: 1 },
      { id: "q10", question: "What should you do with suspicious emails?", options: ["Forward to friends", "Delete or report them", "Click the links", "Reply with your info"], correctAnswer: 1 },
    ],
  },
];
