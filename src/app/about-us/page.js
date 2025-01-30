import React from 'react'
import AboutUs from '../sections/AboutUs'
import Breadcrumb from '../components/Breadcrumb'

export default function page() {
  return (
    <>
    <Breadcrumb name={'About Us'}  />
    <AboutUs />
    </>
  )
}
