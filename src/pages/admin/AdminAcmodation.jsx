import React from 'react'
import { Layout } from '../../layouts/Layout'
import Sidebar from '../../components/admin/Sidebar'
import AdminLayout from '../../components/admin/AdminLayout'
import TablePage from './TablePage'


import { AccommodationTable } from '../../components/admin/AccommodationTable'

const AdminHome = () => {
  return (
    
        <Layout>
            <div style={{paddingTop:'5.6rem'}} className=' d-flex w-full'>
                <AdminLayout>
                    <AccommodationTable />
                </AdminLayout>
                
            </div>

        </Layout>
    
  )
}

export default AdminHome