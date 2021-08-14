import React from 'react'
import styled from 'styled-components'
import App from '../img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Container= styled.div`
   display: flex;

   @media only screen and (max-width: 480px){
    flex-direction: column;
    padding: 30px 20px;
}
`;

const Left= styled.div`
   width: 50%;
   @media only screen and (max-width: 480px){
    display: none;
   
}
`;

const Right= styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Image=styled.img`
      width: 80%;
`;

const Title = styled.span`
    font-size: 70px;
    @media only screen and (max-width: 480px){
        font-size:50px;
    }
`;

const SubTitle = styled.span`
font-size: 24px;
font-style: italic;
color: #333;
margin-top: 30px;
`;

const Desc = styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;
`;

const Button = styled.button`
width: 150px;
border: none;
padding: 15px 20px;
background-color: darkblue;
color: white;
font-size: 20px;
border-radius: 20px;
cursor: pointer;
margin-top: 20px;
`;

const Feature = () => {
    return (
        <Container>
            <Left><Image src={App}/></Left>
            <Right>
                <Title>
                    <b>good design</b>
                    <br/>
                    <b>good business</b>
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Desc>We help our clients succeed by creating brand identities,
                    digital experiences, and print material that communicates clearly,
                    achieve marketing goals, and look fantastic. </Desc>
                <Desc>
                    We care your business and gurantee you to achieve marketing goal.
                </Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Feature
