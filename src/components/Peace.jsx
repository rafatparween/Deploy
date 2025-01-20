import HelpPage from '../sections/HelpPage';

const Peace = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#191970] via-[#0099CC] to-[#003366] h-[700px] flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto w-90 p-8 bg-white shadow-lg  overflow-hidden mt-20">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <h1 className="text-[30px] font-bold text-[#0C71C3] mb-4 font-sans">
              Your peace of mind is our mission{' '}
              </h1>
              <p className="text-gray-700 text-lg mb-4 font-sans ">
              We're committed to your complete satisfaction with our service. If you're not 100% happy, we'll do whatever it takes to make it right. </p>
              <p className="text-gray-700 text-lg mb-4 font-sans">
              At Micro Hub Care, We believe in building long-term relationships with our clients by offering dependable solutions and ensuring that your technology works seamlessly. Our team of experts is dedicated to your success, working tirelessly to resolve any tech issues you may encounter.             </p>
            </div>
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <img
                src="https://www.coding-girls.com/sites/default/files/styles/cms_bootstrap_12_12/public/blog/images/beautiful-blur-casual-935756.jpg?itok=-DKboL5W"
                alt="Refurbished Printer"
                className="rounded-lg shadow-xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Peace;
