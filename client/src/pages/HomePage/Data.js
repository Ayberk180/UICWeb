import styled from 'styled-components'


export const homeObj1 = {
    lightbg: false,
    primary: true,
    lightbg: false,
    imgStart: '',
    lightTopLine: true,
    lightTextDesc: true,
    topLine: 'Top Line',
    Headline: 'Services',
    lightText: true,
    description: 'Put the description in here',
    buttonLabel: 'Get Started'
};

export const homeObj2 = {
    lightbg: false,
    primary: true,
    lightbg: false,
    imgStart: '',
    lightTopLine: true,
    lightTextDesc: true,
    topLine: 'Top Line',
    Headline: 'Donate',
    description: 'Put the description in here',
    buttonLabel: 'Get Started'
};

export const SubscriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const SubscriptionSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
  color: #AB9C49;
`;

export const SubscriptionSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  color: #AB9C49;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const Button = styled.button`
border-radius: 4px;
background: #AB9C49;
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: white;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
`;