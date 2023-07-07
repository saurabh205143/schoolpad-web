import { styled } from "styled-components";

// Assets
import ErrorIcon from '../../images/toaster-alert.svg';
import SuccessfulIcon from '../../images/toaster-success.svg';

export const Toaster = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToasterConatiner = styled.div`
  display: flex;
  width: 636px;
  padding: 12px;
  align-items: center;
  gap: 4px;
  background-color: #CA3521;
`;

export const ToasterInnerText = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
`;


const ToasterItem = ({type}) => {
  if (type === 'error') {
    return(
      <>
      <Toaster>
        <ToasterConatiner>
          <ToasterInnerText>
            <img src={ErrorIcon} alt="Icon"/>
            Your have deleted 3 routes successfully.
            </ToasterInnerText>
        </ToasterConatiner>
      </Toaster>
      </>

    );
  }
  else if (type === 'successful') {
    return (
      <>
      <Toaster>
        <ToasterConatiner>
          <ToasterInnerText>
            <img src={SuccessfulIcon} alt="Icon"/>
            Your have deleted 3 routes successfully.
          </ToasterInnerText>
        </ToasterConatiner>
      </Toaster>
      </>
    );
  }
  else if (type === 'warning') {
    return(
      <>
      <Toaster>
        <ToasterConatiner>
          <ToasterInnerText>
            We couldn't delete the selected items due to some error occurred. 
          </ToasterInnerText>
        </ToasterConatiner>
      </Toaster>
      </>
    );
  }
}

export default ToasterItem;


