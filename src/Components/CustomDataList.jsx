import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { data } from '../store/user-data';
import { Pagination } from './Pagination';
import PersonForm from './PersonForm';
import TablePersons from './TablePersons';


function CustomDataList() {
  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const showUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [newUser, setNewUser] = useState({
    name: '',
    surname: '',
    email: '',
  })

  const handleAddingNewUser = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    setUsers(data);
  }, []);

  const addNewUser = () => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1}]);
    setNewUser({
      name: '',
      surname: '',
      email: '',
    })
  }

  const deleteUser = (personId) => {
    const currentUsers = users.filter(({ id }) => id !== personId);
    setUsers(currentUsers);
  }

  return (
    <div className="col-12 row">
      <div className="col-10 row mx-auto">
        <div className="col-12 row mx-auto">
          <PersonForm  handleAddingNewUser={handleAddingNewUser} addPerson={addNewUser} newUser={newUser}/>
        </div>
        <TablePersons persons={showUsers} deletePerson={deleteUser}/>
      </div>
      <Container>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
      </Container>
    </div>
  );
}

export default CustomDataList;
