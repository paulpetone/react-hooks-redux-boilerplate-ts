import ExampleList from '@components/pageComponents/example/exampleList'
import Layout from '@components/layout'
import SEO from '@components/seo'

export default () => (
  <Layout title="Example page" className="example-page">
    <SEO
      description="Example Page"
      meta={[]}
      lang="lang"
      title="title"
    />
    <ExampleList />
  </Layout>
)
