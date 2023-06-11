import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Adduser from './components/Adduser';
import Profile from './components/Profile';
import PendingRequest from './components/PendingRequest';
import Task from './components/Task';
import ProfileDetails from './components/ProfileDetails';
import Resetpassword from './components/Resetpassword';
import { useState } from 'react';

function App() {
  let [users, setUsers] = useState([
    {
      name: "mani",
      email: "upchh@example.com",
      mobile: "74865964152",
      dob: "2001-01-23"
    },
    {
      name: "ari",
      email: "upchh@example.com",
      mobile: "74865964152",
      dob: "2001-01-23"
    },
    {
      name: "siva",
      email: "upchh@example.com",
      mobile: "74865964152",
      dob: "2001-01-23"
    },
    {
      name: "abi",
      email: "upchh@example.com",
      mobile: "74865964152",
      dob: "2001-01-23"
    },

    {
      name: "sabari",
      email: "upchh@example.com",
      mobile: "74865964152",
      dob: "2001-01-23"
    },

    {
      name: "raj",
      email: "upchh@example.com",
      mobile: "74865964152",
      dob: "2001-01-23"
    }

  ])
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers} />} />
          <Route path="/adduser" element={<Adduser  users={users} setUsers={setUsers}/>} />
          <Route path="/edituser/:id" element={<Adduser  users={users} setUsers={setUsers}/>} />
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="reset-password" element={<Resetpassword />} />
          </Route>
          <Route path="/pendingrequest" element={<PendingRequest />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
