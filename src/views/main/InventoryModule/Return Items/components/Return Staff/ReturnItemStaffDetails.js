import React from 'react'
import EmployeeIssueItemTable from '../../../Issue Items/components/EmployeeIssueItemTable';
import { EmployeeContainer, EmployeeDetailBox,EmployeeDetailBoxLeftData, EmployeeDetailHeader, EmployeeDetailInnerData, EmployeeDetails, EmployeeProfile, EmpolyeeDetailsData, IssueItemTable, ReturnEmployeeDetailBoxLeft } from '../../../Issue Items/components/IssueItemHomeStyle';
import EmployeeProfileImage from '../../../../../../images/employee-profile.svg';
import EmployeeReturnItemTable from './EmployeeReturnItemTable';

const ReturnItemStaffDetails = () => {

  return (
    <>
      {/* Empolyee Details  */}
      <EmployeeDetailHeader>
        <h6>Employee Details</h6>
      </EmployeeDetailHeader>
      <EmployeeDetailBox>
        <EmployeeContainer>
          <ReturnEmployeeDetailBoxLeft>
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
              <img src={EmployeeProfileImage}/>
            </EmployeeProfile>
            </ReturnEmployeeDetailBoxLeft>
        </EmployeeContainer>
      </EmployeeDetailBox>

      {/* Issue New Items - Table */}
      <EmployeeDetailHeader>
        <h6>Return Item(s)</h6>
      </EmployeeDetailHeader>
      <IssueItemTable>
        <EmployeeReturnItemTable/>
      </IssueItemTable>
    </>

  )
}

export default ReturnItemStaffDetails;