import React from 'react'
import { Layout } from '../../layouts/Layout'
import Sidebar from '../../components/admin/Sidebar'
import AdminLayout from '../../components/admin/AdminLayout'

const AdminHome = () => {
  return (
    
        <Layout>
            <div style={{paddingTop:'6rem'}} className='container-fluid d-flex'>
                <AdminLayout>
                    <div>
                        this is home of admin panel
                    </div>
                </AdminLayout>
                
            </div>

        </Layout>
    
  )
}

export default AdminHome