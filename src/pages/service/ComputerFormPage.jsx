import React, { useState } from 'react';

const ComputerFormPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    model: '',
    help: '',
    additionalIssues: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { company, model, help, additionalIssues } = formData;
    if (!company || !model || !help || !additionalIssues) {
      alert('All fields must be filled.');
    } else {
      alert('Your response has been submitted.');
      // Reset form
      setFormData({
        company: '',
        model: '',
        help: '',
        additionalIssues: '',
      });
    }
  };

  return (
    <div className="bg-blue-500 min-h-screen py-8 mt-10">
      <div className="container mx-auto p-2 text-2xl font-semibold text-[#0C71C3] shadow-lg">
        <h3>Computer Setup or Support</h3>
      </div>

      <section className="flex justify-center items-center mt-10">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[50%]"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-4">
            <label className="block text-[#0C71C3] text-sm font-bold mb-2">
              What kind of computer do you have?
            </label>
            <select
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {computerCompanies.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-[#0C71C3] text-sm font-bold mb-2">
              What is the model?
            </label>
            <select
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0C71C3] leading-tight focus:outline-none focus:shadow-outline"
            >
              {computerModel.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-[#0C71C3] text-sm font-bold mb-2">
              How can we assist you with your computer?
            </label>
            <select
              name="help"
              value={formData.help}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0C71C3] leading-tight focus:outline-none focus:shadow-outline"
            >
              {helpArr.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-[#0C71C3] text-sm font-bold mb-2">
              Any additional issues or requests?
            </label>
            <textarea
              name="additionalIssues"
              value={formData.additionalIssues}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0C71C3] leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            ></textarea>
            <p className="text-xs text-[#0C71C3] mt-1">
              Any additional services mentioned here will NOT be performed if
              the services are not selected above.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Proceed
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ComputerFormPage;

const computerCompanies = [
  'Select',
  'Apple',
  'Dell',
  'HP',
  'Lenovo',
  'Asus',
  'Acer',
  'Toshiba',
  'MSI',
  'Alienware',
  'Google',
  'Huawei',
];

const computerModel = ['Select', 'Laptop', 'Desktop', 'Others'];

const helpArr = [
  'Select',
  'Setup a new computer',
  'Troubleshoot an existing computer',
  'Install software or hardware',
];
