import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected({ Cmp }) {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('user-info');
    if (userInfo) {
      navigate('/indexx');
    }
  }, [navigate]);

  return (
    <div>
      <Cmp />
    </div>
  );
}

export default Protected;
