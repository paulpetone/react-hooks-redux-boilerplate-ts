import Layout from '@components/layout'
import SEO from '@components/seo'

export default () => (
  <Layout className="dynamic" title="Dynamic route example">
    <SEO
      description="Dynamic Route example"
      meta={[]}
      lang="lang"
      title="title"
    />
    <div className="about">Dynamic route example!</div>
  </Layout>
)
