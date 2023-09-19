import React from 'react'
import { EmployeeContainer, EmployeeDetailBox,EmployeeDetailBoxLeftData, EmployeeDetailHeader, EmployeeDetailInnerData, EmployeeDetails, EmployeeProfile, EmpolyeeDetailsData, IssueItemTable, ReturnEmployeeDetailBoxLeft } from '../../../Issue Items/components/IssueItemHomeStyle';
import EmployeeProfileImage from '../../../../../../images/employee-profile.svg';
import StudentReturnItemTable from './StudentReturnItemTable';

const ReturnItemStudentDetails = () => {

  return (
    <>
      {/* Empolyee Details  */}
      <EmployeeDetailHeader>
        <h6>Student Details</h6>
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
                    <h6>Mother Name</h6>
                    <span>Amita Sharma</span>
                  </EmployeeDetailBoxLeftData>
                </EmployeeDetailInnerData>
                <EmployeeDetailInnerData>
                  <EmployeeDetailBoxLeftData>
                    <h6>Registration No.</h6>
                    <span>2023V811121217</span>
                  </EmployeeDetailBoxLeftData>
                  <EmployeeDetailBoxLeftData>
                    <h6>Father Name</h6>
                    <span>Ramit Sharma</span>
                  </EmployeeDetailBoxLeftData>
                </EmployeeDetailInnerData>
                <EmployeeDetailInnerData>
                  <EmployeeDetailBoxLeftData>
                    <h6>Class</h6>
                    <span>V B</span>
                  </EmployeeDetailBoxLeftData>
                  <EmployeeDetailBoxLeftData>
                    <h6>Father's Phone Number</h6>
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

      {/* Return New Items - Table */}
      <EmployeeDetailHeader>
        <h6>Return Item(s)</h6>
      </EmployeeDetailHeader>
      <IssueItemTable>
        <StudentReturnItemTable/>
      </IssueItemTable>
    </>

  )
}

export default ReturnItemStudentDetails;