import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on any internet-connected device that offers the Netflix app.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Email submitted: ${email}`);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Plus size={24} strokeWidth={2} />
              )}
            </button>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Email section */}
      <div className="faq-email">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <button type="submit">Get Started &gt;</button>
        </form>
      </div>
    </section>
  );
};

export default FAQ;



