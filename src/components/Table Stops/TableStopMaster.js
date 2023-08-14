import React, {useState} from 'react';
import TableData from './TableData';
import { ActionsConatiner, ActionsList, MoreAction, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from './TableStyles';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import LinkButton from '../Buttons/LinkButton';
import DropIcon from '../../images/drop-arrow-icon.svg';
import Button from '../Buttons/Button';
import DeleteRouteModal from '../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';


const TableStopMaster = ({onClick,heading,EditOnclick}) => {

    const [showModal, setShowDeleteModal] = useState(false);

    const hideDeleteModal = () => {
        setShowDeleteModal(false);
    }

    // get table column
    const column = Object.keys(TableData[0]);
    // get table heading data
    const ThData = () => {
        return column.map((data) => {
            return <TableHeading key={data}>{data}</TableHeading>
        })
    }
    // get table row data
    const tdData = () => {

        return TableData.map((data) => {
            return (
                <TableRow
                >
                    {
                        column.map((v) => {
                            return <Tabledata>{data[v]}</Tabledata>
                        })
                    }
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <Button
                                    buttonText='1 Students(s)'
                                    className='link-button'
                                    onClick={onClick}
                                />
                            </ActionsList>

                        </ActionsConatiner>
                    </Tabledata>
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <LinkButton
                                    onlyIcon={EditIcon}
                                    tooltiptext='Edit'
                                    onClick={()=>{EditOnclick(data[' S No.'])}}
                                />
                            </ActionsList>
                            <ActionsList>
                                <LinkButton
                                    onlyIcon={DeleteIcon}
                                    tooltiptext='Delete'
                                    onClick={() => setShowDeleteModal(!showModal)} 
                                />
                            </ActionsList>
                            <ActionsList>
                                <MoreAction>
                                    <Button
                                        buttonText='More'
                                        rightIcon={DropIcon}
                                        className='link-button'
                                    />
                                </MoreAction>
                            </ActionsList>
                        </ActionsConatiner>
                    </Tabledata>
                </TableRow>
            )
        })
    }
              {/* Delete Modal */}
              <DeleteRouteModal
              show={showModal}
              handleClose={hideDeleteModal}
              />
    return (
        <TableContainer className="table">
            <TableHead>
                <TableRow>
                    {ThData()}
                    <TableHeading
                    >{heading}</TableHeading>
                    <TableHeading>Actions</TableHeading>
                </TableRow>
            </TableHead>
            <TableBody>
                {tdData()}
            </TableBody>
        </TableContainer>
    )
}


export default TableStopMaster;