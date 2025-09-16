import React from 'react'
import { Layout } from '../../layouts/Layout'
import Sidebar from '../../components/admin/Sidebar'
import AdminLayout from '../../components/admin/AdminLayout'
import TablePage from './TablePage'
import { Dashboard } from '../../components/admin/Dashboard'
import { ProjectDisplayTable } from '../../components/admin/ProjectDisplayTable'

const AdminProjectDisplay = () => {
  return (
    
        <Layout>
            <div style={{paddingTop:'5.6rem'}} className=' d-flex w-full'>
                <AdminLayout>
                    <div className=' px-2'>
                        <ProjectDisplayTable/>
                    </div>
                </AdminLayout>
                
            </div>

        </Layout>
    
  )
}

export default AdminProjectDisplay