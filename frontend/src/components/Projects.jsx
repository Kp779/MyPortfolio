import React, { useState } from 'react';
import projectData from '../data/projects.json';

// FilterBar component to handle filter button clicks and styling based on active filter
const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-5 mx-6 my-6">
      <button
        onClick={() => setFilter('all')}
        className={`px-5 py-2 rounded-md ${filter === 'all' ? 'bg-[#faea5a] text-black' : 'bg-[#383838] text-white'} hover:bg-[#faea5a] hover:text-black`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('frontend')}
        className={`py-2 px-5 rounded-md ${filter === 'frontend' ? 'bg-[#faea5a] text-black' : 'bg-[#383838] text-white'} hover:bg-[#faea5a] hover:text-black`}
      >
        Frontend
      </button>
      <button
        onClick={() => setFilter('fullstack')}
        className={`py-2 px-5 rounded-md ${filter === 'fullstack' ? 'bg-[#faea5a] text-black' : 'bg-[#383838] text-white'} hover:bg-[#faea5a] hover:text-black`}
      >
        Full Stack
      </button>
    </div>
  );
};

// Card component to display the project title
const Card = ({ title }) => {
  return (
    <div className="p-4 bg-gray-200 m-2 border rounded">
      <h3>{title}</h3>
    </div>
    
  );
};

// Projects component to manage the filter state and render the filtered projects
const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredData = projectData?.filter((item) =>
    filter === 'all' ? true : item.category === filter
  );

  return (
    <div className="font-montserrat">
      <p className="text-white px-6 pt-4 font-semibold text-3xl">Portfolio</p>
      <p className="bg-gradient-to-r from-white via-[#faea5a] to-[#242321] w-16 h-[0.3rem] mx-6 my-3 rounded-lg"></p>
      <div>
        {/* Pass filter state to FilterBar to conditionally render the active filter */}
        <FilterBar filter={filter} setFilter={setFilter} />
        {/* <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((item) => (
            <Card key={item.id} title={item.projectName} />
          ))}
        </div> */}
        <p className='mx-6 text-lg text-[#b1b1b1]'>Projects will be uploaded shortly . . .</p>
      </div>
    </div>
  );
};

export default Projects;
