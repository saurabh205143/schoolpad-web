import React, { useState } from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import { IssueInnerBox, IssueInnerConatiner, IssueInnerConatinerText, IssueItemBox, IssueItemConatinerStaff, IssueItemConatinerStudent, IssueItemHeaderContainer } from './IssueItemHomeStyle';

//Assests
import IssueStaffIcon from '../../../../../images/issue-staff-icon.svg';
import IssueStudentIcon from '../../../../../images/issue-student-icon.svg';

const IssueItemHome = () => {

  const [isStaffActive, setIsStaffActive] = useState(false);
  const [isStudentActive, setIsStudentActive] = useState(false);

  const handleStaffClick = () => {
      setIsStaffActive(!isStaffActive);
  };

  const handleStudentClick = () => {
      setIsStudentActive(!isStudentActive);
  };

  return (
    <>
      <Layout type='inventory'>
        <IssueItemHeaderContainer>
          <h6>Issue Item(s)</h6>
          <span>Please select either Staff or Student to issue item(s). </span>
        </IssueItemHeaderContainer>
        <IssueItemBox>
          <a href="/manageIssue/staff-select-filter">
          <IssueItemConatinerStaff isActive={isStaffActive} onClick={handleStaffClick}>
            <IssueInnerBox>
              <IssueInnerConatiner>
                <img src={IssueStaffIcon}/>
              </IssueInnerConatiner>
              <IssueInnerConatinerText>
                <h6>Issue to Staff</h6>
                <span>Click here to issue items to staff</span>
              </IssueInnerConatinerText>
            </IssueInnerBox>
          </IssueItemConatinerStaff>
          </a>
          <a href="/manageIssue/student-select-filter">
          <IssueItemConatinerStudent isActive={isStudentActive} onClick={handleStudentClick}>
            <IssueInnerBox>
              <IssueInnerConatiner>
                <img src={IssueStudentIcon} />
              </IssueInnerConatiner>
              <IssueInnerConatinerText>
                <h6>Issue to Student</h6>
                <span>Click here to issue items to student</span>
              </IssueInnerConatinerText>
            </IssueInnerBox>
          </IssueItemConatinerStudent>
          </a>
        </IssueItemBox>
      </Layout>
    </>

  )
}

export default IssueItemHome;