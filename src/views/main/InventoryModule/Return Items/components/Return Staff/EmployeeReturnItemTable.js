import React, {useState} from 'react'
import { ActionsConatiner, ActionsList, TableActionHeading, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../../../../../components/Table/TableStyles';
import Button from '../../../../../../components/Buttons/Button';
import TableStylesStatus from '../../../../../../components/Table copy/TableStyles';
import ReturnItemStaffModal from './ReturnItemStaffModal';


const EmployeeReturnItemTable = () => {
    const [showModal, setShowModal] = useState(false);
    
    const hideModal = () => {
        setShowModal(false);
    }

    return (
        <>
        <TableContainer>
            <TableHead>
                <TableRow>
                    <TableHeading>S No.</TableHeading>
                    <TableHeading>Receipt No.</TableHeading>
                    <TableHeading>Issue Date</TableHeading>
                    <TableHeading>Item Name</TableHeading>
                    <TableHeading>Quantity</TableHeading>
                    <TableHeading>Amount</TableHeading>
                    <TableHeading>Amount Status</TableHeading>
                    <TableHeading>
                        <TableActionHeading>
                            Action
                        </TableActionHeading>
                    </TableHeading>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <Tabledata>1</Tabledata>
                    <Tabledata>22/04/2022</Tabledata>
                    <Tabledata>RN-0041</Tabledata>
                    <Tabledata>Laptop[CODE: LAP1998_2021]</Tabledata>
                    <Tabledata>1</Tabledata>
                    <Tabledata>100</Tabledata>
                    <Tabledata>
                        <TableStylesStatus type='item-type-returnable'
                            statusType='PAID'
                        >
                        </TableStylesStatus>
                    </Tabledata>
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <Button
                                    buttonText='Return Item'
                                    className='link-button'
                                    onClick={() => setShowModal(!showModal)}
                                />
                            </ActionsList>
                        </ActionsConatiner>
                    </Tabledata>
                </TableRow>
                <TableRow>
                <Tabledata>2</Tabledata>
                <Tabledata>22/04/2022</Tabledata>
                    <Tabledata>RN-0042</Tabledata>
                    <Tabledata>Speakers[CODE: LAP1998_2021]</Tabledata>
                    <Tabledata>1</Tabledata>
                    <Tabledata>100</Tabledata>
                    <Tabledata>
                        <TableStylesStatus 
                        type='item-type-returnable'
                        statusType='PAID'
                        >
                        </TableStylesStatus>
                    </Tabledata>
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <Button
                                    buttonText='Return Item'
                                    className='link-button'
                                    onClick={() => setShowModal(!showModal)}
                                />
                            </ActionsList>
                        </ActionsConatiner>
                    </Tabledata>
                </TableRow>
                <TableRow>
                <Tabledata>3</Tabledata>
                <Tabledata>22/04/2022</Tabledata>
                    <Tabledata>RN-0043</Tabledata>
                    <Tabledata>Projector[CODE: LAP1998_2021]</Tabledata>
                    <Tabledata>1</Tabledata>
                    <Tabledata>100</Tabledata>
                    <Tabledata>
                        <TableStylesStatus type='pending'
                            statusType='PENDING'
                        >
                        </TableStylesStatus>
                    </Tabledata>
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <Button
                                    buttonText='Return Item'
                                    className='link-button'
                                    onClick={() => setShowModal(!showModal)}
                                />
                            </ActionsList>
                        </ActionsConatiner>
                    </Tabledata>
                </TableRow>
            </TableBody>
        </TableContainer>

        <ReturnItemStaffModal
        show={showModal}
        handleClose={hideModal}
        />
        </>
    );
}

export default EmployeeReturnItemTable;