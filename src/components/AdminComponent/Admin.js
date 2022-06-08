import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import HeaderBlog from '../HeaderBlog';
import './Admin.scss';
import userApi from '../../api/userApi';
import {useNavigate} from 'react-router-dom';

function Admin(props) {

  const [usersData, setUsersData] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await userApi.getAll('all')
      setUsersData(response.data)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      if (user) return;
      const path = '/admin/login'
      navigate(path)
    } catch (e) {
      return;
    }
  })

  console.log(usersData)

  return (
    <div className="admin">
      <HeaderBlog />

      <h1 style={{ color: 'white' }}>A Fancy Table</h1>

      <table id="customers" className="space-header admin__table">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            usersData.users?.map((user, index) => {
              return (
                <tr key={user?.id}>
                  <td>{user?.id}</td>
                  <td>{user?.userName}</td>
                  <td>{user?.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Admin;