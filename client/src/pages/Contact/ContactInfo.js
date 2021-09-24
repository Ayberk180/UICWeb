import React from 'react'
import styled from 'styled-components'


const WrapperContactInfo=styled.div`
    background: #378D40;
`; 

const CompanyName = styled.h1`
    margin: 0 0 1rem 0;
    text-align: center;
    color: #fff; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`;

const WrapperList = styled.ul`
    list-style: none;
    margin:0 0 1rem 0;
    padding:0;
    text-align: center;
    color: #fff;
    @media (min-width: 700px) {
        text-align: left; 
    }
`;


const ContactInfo = () => (
    <WrapperContactInfo>
        <CompanyName>United Islamic Center</CompanyName>
        <WrapperList>
            <li>408 Knickerbocker Ave</li>
            <li>Paterson, New Jersey 07503</li>
            <li>(973) 345-6584</li>
        </WrapperList>
    </WrapperContactInfo>
)

export default ContactInfo