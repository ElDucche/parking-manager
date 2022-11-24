import { PageProps } from "gatsby"
import { Layout } from '../components/layout'
import * as React from 'react'
import { useEffect, useState } from "react"

const IndexPage = () => {
  return (
      <Layout>
        <div className="w-96 h-[24rem] p-2 bg-white/20 backdrop-blur-md mx-auto rounded-lg">
           <h2>Your car information :</h2><div className="p-4">
              <h3>Floor: </h3>
              <h3> Slot number: </h3>
              <button> I'm leaving !</button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Park here</h2>
            </div>
        </div>
      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Parking Manager</title>
