import './index.css';
import Employee from './components/Employee';
import beanImage from './images/bean.jpg';
import { useState } from 'react';
function App() {
  const [role, setRole] = useState("Developer");
  const showEmployee = true;

  const [employees, setEmployees] = useState(
    [
      {name:"Michael", role:"Developer",img:beanImage},
      {name:"Asila", role:"Designer",img:beanImage},
      {name:"Alstone", role:"Manager",img:beanImage},
      {name:"Alex", role:"Teacher",img:beanImage},
      {name:"Anet", role:"Nurse",img:beanImage},
      {name:"Luccy", role:"Doctor",img:beanImage}
    ]
  );
  return (
    <div className="App bg-red-400">
      { showEmployee ? (
        <>
        <input type='text'
        onChange={(e) =>{
          console.log(e.target.value);
          setRole(e.target.value);
        }}
        />
        <div className='flex flex-wrap justify-center'>
         {employees.map((employee) => {
          console.log(employee);
          return(
          <Employee name={employee.name} role = {employee.role} img = {employee.img}/>
          );
         })}
      </div>
      </>
      ):
      (
        <p class='text-7xl text-center text-blue-700'>You cannot see the Employee</p>
      )
}
    </div>
      
  );
}

export default App;
