import React, { useState } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import BookAddForm from './BookAddForm';

const StyledButton = styled.button`
  border-radius: 3px;
`;

function Navs({ token, history, setAddVisible, addVisible }) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  const logout = async () => {
    console.log('로그아웃');
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: ` Bearer ${token}`
        }
      });
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('token');
    history.push('/signin');
  };

  return (
    <>
      <ul style={{ listStyle: 'none', display: 'flex', margin: 10 }}>
        <li>
          <StyledButton onClick={() => setAddVisible(!addVisible)}>
            책 추가하기
          </StyledButton>
          {/* <StyledButton onClick={showModal}>책 추가하기</StyledButton> */}
        </li>
        <li style={{ marginLeft: 10 }}>
          <StyledButton onClick={() => history.push('/signin')}>
            로그인
          </StyledButton>
        </li>
        <li style={{ marginLeft: 10 }}>
          <StyledButton onClick={logout}>로그아웃</StyledButton>
        </li>
      </ul>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
      >
        <BookAddForm handleCancel={handleCancel} />
      </Modal>
    </>
  );
}
export default withRouter(Navs);
