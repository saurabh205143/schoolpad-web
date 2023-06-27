import React from 'react'
import { TableBody, TableContainer, TableHead, TableHeading,Tabledata, TableRow } from '../../../../../components/Table/TableStyles';
import Input from '../../../../../components/Inputs/Input';

const options = [
    {
        value: 1,
        label: "Class Wise"
    },
    {
        value: 2,
        label: "Admission No"
    }
];

const MappingTable = (props) => {
  return (
    <TableContainer>
        <TableHead>
            <TableRow>
                <TableHeading>S No.</TableHeading>
                <TableHeading>Admission No.</TableHeading>
                <TableHeading>Student Name</TableHeading>
                <TableHeading>Select Route</TableHeading>
                <TableHeading>Pickup Stop</TableHeading>
                <TableHeading>Drop Stop</TableHeading>
                <TableHeading>Assigned</TableHeading>
                <TableHeading>Fees</TableHeading>
            </TableRow>
        </TableHead>
        <TableBody>
             <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
            <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
            <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
            <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
            <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
            <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
            <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
            <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
            <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
            <TableRow>
                <Tabledata>1</Tabledata>
                <Tabledata>0000007800</Tabledata>
                <Tabledata>Jane Rotanson</Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="select"
                        options={options}
                        placeholder={'--Select--'}
                        onChange={()=>{

                        }}
                    />
                </Tabledata>
                <Tabledata>
                    <Input
                        type="text"
                        placeholder={'Fees'}
                    />
                </Tabledata>
            </TableRow> 
        </TableBody>
    </TableContainer>
  );
}

export default MappingTable;