import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import Modal from '../../components/Modal';
import useModal from '../../components/useModal';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoModalElements';

function InfoModal({primary, lightbg, imgStart, btnlink, lightTextDesc, topLine, Headline, lightText, description, buttonLabel, img, alt, start, title, p1, p2, p3, p4, p5}) {
    
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <InfoSec style= {{outline: '10px dashed green'}} lightbg ={lightbg}>
                <Container>
                    <InfoRow style= {{outline: '10px dashed blue'}} imgStart= {imgStart}>
                        <InfoColumn style= {{outline: '10px dashed red'}} >
                            <TextWrapper style= {{outline: '10px dashed yellow'}} >
                                <Heading lightText={lightText}>{Headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                {/* <Link to={btnlink}> */}
                                <Button onClick={() => setOpen(true)}>Open Modal</Button>

                                <Modal isOpen={isOpen} close={() => setOpen(false)}>
                                    <h3>{title}</h3>
                                    <p>{p1}</p>
                                    <p>{p2}</p>
                                    <p>{p3}</p>
                                    <p>{p4}</p>
                                    <p>{p5}</p>
                                </Modal>
                                {/* </Link>         */}
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

export default InfoModal;