import React from 'react'
import Layout from '../../../../components/Layouts/Layout';
import ItemsNotFound from '../../../../components/NotFoundItems/ItemsNotFound';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import Table from '../../../../components/Table/Table';

const TransportRoute = () => {
  return (
    <Layout>
        {/* <ItemsNotFound/> */}
        <SubHeader />
        <ExportHeader />
        <Table/>
    </Layout>
  )
}

export default TransportRoute;