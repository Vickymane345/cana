import React from 'react'

function AboutCard()
{
      const values = [
        {
          title: "Innovative Solutions",
          description:
            "We stand out by offering unique, high-return investment plans designed for both short-term and long-term growth.",
          icon: "💡",
        },
        {
          title: "Commitment to Security",
          description:
            "We go above and beyond to protect your funds through advanced encryption and security practices.",
          icon: "🔒",
        },
        {
          title: "Integrity",
          description:
            "We believe in transparency and honesty with our clients. Trust is the foundation of our business.",
          icon: "🤝",
        },
        {
          title: "Innovation",
          description:
            "We continually develop new tools and strategies to help our clients stay ahead of the curve.",
          icon: "⚙️",
        },
        {
          title: "Excellence",
          description:
            "We’re committed to delivering exceptional service and exceeding expectations every time.",
          icon: "🏆",
        },
        {
          title: "Customer Support",
          description:
            "We’re always here to help with setting up accounts, managing investments, and resolving inquiries.",
          icon: "🙋‍♂️",
        },
      ];
  return (
    <div>
      <section className="px-6 md:px-20 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-4">Our values</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We are a community of like-minded individuals striving for financial
          freedom through the power of cryptocurrency.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div key={i} className="bg-[#111526] p-8 rounded-3xl shadow-lg">
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutCard
