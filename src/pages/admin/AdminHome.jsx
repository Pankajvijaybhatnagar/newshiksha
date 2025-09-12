import React from 'react'
import { Layout } from '../../layouts/Layout'
import Sidebar from '../../components/admin/Sidebar'
import AdminLayout from '../../components/admin/AdminLayout'
import TablePage from './TablePage'

const AdminHome = () => {
  return (
    
        <Layout>
            <div style={{paddingTop:'5.6rem'}} className=' d-flex w-full'>
                <AdminLayout>
                    <div className=' px-2'>
                        <TablePage/>
                    </div>
                </AdminLayout>
                
            </div>

        </Layout>
    
  )
}

export default AdminHome