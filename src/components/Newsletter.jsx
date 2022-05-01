import { Send } from '@material-ui/icons';
import React from 'react';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Title = styledComponents.h1`
`;
const Desc = styledComponents.div`
`;
const InputContainer = styledComponents.div`
`;
const Input = styledComponents.input`
`;
const Button = styledComponents.button`
`;



const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
};

export default Newsletter;