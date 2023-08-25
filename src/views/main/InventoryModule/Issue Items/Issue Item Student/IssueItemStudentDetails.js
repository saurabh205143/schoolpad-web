import React, { useState } from 'react'
import EmployeeProfileImage from '../../../../../images/employee-profile.svg';
import Button from '../../../../../components/Buttons/Button';
import LinkButton from '../../../../../components/Buttons/LinkButton';
import { EmployeeContainer, EmployeeDetailBox, EmployeeDetailBoxLeft, EmployeeDetailBoxLeftData, EmployeeDetailBoxRight, EmployeeDetailHeader, EmployeeDetailInnerData, EmployeeDetails, EmployeeProfile, EmpolyeeDetailsData, IssueItemFooter, IssueItemFooterButtons, IssueItemTable } from '../components/IssueItemHomeStyle';

const IssueItemStudentDetails = () => {

  const [showViewIssueItemHistory, setShowViewIssueItemHistory] = useState();

  const hideViewIssueItemHistoryModal = () => {
    setShowViewIssueItemHistory(false);
  }

  return (
    <>
      {/* Empolyee Details  */}
      <EmployeeDetailHeader>
        <h6>Employee Details</h6>
      </EmployeeDetailHeader>
      <EmployeeDetailBox>
        <EmployeeContainer>
          <EmployeeDetailBoxLeft>
            <EmployeeDetails>
              <EmpolyeeDetailsData>
                <EmployeeDetailInnerData>
                  <EmployeeDetailBoxLeftData>
                    <h6>Name</h6>
                    <span>Amit Sharma</span>
                  </EmployeeDetailBoxLeftData>
                  <EmployeeDetailBoxLeftData>
                    <h6>Designation</h6>
                    <span>Lab Incharge</span>
                  </EmployeeDetailBoxLeftData>
                </EmployeeDetailInnerData>
                <EmployeeDetailInnerData>
                  <EmployeeDetailBoxLeftData>
                    <h6>Employee ID</h6>
                    <span>2874564673</span>
                  </EmployeeDetailBoxLeftData>
                  <EmployeeDetailBoxLeftData>
                    <h6>Department</h6>
                    <span>Amit Chmistry</span>
                  </EmployeeDetailBoxLeftData>
                </EmployeeDetailInnerData>
                <EmployeeDetailInnerData>
                  <EmployeeDetailBoxLeftData>
                    <h6>E-mail</h6>
                    <span>amitsharma736@gmail.com</span>
                  </EmployeeDetailBoxLeftData>
                  <EmployeeDetailBoxLeftData>
                    <h6>Phone Number</h6>
                    <span>+91 7365 2737 485</span>
                  </EmployeeDetailBoxLeftData>
                </EmployeeDetailInnerData>
              </EmpolyeeDetailsData>
            </EmployeeDetails>
            <EmployeeProfile>
              <img src={EmployeeProfileImage} />
            </EmployeeProfile>
          </EmployeeDetailBoxLeft>
          <EmployeeDetailBoxRight>
            <h6>History</h6>
            <span>Click on the link below to view the history of items issued to Amit Sharma.</span>
            <LinkButton
              linkText='View Issued Item'
              onClick={() => setShowViewIssueItemHistory(!showViewIssueItemHistory)}
            />
          </EmployeeDetailBoxRight>
        </EmployeeContainer>
      </EmployeeDetailBox>

      {/* Issue New Items - Table */}
      <EmployeeDetailHeader>
        <h6>Issue New Item(s)</h6>
      </EmployeeDetailHeader>
      <IssueItemTable>

      </IssueItemTable>

      {/* Issue New Items - Footer Buttons */}
      <IssueItemFooter>
      <IssueItemFooterButtons>
      <Button
        buttonText='Cancel'
        className={'link-button-black'}
      />
      <Button
        buttonText={'Submit'}
        className={'primary'}
      />
      </IssueItemFooterButtons>
      </IssueItemFooter>

      {/* View Issue Item - History  */}
      {/* <ViewIssueItemHistory
            show={showViewIssueItemHistory}
            handleClose={hideViewIssueItemHistoryModal}
      /> */}
    </>

  )
}

export default IssueItemStudentDetails;