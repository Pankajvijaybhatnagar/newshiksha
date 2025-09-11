import React, { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { Layout } from '../../layouts/Layout'

const AdminSettings = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
  })

  const [errors, setErrors] = useState({
    oldPassword: '',
    newPassword: '',
    submit: '',
  })

  const [loading, setLoading] = useState(false)

  const validate = () => {
    let valid = true
    const newErrors = { oldPassword: '', newPassword: '', submit: '' }

    if (!formData.oldPassword) {
      newErrors.oldPassword = 'Current password is required'
      valid = false
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required'
      valid = false
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'New password must be at least 6 characters'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setErrors((prev) => ({
      ...prev,
      [name]: '',
      submit: '',
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setErrors((prev) => ({ ...prev, submit: '' }))

    try {
      // Simulate API call to change password
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form on success
      setFormData({ oldPassword: '', newPassword: '' })
      setErrors((prev) => ({
        ...prev,
        submit: 'Failed to change password. Please try again.',
      }))   
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: 'Failed to change password. Please try again.',
      }))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div style={{ paddingTop: '5.6rem' }} className="d-flex w-full">
        <AdminLayout>
          <div className="mt-5 px-3" style={{ maxWidth: '600px' }}>
            <h5>Change Password</h5>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="oldPassword" className="form-label">
                  Current Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  className={`form-control ${errors.oldPassword ? 'is-invalid' : ''}`}
                  value={formData.oldPassword}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.oldPassword && (
                  <div className="invalid-feedback ">{errors.oldPassword}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                  value={formData.newPassword}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.newPassword && (
                  <div className="invalid-feedback ">{errors.newPassword}</div>
                )}
              </div>

              {errors.submit && (
                <div className="text-danger mb-1" role="alert">
                  {errors.submit}
                </div>
              )}

              <button type="submit" className="btn btn-danger" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </button>
            </form>
          </div>
        </AdminLayout>
      </div>
    </Layout>
  )
}

export default AdminSettings