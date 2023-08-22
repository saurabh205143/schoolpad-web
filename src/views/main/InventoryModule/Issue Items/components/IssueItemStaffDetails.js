import React, { useState } from 'react'
import { EmployeeDetailBox, EmployeeDetailBoxLeft, EmployeeDetailBoxLeftData, EmployeeDetailHeader } from './IssueItemHomeStyle';

const IssueItemStaffDetails = () => {

  return (
    <>
      <EmployeeDetailHeader>
        <h6>Employee Details</h6>
      </EmployeeDetailHeader>
      <EmployeeDetailBox>
        <EmployeeDetailBoxLeft>
          <EmployeeDetailBoxLeftData>
            <h6>Name</h6>
            <span>Kashish Agrahari</span>
          </EmployeeDetailBoxLeftData>
          <EmployeeDetailBoxLeftData>
            <h6>Name</h6>
            <span>Kashish Agrahari</span>
          </EmployeeDetailBoxLeftData>
        </EmployeeDetailBoxLeft>
      </EmployeeDetailBox>
    </>

  )
}

export default IssueItemStaffDetails;