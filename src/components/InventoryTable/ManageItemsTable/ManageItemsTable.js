import React, {useState} from 'react';
import { ActionsConatiner, TableActionHeading, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata, Tabledatatext } from '../../Table/TableStyles';
import TableStylesStatus, { ActionsList } from '../../Table copy/TableStyles';
import LinkButton from '../../Buttons/LinkButton';

// Assets
import EditIcon from '../../../images/edit-icon.svg';
import DeleteIcon from '../../../images/delete-icon.svg';
import Button from '../../Buttons/Button';
import AddItems from '../../../views/main/InventoryModule/ManageItems/components/AddItems';
import DeleteRouteModal from '../../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';
import CategoriesList from '../CategoriesList';

const ManageItemsTable = ({ onClick }) => {
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showcategoryList, setShowCategoryList]= useState();

    const hideDeleteModal = () => {
        setShowDeleteModal(false);
    }
    
    const hideModal = () => {
        setShowModal(false);
    }

    const hideCategoryListModal = () => {
        setShowCategoryList(false);
    }

    return (
        <>
            <TableContainer className='picked-table'>
                <TableHead>
                    <TableRow>
                        <TableHeading>S No.</TableHeading>
                        <TableHeading>Item Name</TableHeading>
                        <TableHeading>Purchase Cost</TableHeading>
                        <TableHeading>Unit(s)</TableHeading>
                        <TableHeading>
                        <TableActionHeading>
                            Categories
                        </TableActionHeading>
                        </TableHeading>
                        <TableHeading>Store Name</TableHeading>
                        <TableHeading>Type</TableHeading>
                        <TableHeading>
                            <TableActionHeading>
                                Actions
                            </TableActionHeading>
                            </TableHeading>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <Tabledata>
                            1
                        </Tabledata>
                        <Tabledata>
                            Paper A4
                        </Tabledata>
                        <Tabledata>
                            ₹ 300
                        </Tabledata>
                        <Tabledata>
                            Pieces
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='8 Categories'
                                        className='link-button'
                                        onClick={() => setShowCategoryList(!showcategoryList)}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Awards/Gifts Room
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-consumable'
                                statusType='CONSUMABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            2
                        </Tabledata>
                        <Tabledata>
                            Dettol Soap
                        </Tabledata>
                        <Tabledata>
                            ₹ 70
                        </Tabledata>
                        <Tabledata>
                            Pieces
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Sports Equipments Room
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-non-consumable'
                                statusType='NON CONSUMABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            3
                        </Tabledata>
                        <Tabledata>
                            Paper A4
                        </Tabledata>
                        <Tabledata>
                            ₹ 400
                        </Tabledata>
                        <Tabledata>
                            Kilograms
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Kitchen Store Room
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-returnable'
                                statusType='RETURNABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            4
                        </Tabledata>
                        <Tabledata>
                            Basket Ball Net
                        </Tabledata>
                        <Tabledata>
                            ₹ 900
                        </Tabledata>
                        <Tabledata>
                            Litres
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Awards/Gifts Room
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-returnable'
                                statusType='RETURNABLE'
                            ></TableStylesStatus>
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <LinkButton
                                        onlyIcon={EditIcon}
                                        tooltiptext='Edit'
                                    // onClick={() => setShowModal(!showModal)}
                                    />
                                </ActionsList>
                                <ActionsList>
                                    <LinkButton
                                        onlyIcon={DeleteIcon}
                                        tooltiptext='Delete'
                                    // onClick={() => setShowDeleteModal(!showModal)}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            5
                        </Tabledata>
                        <Tabledata>
                            Paper A4
                        </Tabledata>
                        <Tabledata>
                            ₹ 30
                        </Tabledata>
                        <Tabledata>
                            Pieces
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Computer Store Room
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-non-consumable'
                                statusType='NON CONSUMABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            6
                        </Tabledata>
                        <Tabledata>
                            Paper A4
                        </Tabledata>
                        <Tabledata>
                            ₹ 100
                        </Tabledata>
                        <Tabledata>
                            Litres
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Awards/Gifts Room
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-consumable'
                                statusType='CONSUMABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            7
                        </Tabledata>
                        <Tabledata>
                            Table Duster
                        </Tabledata>
                        <Tabledata>
                            ₹ 320
                        </Tabledata>
                        <Tabledata>
                            Pieces
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Route 12
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-non-consumable'
                                statusType='NON CONSUMABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            8
                        </Tabledata>
                        <Tabledata>
                            Trophy Large
                        </Tabledata>
                        <Tabledata>
                            ₹ 380
                        </Tabledata>
                        <Tabledata>
                            Litres
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Gifts Room
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-consumable'
                                statusType='CONSUMABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            9
                        </Tabledata>
                        <Tabledata>
                            Washing Powder
                        </Tabledata>
                        <Tabledata>
                            ₹ 100
                        </Tabledata>
                        <Tabledata>
                            Kilograms
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Electronics Room
                        </Tabledata>
                        <Tabledata>
                        <TableStylesStatus type='item-type-non-consumable'
                                statusType='NON CONSUMABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            10
                        </Tabledata>
                        <Tabledata>
                            Face Mask
                        </Tabledata>
                        <Tabledata>
                            ₹ 330
                        </Tabledata>
                        <Tabledata>
                            Kilograms
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Awards Room
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-consumable'
                                statusType='CONSUMABLE'
                            >
                            </TableStylesStatus>
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <LinkButton
                                        onlyIcon={EditIcon}
                                        tooltiptext='Edit'
                                    // onClick={() => setShowModal(!showModal)}
                                    />
                                </ActionsList>
                                <ActionsList>
                                    <LinkButton
                                        onlyIcon={DeleteIcon}
                                        tooltiptext='Delete'
                                    // onClick={() => setShowDeleteModal(!showModal)}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            11
                        </Tabledata>
                        <Tabledata>
                            Paper A4
                        </Tabledata>
                        <Tabledata>
                            ₹ 370
                        </Tabledata>
                        <Tabledata>
                            Pieces
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={() => setShowCategoryList(!showcategoryList)}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Electronics Room
                        </Tabledata>
                        <Tabledata>
                        <TableStylesStatus type='item-type-consumable'
                                statusType='CONSUMABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>
                            12
                        </Tabledata>
                        <Tabledata>
                            Face Shield
                        </Tabledata>
                        <Tabledata>
                            ₹ 270
                        </Tabledata>
                        <Tabledata>
                            Kilograms
                        </Tabledata>
                        <Tabledata>
                            <ActionsConatiner>
                                <ActionsList>
                                    <Button
                                        buttonText='1 Categories'
                                        className='link-button'
                                        onClick={onClick}
                                    />
                                </ActionsList>
                            </ActionsConatiner>
                        </Tabledata>
                        <Tabledata>
                            Awards/Gifts Room
                        </Tabledata>
                        <Tabledata>
                            <TableStylesStatus type='item-type-consumable'
                                statusType='CONSUMABLE'
                            >
                            </TableStylesStatus>
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
                            </ActionsConatiner>
                        </Tabledata>
                    </TableRow>
                </TableBody>
            </TableContainer>


            {/* Edit Items Modal */}
            <AddItems
            show={showModal}
            handleClose={hideModal}
            />

            {/* Delete Modal */}
            <DeleteRouteModal
            show={showDeleteModal}
            handleClose={hideDeleteModal}
            />
        </>
    );
}

export default ManageItemsTable;