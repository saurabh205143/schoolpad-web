import React from 'react';
import { TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata, Tabledatatext  } from '../Table/TableStyles';
import Button from '../Buttons/Button';
import AvatarIcon from '../../images/avatar-icon.svg';

const StudentList = ({onClick}) => {

    return (
        <>
            <TableContainer className='picked-table'>
                <TableHead>
                    <TableRow>
                        <TableHeading>Student Name</TableHeading>
                        <TableHeading>Actions</TableHeading>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <Tabledata>
                            <img src={AvatarIcon}/>
                            <Tabledatatext>
                            Jane Rotanson
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            /></Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <img src={AvatarIcon}/>
                            <Tabledatatext>
                            Salman Ansari
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            /></Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <img src={AvatarIcon}/>
                            <Tabledatatext>
                            Jatin Sharma
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            /></Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <img src={AvatarIcon}/>
                            <Tabledatatext>
                            Aditya Roy
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            /></Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <img src={AvatarIcon}/>
                            <Tabledatatext>
                            Sheena Arora
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            /></Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <img src={AvatarIcon}/>
                            <Tabledatatext>
                            Ankita Sharma
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            /></Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <img src={AvatarIcon}/>
                            <Tabledatatext>
                            Rishab Aggarwal
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            /></Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <img src={AvatarIcon}/>
                            <Tabledatatext>
                            Harvinder Kaur
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            /></Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <img src={AvatarIcon}/>
                            <Tabledatatext>
                            Nandini Sharma
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            /></Tabledata>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </>
    );
}

export default StudentList;