import React, { useState } from 'react';

const PrinterFormPage = () => {
  const helpArr = ['Select', 'WiFi', 'Hardwired', 'Not sure'];
  const [formData, setFormData] = useState({
    issues: [],
    makeModel: '',
    connection: '',
    description: '',
  });

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      if (checked) {
        return { ...prevState, issues: [...prevState.issues, value] };
      } else {
        return {
          ...prevState,
          issues: prevState.issues.filter((issue) => issue !== value),
        };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { issues, makeModel, connection, description } = formData;
    if (
      issues.length === 0 ||
      makeModel.trim() === '' ||
      connection === 'Select' ||
      description.trim() === ''
    ) {
      alert('All fields must be filled.');
    } else {
      alert('Your response has been submitted.');
      // Reset form
      setFormData({
        issues: [],
        makeModel: '',
        connection: 'Select',
        description: '',
      });
    }
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen py-8 mt-10">
      <div className="container mx-auto p-2 text-2xl font-semibold text-[#0f766e] shadow-lg">
        <h3>Printer Setup or Support</h3>
      </div>

      <section className="flex flex-col justify-center items-center mt-10 ">
        <p className="bg-gray-200 py-3 px-8 shadow-inner mb-3 text-gray-700">
          <span className="text-red-500 font-semibold">NOTE :</span> This
          service does not include the repair of physically damaged equipment.
        </p>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-4">
            <label className="block text-[#0f766e] text-sm font-bold mb-2">
              What's the issue with your printer?
            </label>
            <p>
              <input
                type="checkbox"
                className="mr-3"
                value="Poor print quality"
                checked={formData.issues.includes('Poor print quality')}
                onChange={handleCheckboxChange}
              />
              Poor print quality
            </p>
            <p>
              <input
                type="checkbox"
                className="mr-3"
                value="Cannot connect to one or more devices"
                checked={formData.issues.includes(
                  'Cannot connect to one or more devices',
                )}
                onChange={handleCheckboxChange}
              />
              Cannot connect to one or more devices
            </p>
            <p>
              <input
                type="checkbox"
                className="mr-3"
                value="Will not connect to the network"
                checked={formData.issues.includes(
                  'Will not connect to the network',
                )}
                onChange={handleCheckboxChange}
              />
              Will not connect to the network
            </p>
            <p>
              <input
                type="checkbox"
                className="mr-3"
                value="Other"
                checked={formData.issues.includes('Other')}
                onChange={handleCheckboxChange}
              />
              Other
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-[#0f766e] text-sm font-bold mb-2">
              What's the make/model of your printer?
            </label>
            <input
              type="text"
              name="makeModel"
              value={formData.makeModel}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#0f766e] text-sm font-bold mb-2">
              How does the printer connect?
            </label>
            <select
              name="connection"
              value={formData.connection}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {helpArr.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-[#0f766e] text-sm font-bold mb-2">
              Please describe what types of issues you're experiencing.
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            ></textarea>
            <p className="text-xs text-gray-600 mt-1">
              Any additional services mentioned here will NOT be performed if
              the services are not selected above.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-[#0f766e] hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default PrinterFormPage;
