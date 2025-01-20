import React from 'react';

const PeaceOfMindGuarantee = () => {
  const guarantees = [
    {
      title: 'Thorough Testing',
      description: 'We carefully check every product to ensure it works perfectly. You can be confident that everything has been tested to meet our high quality standards.',
      backgroundColor: 'bg-blue-100',
      textColor: 'text-blue-800',
    },
    {
      title: 'Strong Warranty',
      description: 'We offer a solid warranty on all our products. If anything goes wrong, our support team is here to help and fix the issue quickly.',
      backgroundColor: 'bg-green-100',
      textColor: 'text-green-800',
    },
    {
      title: '100% Satisfaction',
      description: 'We want you to be completely happy with your purchase. If you’re not satisfied, we’ll make it right with easy returns or exchanges.',
      backgroundColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
    },
  ];

  return (
    <main className="bg-gray-50 py-12">
      <div className="bg-white p-8 rounded-lg w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row items-center shadow-lg border-t-4 border-blue-500">
        <section className="text-left text-gray-800 w-full md:w-1/2 md:pr-8">
          <h2 className="text-4xl font-extrabold mb-6 text-blue-700 border-b-4 border-blue-500 pb-3">
            Peace of Mind Guarantee
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
          We test each product carefully to make sure it works perfectly and meets our high standards. You can trust that every item has been checked for top performance and quality.
          </p>
          <div className="space-y-6">
            {guarantees.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${item.backgroundColor}`}
              >
                <h3 className={`text-2xl font-semibold ${item.textColor}`}>
                  {item.title}
                </h3>
                <p className={`text-md mt-4 ${item.textColor}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <img
          src="https://mysleepyhead.com/media/catalog/product/4/t/4th_aug_2nd_half1045_blue.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width="
          alt="Peace of Mind"
          className="rounded-lg shadow-lg mt-6 md:mt-0 md:ml-8 w-full md:w-1/2 h-[70vh] object-cover"
        />
      </div>
    </main>
  );
};

export default PeaceOfMindGuarantee;
