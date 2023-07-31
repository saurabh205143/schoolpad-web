import React from 'react';
import { ChangeHistoryContainer, HistoryContainer, HistoryItem, HistoryList, LeftContainer, LeftContainerProgressLine, RightContainer } from './ChangeHistoryStyles';

// Assets
import CalendarIcon from '../../../images/calendar.svg';
import ProgressLine from '../../../images/progress-line.svg';
import { ModalBodyConatiner } from '../../../views/main/TransportModule/TransportRoute/components/AddRouteStyles';

const ChangeHistoryList = () => {

  return (
    <>
    <ModalBodyConatiner>
      <HistoryContainer>
        <ChangeHistoryContainer>
          <HistoryList>
            <HistoryItem >
              <LeftContainer>
                <img src={CalendarIcon} alt="Icon" />
                <LeftContainerProgressLine>
                  <img src={ProgressLine} alt="Icon" />
                </LeftContainerProgressLine>
              </LeftContainer>
              <RightContainer>
                <h6>Friday, 31st March 2023</h6>
                <span>Mr. Administrator Added staff abc, abc in Route R 1</span>
              </RightContainer>
            </HistoryItem>
            <HistoryItem >
              <LeftContainer>
                <img src={CalendarIcon} alt="Icon" />
                <LeftContainerProgressLine>
                  <img src={ProgressLine} alt="Icon"/>
                </LeftContainerProgressLine>
              </LeftContainer>
              <RightContainer>
                <h6>Monday, 10th February 2023</h6>
                <span>1. Mr. Administrator Changed vehical number from 32 to 12 for Route SAMBA(32)
                  now vehicle capacity is 40</span>
                <span>2. Mr. Administrator Moved Stop SAMBA II from Route SAMBA(32) to SUPWAL(JK21)</span>
              </RightContainer>
            </HistoryItem>
            <HistoryItem >
              <LeftContainer>
                <img src={CalendarIcon} alt="Icon"/>
                <LeftContainerProgressLine>
                  <img src={ProgressLine} alt="Icon"/>
                </LeftContainerProgressLine>
              </LeftContainer>
              <RightContainer>
                <h6>Monday, 10th February 2023</h6>
                <span>1. Mr. Administrator Changed vehical number from 32 to 12 for Route SAMBA(32)
                  now vehicle capacity is 40</span>
                <span>2. Mr. Administrator Moved Stop SAMBA II from Route SAMBA(32) to SUPWAL(JK21)</span>
              </RightContainer>
            </HistoryItem>
            <HistoryItem >
              <LeftContainer>
                <img src={CalendarIcon} alt="Icon" />
                <LeftContainerProgressLine>
                  <img src={ProgressLine} alt="Icon" />
                </LeftContainerProgressLine>
              </LeftContainer>
              <RightContainer>
                <h6>Thursday, 15th January 2023</h6>
                <span>1. We have sent you an updated circular related to the Timetables ad Attendance,
                  for all the students.
                  now vehicle capacity is 40</span>
                <span>2. Mr. Administrator Moved Stop BORDER ROAD SAMBA from Route NUD(36) to
                  SMAILPUR(20)</span>
                <span>3. Mr. Administrator Changed staff from Administrator, AKHIL THAPPA to
                  Administrator in Route NUD(36)</span>
              </RightContainer>
            </HistoryItem>
            <HistoryItem >
              <LeftContainer>
                <img src={CalendarIcon} alt="Icon"/>
                <LeftContainerProgressLine>
                  <img src={ProgressLine} alt="Icon" />
                </LeftContainerProgressLine>
              </LeftContainer>
              <RightContainer>
                <h6>Saturday, 7th December 2022</h6>
                <span>We have sent you an updated circular related to the Timetables ad Attendance,
                  for all the students.</span>
              </RightContainer>
            </HistoryItem>
            <HistoryItem >
              <LeftContainer>
                <img src={CalendarIcon} alt="Icon" />
                <LeftContainerProgressLine>
                  <img src={ProgressLine} alt="Icon" />
                </LeftContainerProgressLine>
              </LeftContainer>
              <RightContainer>
                <h6>Tuesday, 1st December 2022</h6>
                <span>You have an upcoming event</span>
              </RightContainer>
            </HistoryItem>
            <HistoryItem >
              <LeftContainer>
                <img src={CalendarIcon} alt="Icon"/>
                <LeftContainerProgressLine>
                  <img src={ProgressLine} alt="Icon" />
                </LeftContainerProgressLine>
              </LeftContainer>
              <RightContainer>
                <h6>Saturday, 7th December 2022</h6>
                <span>We have sent you an updated circular related to the Timetables ad Attendance,
                  for all the students.</span>
              </RightContainer>
            </HistoryItem>
          </HistoryList>
        </ChangeHistoryContainer>
      </HistoryContainer>
      </ModalBodyConatiner>
    </>
  );
}

export default ChangeHistoryList;