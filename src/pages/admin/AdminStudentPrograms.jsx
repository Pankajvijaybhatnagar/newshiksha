import React from 'react'
import { Layout } from '../../layouts/Layout'
import AdminLayout from '../../components/admin/AdminLayout'
import { StudentProgramsTable } from '../../components/admin/StudentProgramsTable'

const AdminStudentPrograms = () => {
  return (
    
        <Layout>
            <div style={{paddingTop:'5.6rem'}} className=' d-flex w-full'>
                <AdminLayout>
                    <StudentProgramsTable />
                </AdminLayout>
                
            </div>

        </Layout>
    
  )
}

export default AdminStudentPrograms