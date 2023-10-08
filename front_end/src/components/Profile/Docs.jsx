import React, { useState } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { HiOutlineDocumentPlus } from 'react-icons/hi2'; // Import the FiFile icon
import { MdDownloading } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'

const Doc = [
  { name: 'Blod test', size: 9 },
  { name: 'Diabetic test', size: 22 },
  { name: 'X-ray', size: 17 },
  { name: 'MRI', size: 44 },
//   { name: 'CT Scan', size: 29 },
//   { name: 'Blod test', size: 9 },
//   { name: 'Diabetic test', size: 22 },
//   { name: 'X-ray', size: 17 },
//   { name: 'MRI', size: 44 },
//   { name: 'CT Scan', size: 29 },
];

const Docs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-white flex flex-col w-[320px] h-[350px] px-5 py-5 gap-8">
      <div className="flex justify-between">
        <div className="font-bold text-xl">Files/Documnets</div>
        <div className="flex items-end text-[rgb(37,94,214)] font-medium">
                  <HiOutlineDocumentPlus size={25} />
          <div> Add Files</div>
        </div>
      </div>
      <div className="overflow-y-auto">
        {Doc.map((doc, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-between px-3 py-2 border-inherit mb-2 border-2 rounded-[10px] shadow-lg`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
                  <div className="flex gap-2 items-center">
                      <div><IoDocumentTextOutline size={25} /></div>
                      <div className="max-w-[160px] overflow-x-auto">{doc.name}</div>
                  </div>
                  <div >
                      <div className={` ${hoveredIndex === index ? 'hidden' : ''}`}>
                          {doc.size}Kb
                      </div>
                      <div className={`${hoveredIndex === index ? '' : 'hidden'} flex gap-2`}>
                          <div><MdDownloading  size={20}/></div>
                          <div><RiDeleteBinLine size={20} /></div>
                      </div>
                  </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Docs;