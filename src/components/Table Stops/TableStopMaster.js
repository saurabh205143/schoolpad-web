import React, {useEffect} from 'react';
import TableData from './TableData';
import { ActionsConatiner, ActionsList, MoreAction, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from './TableStyles';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import LinkButton from '../Buttons/LinkButton';
import DropIcon from '../../images/drop-arrow-icon.svg';
import Button from '../Buttons/Button';
import AvatarIcon from '../../images/avatar-icon.svg';

const TableStopMaster = (props) => {

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
                                <LinkButton
                                    linkText='1 Students(s)'
                                    onlyIcon={AvatarIcon}
                                    paddingRight="8px"
                                />
                            </ActionsList>

                        </ActionsConatiner>
                    </Tabledata>
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <LinkButton
                                    onlyIcon={EditIcon}
                                />
                            </ActionsList>
                            <ActionsList>
                                <LinkButton
                                    onlyIcon={DeleteIcon}
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
    return (
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
    )
}

export default TableStopMaster;