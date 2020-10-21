import Layout from '@components/layout'
import SEO from '@components/seo'

export default () => (
  <Layout className="dynamic" title="This page was created on gatsby-node.js">
    <SEO
      description="This page was created on gatsby-node.js"
      meta={[]}
      lang="lang"
      title="title"
    />
    <div className="about">This page was created on gatsby-node.js!</div>
  </Layout>
)
