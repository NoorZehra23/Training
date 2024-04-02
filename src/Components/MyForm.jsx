import React, { useState } from 'react';
import { faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyForm = ({onSubmit}) => {
  const [userName, setUserName] = useState('');
  const [userAge,setAge]= useState('');
  const [userEmail,setEmail]= useState('');
  const [userGender,setGender]= useState('');
  const [employmentStatus,setEmploymentStauts]= useState('');
  

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateAge = (age) => {
    const numericAge = parseInt(age);
    return !isNaN(numericAge) && numericAge >= 18 && numericAge<=110;
  };
  
  const handleSubmit = () => {
    const isValidEmail = validateEmail(userEmail);
    const isValidAge = validateAge(userAge);

    if (isValidEmail && isValidAge  && userGender!=='' && employmentStatus!=='' ) {
      let formstate= {name:userName, age:userAge,email:userEmail, gender:userGender,employment:employmentStatus}
         onSubmit(formstate);
         setUserName("");
         setEmail("");
         setAge("");
         setGender("");
         setEmploymentStauts("");
         document.getElementById("myForm").reset();
    } else if (!isValidEmail)
  {
    alert('Invalid Email. Enter a valid email.')
  
    }
    else if (!isValidAge)
  {

    alert('Invalid Age. Enter a number Between 1-110')
    }
    else {
    alert('Fill the form to continue.')
    }

  };





  return (
    <>
    <div className="grid grid-flow-row auto-rows-max gap-4 p-4">
    <form id="myForm">
    <span className="text-black-600 font-bold">Fill the Form</span>

  <div className="flex-1">
            <label className="text-sm mr-1 font-bold text-black-700">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              label="name"
              onChange={(e) => setUserName(e.target.value)}
              className="border-b text-sm w-2/4 focus:outline-none focus:border-blue-400"
              placeholder="Name"
            />
          </div>
          <div className="flex-1">
            <label className="text-sm mr-1 font-bold text-black-700">Email:</label>
            <input
              id="email"
              type="text"
              name="email"
              label="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-b text-sm w-2/4 focus:outline-none focus:border-blue-400"
              placeholder="xyz@gmail.com"
            />
          </div>

          <div className="flex-1">
            <label className="text-sm mr-1 font-bold text-black-700">Age:</label>
            <input
              id="age"
              type="number"
              name="age"
              label="age"
              onChange={(e) => setAge(e.target.value)}
              className="border-b text-sm w-2/4 focus:outline-none focus:border-blue-400"
              placeholder="Enter your Age"
            />
          </div>

          <div className='flex-1'>
                      <label className='text-sm font-bold mr-1  text-black-700 ' htmlFor="dropdown">Gender:</label>
                      <select value={userGender} onChange={(e) => setGender(e.target.value)}>
                      <option value="null">Choose your gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                      </select>
        </div> 

        <div className=" flex-1 p-1 mb-2">
        <span className="text-black-600 font-bold text-sm">Employment Status</span>
              <div className="flex flex-col px-2 py-1">
              <div className="flex flex-col">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio bg-black-900 " name="options" value="Unemployed" onChange={(e) => setEmploymentStauts(e.target.value)}/>
                  <span className="ml-2 text-black-700 font-bold text-sm">Unemployed</span>
                </label>
              </div>
              <div className="flex flex-col">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio bg-black-900 " name="options" value="Employed" onChange={ (e) => setEmploymentStauts(e.target.value)} />
                  <span className="ml-2 text-black-700 font-bold text-sm">Employed</span>
                </label>
              </div>
            </div>          
        </div>
</form>
        <div className="flex-1 justify-center items-center p-2">
                        <button 
                        onClick={handleSubmit}
                          className="bg-blue-600 hover:bg-blue-900 border-blue-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
                        <div>
                            <FontAwesomeIcon icon={faSquarePlus} />
                        </div>
                        <span>Add Record</span>
                        </button>
                </div>

</div>



      </>
      );
};


export default MyForm;