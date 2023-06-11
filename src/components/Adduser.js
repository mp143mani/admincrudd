import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function AddUser({ users, setUsers }) {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  

  const handleSubmit = () => {
    const newUser = { name, email, mobile, dob };
    const newArray = [...users];
    if (params.id !== undefined) {
      newArray.splice(params.id, 1, newUser);
    } else {
      newArray.push(newUser);
    }
    setUsers(newArray);
    navigate('/dashboard');
  };

  useEffect(() => {
    if (params.id !== undefined && users[params.id]) {
      setName(users[params.id].name);
      setEmail(users[params.id].email);
      setMobile(users[params.id].mobile);
      setDob(users[params.id].dob);
    }
  }, [params.id, users]);

  return (
    <div className='container'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile no</Form.Label>
          <Form.Control type="number" placeholder="Enter the mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="Enter the Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;
