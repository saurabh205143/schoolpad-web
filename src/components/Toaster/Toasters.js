import React, { useState } from 'react'

//Assets

import Layout from '../Layouts/Layout';
import SubHeader from '../ScreensHeader/SubHeader';
import ToasterItem from './ToasterItem';


const Toasters = () => {

  const [showModal, setShowModal] = useState(false);
  const [showMoveItemModal, setShowMoveItemModal] = useState(false);


  return(
    <>
    <Layout>
      <SubHeader
          heading='Toaster Styles'
          type='horizontal' 
          buttonAdd='Add New Store'
          buttonOrders='Move Items'  
          onClick={() =>  setShowModal(!showModal)}
          buttonOrderDragList={() => setShowMoveItemModal(!showMoveItemModal)}
      />
      

      <ToasterItem type='error'></ToasterItem>
      <ToasterItem type='successful'></ToasterItem>
      <ToasterItem type='warning'></ToasterItem>
    </Layout>
    </>

  )
}

export default Toasters;