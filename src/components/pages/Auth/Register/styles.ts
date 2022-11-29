import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(90deg, #c7c5f4, #776bcc);
`;

export const FormArea = styled.div`
  background: linear-gradient(90deg, #5d54a4, #7c78b8);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #5c5696;
`;

export const FormContent = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
`;
export const FormBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
`;
export const FormBackgroundShape_1 = styled.div`
  transform: rotate(45deg);
  position: absolute;
  height: 520px;
  width: 520px;
  background: #fff;
  top: 0;
  right: 40px;
  border-radius: 0 72px 0 0;
`;
export const FormBackgroundShape_2 = styled.div`
  transform: rotate(45deg);
  position: absolute;
  height: 220px;
  width: 220px;
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
`;
export const FormBackgroundShape_3 = styled.div`
  transform: rotate(45deg);
  position: absolute;
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5d54a4, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
`;
export const FormBackgroundShape_4 = styled.div`
  transform: rotate(45deg);
  position: absolute;
  height: 400px;
  width: 200px;
  background: #7e7bb9;
  top: 420px;
  right: 50px;
  border-radius: 60px;
`;

export const Login = styled(Form)`
  width: 320px;
  padding: 30px;
  padding-top: 156px;
`;

export const LoginField = styled.div`
  padding: 20px 0px;
  position: relative;
`;

export const Input = styled(Field)`
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;

  :active,
  :hover,
  :focus {
    outline: none;
    border-bottom-color: #6a679e;
  }
`;
