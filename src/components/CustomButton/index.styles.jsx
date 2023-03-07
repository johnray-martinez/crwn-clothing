import styled from 'styled-components';


const primaryColor = 'black';
const googleColor = '#4C8BF5';
const offColor = 'white';
const defaultInverted = `
  color: ${primaryColor};
  background-color: ${offColor};
  border: 1px solid ${primaryColor};
`;
const invertedHover = `
  background-color: ${primaryColor};
  color: ${offColor};
  border: 1px solid ${primaryColor};
`;

export const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  padding: 12px 42px;
  outline: none;
  border: none;
  background-color: ${primaryColor};
  color: ${offColor};
  min-width: 150px;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid ${offColor};

  &:hover {
    ${defaultInverted}
  }

  ${({buttonType}) => {
    switch (buttonType) {
      case 'google': return `
        background-color: ${googleColor};
        color: ${offColor};
        border: 1px solid black;
      `;

      case 'inverted': return `
        ${defaultInverted}

        &:hover {
          ${invertedHover}
        }
      `;
    }
  }}
`;
