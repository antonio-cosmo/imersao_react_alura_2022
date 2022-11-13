import styled from "styled-components"

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${(props) => props.theme.textColorBase};
    background-color: ${(props) => props.theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${(props) => props.theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${(props) => props.theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;