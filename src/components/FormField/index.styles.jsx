import styled from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = `
  top: -14px;
  font-size: 12px;
  color: ${mainColor}
`;

export const FieldContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({shrink}) => shrink && shrinkLabel}
`;

export const Field = styled.input`
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label}{
    ${shrinkLabel}
  }
`;


