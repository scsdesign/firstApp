import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Learn to code React</h1>
    <p>This a totally new sentence </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Watch Video </Link>
  </Layout>
)

export default IndexPage


