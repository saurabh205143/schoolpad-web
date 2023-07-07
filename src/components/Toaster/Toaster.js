import React from 'react';
import { ToasterConatiner, ToasterInnerText } from './ToasterStyle';

const Toaster = () => {

    return (
        <>
        <Toaster type='error'>
        <ToasterConatiner>
          <ToasterInnerText>
            hello
          </ToasterInnerText>
        </ToasterConatiner>
        </Toaster>
        </>
        );
    }
    
    export default Toaster;