import React from 'react';
import Brokerage from './Brokerege';
import Hero from '../Pricing/Hero';
import OpenAccount from '../OpenAccount.js';

function PricingPage() {
    return ( 
       <>
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
       </>

     );
}

export default PricingPage;