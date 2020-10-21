import Layout from "@components/layout"
import SEO from "@components/seo"

export default () => (
  <Layout className="about" title="About">
    <SEO description="About boiler" meta={[]} lang="lang" title="title" />
    <div className="about">
      This is a simple boilerplate using redux, react hooks and typescript
    </div>
  </Layout>
)
