import React, {useState} from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { servObj1, servObj2, servObj3, servObj4 } from './ServiceData';
import InfoModal from '../../components/InfoModal/InfoModal';



function Services() {


    return (
        <>
         <InfoModal {...servObj1} />
            
         <InfoModal {...servObj2} />
         <InfoModal {...servObj3} />
         <InfoModal {...servObj4} />
        </> 
          )
};

export default Services;