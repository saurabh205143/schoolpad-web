import React from 'react';
import { StudentHistoryDataBottom, StudentViewIssueHistory, StudentViewIssueHistoryBottom, ViewHistoryConatinterLeft, ViewHistoryConatinterRight } from '../components/IssueItemHomeStyle';

const StudentViewHistoryData = props => {

  return (
    <>
      <StudentViewIssueHistory>
        <ViewHistoryConatinterLeft>
          <span>Receipt No.</span>
          <span>Dated</span>
          <span>Issued to</span>
        </ViewHistoryConatinterLeft>
        <ViewHistoryConatinterRight>
          <span>: RN-1200JUN-2023</span>
          <span>: 12/06/2023</span>
          <span>: Amit Sharma</span>
        </ViewHistoryConatinterRight>
      </StudentViewIssueHistory>
      <StudentViewIssueHistoryBottom>
        <h6>Items included:</h6>
        <StudentHistoryDataBottom>
          <span>1. Laptops [2 Qty.]</span>
          <span>2. Speaker [1 Qty.]</span>
          <span>3. Projector [1 Qty.]</span>
        </StudentHistoryDataBottom>
      </StudentViewIssueHistoryBottom>
      <StudentViewIssueHistoryBottom>
        <span>Do you want to issue the above items?</span>
        </StudentViewIssueHistoryBottom>
    </>
  );
};

export default StudentViewHistoryData;