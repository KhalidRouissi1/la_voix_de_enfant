import React from 'react'
import Header from './layout/header'
import {Outlet} from "react-router-dom"

export default function Base() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}
