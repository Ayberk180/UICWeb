import React from 'react'
import ImageSlider from '../../components/ImageSlider';
import InfoSection from '../../components/InfoSection/InfoSection';
import {
  homeObj1,
  homeObj2,
  Form,
  FormInput,
  SubscriptionContainer,
  SubscriptionSubHeading,
  SubscriptionSubText,
  Button 
} from './Data';
import image1 from "../../Images/mosque1.jpg";
import image2 from "../../Images/mosque2.jpg";
import image3 from "../../Images/mosque3.jpg";
import image4 from "../../Images/mosque1.jpg";
import image5 from "../../Images/mosque2.jpg";
import image6 from "../../Images/mosque3.jpg";



function Home() {
  return (
    <>
        <ImageSlider images={[image1, image2, image3, image4, image5, image6]}>
          <div 
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff"
            }}
          >
            <h1> Ulu Cami </h1>
            <p> Some Inspirational Quote </p>
          </div>
        </ImageSlider>
        
        <InfoSection {...homeObj1} />
        <InfoSection {...homeObj2} />
        <SubscriptionContainer>
          <SubscriptionSubHeading>Join our Mailing List to receive important updates about our mosque!</SubscriptionSubHeading>
          <SubscriptionSubText>You can unsubscribe at any time</SubscriptionSubText>
          <Form>
            <FormInput name='email' type='email' placeholder='Your Email' />
            <Button fontBig primary={true}>Subscribe</Button>
          </Form>
        </SubscriptionContainer>
    </>
  );
  
};

export default Home
