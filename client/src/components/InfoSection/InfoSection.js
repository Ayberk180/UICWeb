import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSectionElements';

function InfoSection({primary, lightbg, imgStart, btnlink, lightTextDesc, topLine, Headline, lightText, description, buttonLabel, img, alt, start,}) {
    return (
        <>
            <InfoSec style= {{outline: '10px dashed green'}} lightbg ={lightbg}>
                <Container>
                    <InfoRow style= {{outline: '10px dashed blue'}} imgStart= {imgStart}>
                        <InfoColumn style= {{outline: '10px dashed red'}} >
                            <TextWrapper style= {{outline: '10px dashed yellow'}} >
                                <Heading lightText={lightText}>{Headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to={btnlink}>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>        
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper style= {{outline: '10px dashed purple'}} start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>   
        </>
    )
}

export default InfoSection;