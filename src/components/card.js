import React from 'react'
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const StyledCard = styled(Card)`
  padding: 20px;
  background: #fff;
  text-align:start;
  
`
export const CardContainer = ({children}) =>(
    <StyledCard>
        {children}
    </StyledCard>
)