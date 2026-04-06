import React from 'react';
import logo from '/logo.png'; 
import userImg from '/User.png'; // غيرت الاسم لـ userImg عشان ميتعارضش مع كلمات محجوزة

const Nav = () => {
  return (
    <nav className="navbar bg-body-tertiary shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* الجزء اللي على الشمال: اللوجو والاسم */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img 
            src={logo} 
            alt="Logo" 
            width="40" 
            height="40" 
            className="d-inline-block align-text-top"
          />
          <span className="ms-2 fw-bold">Minimal Shopping</span>
        </a>

        {/* الجزء اللي على اليمين: صورة المستخدم */}
        <div className="d-flex align-items-center">
          <img 
            src={userImg} 
            alt="User" 
            width="35" 
            height="35" 
            className="rounded-circle border" // خليتها دائرية عشان يبقى شكلها احترافي
            style={{ cursor: 'pointer', objectFit: 'cover' }}
          />
        </div>

      </div>
    </nav>
  );
};

export default Nav;