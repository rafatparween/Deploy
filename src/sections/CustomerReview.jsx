import React from 'react';

const CustomerReview = () => {
  const reviews = [
    {
      name: 'Michael Johnson',
      date: 'June 10, 2024',
      content:
        'I recently purchased a refurbished laser printer from Hewlett Hub solutions and I couldn’t be happier. The printer works flawlessly and the print quality is just like new. The customer service was also very helpful in answering my queries. Highly recommend!',
    },
    {
      name: 'Lisa Brown',
      date: 'May 28, 2024',
      content:
        'Hewlett Hub solutions LLC has exceeded my expectations. The refurbished inkjet printer I bought was in excellent condition and the price was unbeatable. Their team provided great support throughout the purchase process.',
    },
    {
      name: 'David Wilson',
      date: 'April 15, 2024',
      content:
        'The multifunction printer I got from Hewlett Hub solutions LLC is a great deal. It looks and functions like new. I’m impressed with their quality control and attention to detail. Would definitely buy from them again.',
    },
  ];

  return (
    <section className="bg-teal-50 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0f766e] text-center mb-8 font-sans">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">"{review.content}"</p>
              <div className="text-right">
                <p className="text-[#0f766e] font-semibold font-sans">{review.name}</p>
                <p className="text-gray-500 text-sm font-sans">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
