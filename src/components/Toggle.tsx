import React from 'react';
import styled from 'styled-components';

interface Props {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  id?: string;
}

export const Toggle: React.FC<Props> = ({
  onChange = () => {},
  checked = false,
  id,
}) => {
  return (
    <Wrapper id={id}>
      <CheckBox
        id="checkbox"
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <Slider htmlFor="checkbox" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Slider = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 24px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${Slider} {
    background: #48bb78;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
