import Lottie from "lottie-react";
import faqAnim from "./faq-anim.json";
const Faq = () => {
  const faqs = [
    {
      question: "What is JourneyHub?",
      answer:
        "JourneyHub is a platform designed to help users plan, organize, and track their journeys and adventures efficiently.",
    },
    {
      question: "How can I use JourneyHub?",
      answer:
        "To use JourneyHub, simply sign up for an account on our website. Once registered, you can start planning your journeys, creating itineraries, and tracking your progress.",
    },
    {
      question: "Is JourneyHub free to use?",
      answer:
        "Yes, JourneyHub offers a free basic plan with limited features. We also offer premium plans with additional features and benefits for users who require more advanced functionality.",
    },
    {
      question: "What features does JourneyHub offer?",
      answer:
        "JourneyHub offers a range of features including itinerary planning, route optimization, budget tracking, collaboration tools, and more. Visit our Features page for a detailed list.",
    },
    {
      question: "Is my data safe on JourneyHub?",
      answer:
        "Yes, we take data security and privacy seriously. JourneyHub employs industry-standard security measures to protect your data. You can review our Privacy Policy for more information.",
    },
    {
      question: "Can I access JourneyHub on my mobile device?",
      answer:
        "Yes, JourneyHub is designed to be accessible on both desktop and mobile devices. You can download our mobile app from the App Store or Google Play Store.",
    },
    {
      question: "How can I contact JourneyHub support?",
      answer:
        "If you have any questions or need assistance, you can reach out to our support team through the Contact Us page on our website. We'll be happy to help!",
    },
  ];

  return (
    <div className="flex flex-col px-4 lg:px-0 md:flex-row gap-10 mb-10">
      <Lottie animationData={faqAnim} className="flex-1" />
      <div className="join join-vertical w-full flex-1">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="collapse collapse-arrow join-item border border-base-300 dark:bg-gray-600 dark:text-white dark:border-gray-400"
          >
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content text-gray-700 dark:text-gray-300">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
