import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItemWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Button
} from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
      {/* <FooterSubscription>
        <FooterSubHeading>
          Join our Mailing List to receive important updates about our mosque!
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig primary={true}>Subscribe</Button>
        </Form>
      </FooterSubscription> */}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkTitle>About Us</FooterLinkTitle>
          <FooterLinkItemWrapper>
            <FooterLinkItems>
            
            <FooterLink to='/sign-up'>Sign Up</FooterLink>
            <FooterLink to='/Services'>Services</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink to='/'>Donate</FooterLink>
            <FooterLink to='/'>Administrators</FooterLink>
          </FooterLinkItems>  
          </FooterLinkItemWrapper>
          
          {/* <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems> */}
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLinkItemWrapper>
            <FooterLinkItems>
            
            <FooterLink to='/sign-up'>Facebook</FooterLink>
            <FooterLink to='/'>Instagram</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>  
          </FooterLinkItemWrapper>
          
          {/* <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems> */}
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            United Islamic Center
          </SocialLogo>
          <WebsiteRights>United Islamic Center © 2021</WebsiteRights>
          {/* <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons> */}
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;