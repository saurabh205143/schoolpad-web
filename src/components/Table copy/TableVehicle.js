import React, {useState} from 'react';
import TableData from './TableData';
import { ActionListStatus, ActionsConatiner, ActionsList, MoreAction, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from './TableStyles';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import LinkButton from '../Buttons/LinkButton';
import DropIcon from '../../images/drop-arrow-icon.svg';
import Button from '../Buttons/Button';
import AddRoutes from '../../views/main/TransportModule/TransportRoute/components/AddRoutes';
import DeleteRouteModal from '../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';

const Table = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const hideModal = () => {
        setShowModal(false);
    }

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
                                <ActionListStatus>
                                <span>IN SERVICE</span>
                                </ActionListStatus>
                            </ActionsList>
                        </ActionsConatiner>
                    </Tabledata>
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <LinkButton
                                    onlyIcon={EditIcon}
                                    tooltiptext='Edit'
                                    onClick={() => setShowModal(!showModal)}
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
                                        onClick={() => setShowDeleteModal(!showModal)}
                                    />
                                </MoreAction>
                            </ActionsList>
                        </ActionsConatiner>
                    </Tabledata>
                </TableRow>
            )
        })
        
    }

    return (
        <>
        <TableContainer className="table">
            <TableHead>
                <TableRow>
                    {ThData()}
                    <TableHeading
                    >{props.heading}</TableHeading>
                    <TableHeading>Actions</TableHeading>
                </TableRow>
            </TableHead>
            <TableBody>
                {tdData()}
            </TableBody>
        </TableContainer>

        {/* Edit Vehicle Modal */}
        <AddRoutes
        show={showModal}
        handleClose={hideModal}
        />

        {/* Delete Modal */}
        <DeleteRouteModal
        show={showDeleteModal}
        handleClose={hideDeleteModal}
        />
        </>
    )
}

export default Table;