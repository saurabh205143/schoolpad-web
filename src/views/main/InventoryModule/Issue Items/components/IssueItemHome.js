import React, { useState } from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import { IssueInnerBox, IssueInnerConatiner, IssueInnerConatinerText, IssueItemBox, IssueItemConatinerStaff, IssueItemConatinerStudent, IssueItemHeaderContainer } from './IssueItemHomeStyle';

//Assests
import IssueStaffIcon from '../../../../../images/issue-staff-icon.svg';
import IssueStudentIcon from '../../../../../images/issue-student-icon.svg';

const IssueItemHome = () => {

  return (
    <>
      <Layout type='inventory'>
        <IssueItemHeaderContainer>
          <h6>Issue Item(s)</h6>
          <span>Please select either Staff or Student to issue item(s). </span>
        </IssueItemHeaderContainer>
        <IssueItemBox>
          <IssueItemConatinerStaff>
            <IssueInnerBox>
              <IssueInnerConatiner>
                <img src={IssueStaffIcon} />
              </IssueInnerConatiner>
              <IssueInnerConatinerText>
                <h6>Issue to Staff</h6>
                <span>Click here to issue items to staff</span>
              </IssueInnerConatinerText>
            </IssueInnerBox>
          </IssueItemConatinerStaff>
          <IssueItemConatinerStudent>
            <IssueInnerBox>
              <IssueInnerConatiner>
                <img src={IssueStudentIcon} />
              </IssueInnerConatiner>
              <IssueInnerConatinerText>
                <h6>Issue to Staff</h6>
                <span>Click here to issue items to staff</span>
              </IssueInnerConatinerText>
            </IssueInnerBox>
          </IssueItemConatinerStudent>
        </IssueItemBox>
      </Layout>
    </>

  )
}

export default IssueItemHome;