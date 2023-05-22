import * as React from 'react';
import './App.css'
import Header from './header';
import Employee from './employee';
import Footer from './footer';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "Team A") //---> short circuit evaluation

  //employees is the array of objects that stores the the employee detail and setEmployee is the function that helps to change the state of it.
  const [employees, SetEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{ id: 1, fullname: "Aditya Bhattacharjee", Designation: "Front-End Developer", Gender: "Male", TeamName: "Team A" }, { id: 2, fullname: "Sandeep Acharjyo", Designation: "Back-End Developer", Gender: "Male", TeamName: "Team B" }, { id: 3, fullname: "Aryan Basudev Sahoo", Designation: "Java-Developer", Gender: "Male", TeamName: "Team A" }, { id: 4, fullname: "Aritra Chatterjee", Designation: "UI/UX Designer", Gender: "Male", TeamName: "Team B" }, { id: 5, Gender: "Female", TeamName: "Team B", fullname: "Priya Gupta", Designation: "Project Manager" }, { id: 6, Gender: "Female", TeamName: "Team A", fullname: "Megha Das", Designation: "Data Analyst" }]);

  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees])

  useEffect(() => {

    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam])

  function handleselectedTeam(event) {
    console.log(event.target.value)
    setTeam(event.target.value)
  }


  function handleemployeeonclick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? (employee.TeamName === selectedTeam) ? { ...employee, TeamName: '' } :
        { ...employee, TeamName: selectedTeam } : employee);

    SetEmployees(transformedEmployees);


  }
  return (

    <Router>
      <Header
        selectedTeam={selectedTeam}
        teammembercount={employees.filter((employee) => employee.TeamName === selectedTeam).length}

      />

      <Routes>
        <Route path="/"
          element={<Employee employees={employees}
            selectedTeam={selectedTeam}
            handleselectedTeam={handleselectedTeam}
            handleemployeeonclick={handleemployeeonclick}

          />}>

          {/* </Route>
          {/* <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers/>}> */}
        </Route> */}
      </Routes>
      <Footer />
    </Router>

  );
}
