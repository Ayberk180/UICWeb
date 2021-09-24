import React from 'react';
import {Container, Title } from './ContactElements'
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import  MapSection  from '../../components/Map/Map'


function Contact() {

    const location = {
        address: '408 Knickerbocker Ave, Paterson, NJ 07503',
        lat: 40.892492,
        lng: -74.142274
    }    

    return (
        <Container>
            <Title text="Title" />
            <Container wrapper>
                <ContactInfo />
                <ContactForm />
            </Container>
            <MapSection />
        </Container>
          )
};

export default Contact;