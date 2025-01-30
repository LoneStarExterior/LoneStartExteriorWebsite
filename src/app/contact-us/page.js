import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ContactUs from '../sections/ContactUs'

export default function page() {
  return (
    <>
    <Breadcrumb name={'Contact Us'}  />
    <ContactUs />
    </>
  )
}
