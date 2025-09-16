import React from 'react'
import { Layout } from '../../layouts/Layout'
import Sidebar from '../../components/admin/Sidebar'
import AdminLayout from '../../components/admin/AdminLayout'
import { TalentRegistrationTable } from '../../components/admin/TalentRegistrationTable'

const AdminTalentRegistration = () => {
  return (
    
        <Layout>
            <div style={{paddingTop:'5.6rem'}} className=' d-flex w-full'>
                <AdminLayout>
                    <TalentRegistrationTable />
                </AdminLayout>
                
            </div>

        </Layout>
    
  )
}

export default AdminTalentRegistration