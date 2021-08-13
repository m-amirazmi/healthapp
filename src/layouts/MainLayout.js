import React from 'react'
import { Container } from 'reactstrap'
import { TopNav } from '../components/TopNav'

export const MainLayout = (props) => {

  const { children } = props

  return (
    <>
      <TopNav />
      <Container className="mt-3">
        {children}
      </Container>
    </>
  )
}
