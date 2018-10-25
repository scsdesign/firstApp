import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className ="Hero">
      <div className="HeroGroup">
      <h1>Learn to design<br />and code React</h1>
      <p>This a totally new sentence </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Watch Video </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage


