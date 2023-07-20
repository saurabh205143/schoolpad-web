import React from 'react';
import { TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata, Tabledatatext } from '../Table/TableStyles';

const CategoriesList = ({ onClick }) => {

    return (
        <>
            <TableContainer className='picked-table'>
                <TableHead>
                    <TableRow>
                        <TableHeading>S No.</TableHeading>
                        <TableHeading>Category Name</TableHeading>
                        <TableHeading>Category Code</TableHeading>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <Tabledata>
                            <Tabledatatext>
                                1
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            Wooden
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                                K00256
                            </Tabledatatext>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <Tabledatatext>
                                2
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            Electronics
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            L00209
                            </Tabledatatext>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <Tabledatatext>
                                3
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            Sports Equipment
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            PYS836
                            </Tabledatatext>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <Tabledatatext>
                                4
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            Baby Gifts
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                                K00256
                            </Tabledatatext>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <Tabledatatext>
                                5
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            Baby Net
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            AA0258
                            </Tabledatatext>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <Tabledatatext>
                                6
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            Toy Cars
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            PQW002
                            </Tabledatatext>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <Tabledatatext>
                                7
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                                Jane Rotanson
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            NHK836
                            </Tabledatatext>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            <Tabledatatext>
                                8
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            Clay Material
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            MJH781
                            </Tabledatatext>
                        </Tabledata>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </>
    );
}

export default CategoriesList;