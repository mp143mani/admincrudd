import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Dashboard({ users, setUsers }) {
    const data = [
        {
            title: "Earnings (Monthly)",
            value: "$5000",
            color: "danger",
            icon: "fa-calendar",
            isProgress: false
        },
        {
            title: "Earnings (Annual)",
            value: "$60000",
            color: "success",
            icon: "fa-dollar-sign",
            isProgress: false
        },
        {
            title: "Task",
            value: "23",
            color: "info",
            icon: "fa-clipboard-list",
            isProgress: true
        },
        {
            title: "Pending Request",
            value: "13",
            color: "warning",
            icon: "fa-comments",
            isProgress: false
        }
    ];

    const navigate = useNavigate();

    const handleDelete = (i) => {
        const newArray = [...users];
        newArray.splice(i, 1);
        setUsers(newArray);
    };

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid bg-light">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="javascriptvoid" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
                        </a>
                    </div>

                    <div className="row">
                        {data.map((e, i) => (
                            <Card key={i} input={e} value={10} />
                        ))}
                    </div>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>SI No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile No</th>
                                <th>Date of Birth</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((e, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.dob}</td>
                                    <td>
                                        <Button variant="success" onClick={() => navigate(`/edituser/${i}`)}>Edit</Button>
                                        {' '}
                                        <Button variant="warning" onClick={() => handleDelete(i)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
