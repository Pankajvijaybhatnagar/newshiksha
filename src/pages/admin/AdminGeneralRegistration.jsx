import React from 'react'
import { Layout } from '../../layouts/Layout'
import Sidebar from '../../components/admin/Sidebar'
import AdminLayout from '../../components/admin/AdminLayout'
import TablePage from './TablePage'
import { GeneralRegistrationTable } from '../../components/admin/GeneralRegistrationTable'

const AdminGeneralRegistration = () => {
  return (
    
        <Layout>
            <div style={{paddingTop:'5.6rem'}} className=' d-flex w-full'>
                <AdminLayout>
                    <GeneralRegistrationTable />
                </AdminLayout>
                
            </div>

        </Layout>
    
  )
}

export default AdminGeneralRegistration