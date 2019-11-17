import React from 'react'
import styled from 'styled-components';
import { CardContent, Typography, Button, CardActions } from '@material-ui/core';

import { TextFields, CardContainer } from '../components';

const CardFooter= styled(CardActions)`
display:flex;
justify-content: flex-end;
border-top: 2px solid #f3f4f7; 
   .MuiCardActions-root {
    justify-content: flex-end;
   }


`
export const CreateTodo = () => (
    <CardContainer>
        <CardContent >
            <Typography color="textSecondary" gutterBottom>
                Task name
            </Typography>
            <TextFields width={'550px'} />
            <Typography color="textSecondary" gutterBottom>
                Create Date
            </Typography>
            <TextFields type='date' width={'100px'} />
        </CardContent>
        <CardFooter>
            <Button variant="contained" color="primary" >
                Create
             </Button>
            <Button variant="contained" color="default" >
                cancel
             </Button>
        </CardFooter>

    </CardContainer>
)