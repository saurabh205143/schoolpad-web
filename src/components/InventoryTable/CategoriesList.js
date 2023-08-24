import React, {useEffect, useState} from 'react';
import { TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata, Tabledatatext } from '../Table/TableStyles';
import { ModalBodyConatiner } from '../../views/main/TransportModule/TransportRoute/components/AddRouteStyles';
import axios from 'axios';
import config from '../../config';


const CategoriesList = ({ onClick,storeid, setstoreid }) => {
    const [Categorylist, setCategoryList] = useState('');
    console.log({ storeid });
    if (storeid) {
        const baseURL = config.baseUrl;
                const fetchCountstoreURL = baseURL +"api/v1/inventory/category";
                axios.get(fetchCountstoreURL, {
                params:
                    { offset: 0, store_id:storeid}
                }).then((resp) => {
                    if (resp.details != '')
                    {
                        setCategoryList(resp.data);
                    }
                    
                    setstoreid(0);
                });
    }
    return (
        <>
        <ModalBodyConatiner>
            <TableContainer className='picked-table'>
                <TableHead>
                    <TableRow>
                        <TableHeading>S No.</TableHeading>
                        <TableHeading>Category Name</TableHeading>
                        <TableHeading>Category Code</TableHeading>
                    </TableRow>
                </TableHead>
                    <TableBody>
                    { Array.isArray(Categorylist)?Categorylist.map((item, i) => {
                    return (
                    <TableRow>
                        <Tabledata>
                            <Tabledatatext>
                               {++i}
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                            {item.categoryName}
                            </Tabledatatext>
                        </Tabledata>
                        <Tabledata>
                            <Tabledatatext>
                                {item.categoryCode}
                            </Tabledatatext>
                        </Tabledata>
                        </TableRow>
                    );
          }): null}
                    {/* <TableRow>
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
                    </TableRow> */}
                </TableBody>
            </TableContainer>
            </ModalBodyConatiner>
        </>
    );
}

export default CategoriesList;