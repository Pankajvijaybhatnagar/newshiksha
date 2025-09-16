import React from 'react'
import { Layout } from '../../layouts/Layout'
import Sidebar from '../../components/admin/Sidebar'
import AdminLayout from '../../components/admin/AdminLayout'
import { VolunteerTable } from '../../components/admin/VolunteerTable'
import { OrganizerRegistrationTable } from '../../components/admin/OrganizerRegistrationTable'

const AdminOrganizerRegistration = () => {
  return (
    
        <Layout>
            <div style={{paddingTop:'5.6rem'}} className=' d-flex w-full'>
                <AdminLayout>
                    <OrganizerRegistrationTable />
                </AdminLayout>
                
            </div>

        </Layout>
    
  )
}

export default AdminOrganizerRegistration