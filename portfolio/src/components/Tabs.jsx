import React from 'react';
import pc from '../assets/pc.svg';
import mobile from '../assets/mobile.svg';

const Tabs = ({ setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-10">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2 cursor-pointer">
          <a
            onClick={() => handleTabClick('web')}
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            <img src={pc} alt="pc icon" className="w-[30px]" />
            Web Projects
          </a>
        </li>
        <li className="me-2 cursor-pointer">
          <a
            
            onClick={() => handleTabClick('mobile')}
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            aria-current="page"
          >
            <img src={mobile} alt="pc icon" className="w-[30px]" />
            Mobile Projects
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
