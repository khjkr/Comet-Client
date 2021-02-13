import React from 'react';
import { AuthInput } from '../../../components';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="no-drag">서비스 이용을 위해서는 로그인이 필요합니다.</h3>
      <AuthInput 
        type={'email'}
        placeholder={'이메일'}
      />
      <AuthInput 
        type={'password'}
        placeholder={'비밀번호'}
      />
      <button>로그인</button>
    </div>
  )
};

export default LoginForm
