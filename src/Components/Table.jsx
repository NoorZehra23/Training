import React from "react";

import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Table = ({ rows, deleteRow}) => {
  return (
    <div className="table-wrapper">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employment Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
 
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, index) => {

            return (
              <tr key={index}>
                <td className="px-6 py-3">{row.name}</td>
                <td className="px-6 py-3">{row.email}</td>
                <td className="px-6 py-3"> {row.age}</td>
                <td className="px-6 py-3"> {row.gender}</td>
                <td className="px-6 py-3"> {row.employment}</td>
                <td className="px-6 py-3">
                <div className="flex space-x-4">
                  <button 
                  onClick={() => deleteRow(index)}
                          className="bg-blue-600 hover:bg-blue-900 border-blue-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
                        <div>
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                        <span>Delete</span>
                        </button>  
                        </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};