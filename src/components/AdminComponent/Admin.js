import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './Admin.scss';

function Admin(props) {
  return (
    <div className="admin">
      <Header />
      Đây là trang admin
      <Footer />
    </div>
  );
}

export default Admin;