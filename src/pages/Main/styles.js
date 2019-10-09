import styled from 'styled-components';

export const SubmitButton = styled.button`
  background: #111;
  color: #eee;
  border: 0;
  padding: 10px 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const Box = styled.div`
  max-width: 49%;
  min-width: 49%;
  background: #fff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  input.form {
    flex: 1;
    margin-top: 10px;
    max-height: fit-content;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    transition: border 0.25s ease-out;
  }
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
  div.preview {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
  }
`;

export const Message = styled.div`
  z-index: 10;
  top: 15px;
  right: 15px;
  background: white;
  border-radius: 4px;
  border: 2px solid #333;
  position: absolute;
  min-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  -webkit-box-shadow: 10px 10px 5px -8px rgba(17, 17, 17, 0.5);
  -moz-box-shadow: 10px 10px 5px -8px rgba(17, 17, 17, 0.5);
  box-shadow: 10px 10px 5px -8px rgba(17, 17, 17, 0.5);
  h4 {
    margin: 10px auto;
  }
`;
