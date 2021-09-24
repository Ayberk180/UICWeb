import React, {useState} from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { donateObj1 } from './DonateData';
import Paypal from './Paypal';


function Donate() {

    const [checkout, setCheckout] = useState(false);

    return (
        <>

            <h3> donate </h3>
            <InfoSection {...donateObj1} /> 
            
        </>
         )
};

export default Donate