import React from 'react';
import { Toaster, ToasterConatinerError, ToasterConatinerSuccessful, ToasterConatinerWarning, ToasterInnerText } from './ToasterStyle';

//Assest
import ErrorIcon from '../../images/toaster-alert.svg';
import SuccessfulIcon from '../../images/toaster-success.svg';
import WarningIcon from '../../images/warning-icon.svg';

const ToasterItem = ({type}) => {
  if (type === 'error') {
    return(
      <>
      <Toaster>
        <ToasterConatinerError>
          <ToasterInnerText>
            <img src={ErrorIcon} alt="Icon"/>
            <span>Your have deleted 3 routes successfully.</span>
            </ToasterInnerText>
          </ToasterConatinerError>
      </Toaster>
      </>

    );
  }
  else if (type === 'successful') {
    return (
      <>
      <Toaster>
        <ToasterConatinerSuccessful>
          <ToasterInnerText>
            <img src={SuccessfulIcon} alt="Icon"/>
            <span>Your have deleted 3 routes successfully.</span>
          </ToasterInnerText>
        </ToasterConatinerSuccessful>
      </Toaster>
      </>
    );
  }
  else if (type === 'warning') {
    return(
      <>
      <Toaster>
        <ToasterConatinerWarning>
          <ToasterInnerText>
            <img src={WarningIcon} alt="Icon"/>
            <span>We couldn't delete the selected items due to some error occurred.</span>
          </ToasterInnerText>
        </ToasterConatinerWarning>
      </Toaster>
      </>
    );
  }
}

export default ToasterItem;