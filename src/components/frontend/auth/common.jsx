import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://plus.unsplash.com/premium_photo-1682310468892-5d8ade38f606?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgba(200, 200, 200, 0.8);
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgba(129, 158, 216, 0.8);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgba(241, 196, 15, 1);
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 5px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(241, 196, 15, 1);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 150px;
  padding: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: linear-gradient(
    58deg, rgba(129, 158, 216, 0.8) 20%, rgba(141, 162, 204, 0.8) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

export const LineText = styled.p`
  font-size: 12px;
  color: rgba(129, 158, 216, 0.8);
  font-weight: 500;
`;
