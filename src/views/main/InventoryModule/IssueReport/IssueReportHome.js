import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import { IssueInnerBox, IssueInnerConatiner, IssueInnerConatinerText, IssueItemBox, IssueItemConatinerStaff, IssueItemConatinerStudent, IssueItemHeaderContainer } from '../Issue Items/components/IssueItemHomeStyle';

//Assests
import IssueStaffIcon from '../../../../images/issue-staff-icon.svg';
import IssueStudentIcon from '../../../../images/issue-student-icon.svg';

const IssueReportHome = () => {

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
          <h6>Issue Report</h6>
          <span>Please select either Staff or Student to print or export Issue report</span>
        </IssueItemHeaderContainer>
        <IssueItemBox>
          <a href="/manageIssueReport/staff-select-filter">
          <IssueItemConatinerStaff isActive={isStaffActive} onClick={handleStaffClick}>
            <IssueInnerBox>
              <IssueInnerConatiner>
                <img src={IssueStaffIcon}/>
              </IssueInnerConatiner>
              <IssueInnerConatinerText>
                <h6>Staff</h6>
                <span>Click here to get the report of Products issued to staff</span>
              </IssueInnerConatinerText>
            </IssueInnerBox>
          </IssueItemConatinerStaff>
          </a>
          <a href="/manageIssueReport/student-select-filter">
          <IssueItemConatinerStudent isActive={isStudentActive} onClick={handleStudentClick}>
            <IssueInnerBox>
              <IssueInnerConatiner>
                <img src={IssueStudentIcon} />
              </IssueInnerConatiner>
              <IssueInnerConatinerText>
                <h6>Student</h6>
                <span>Click here to get the report of Products issued to student</span>
              </IssueInnerConatinerText>
            </IssueInnerBox>
          </IssueItemConatinerStudent>
          </a>
        </IssueItemBox>
      </Layout>
    </>

  )
}

export default IssueReportHome;