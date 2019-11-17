
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: ${({width}) => width};
`
export const TextFields = ({width, type, placeholder, value, onChange}) =>(
    <Input width={width} type={type} placeholder={placeholder} value={value} onChange={onChange} />
)