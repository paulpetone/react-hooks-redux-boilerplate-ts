const fetch = require(`node-fetch`)
const path = require("path")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
  const resultData = await result.json()
  createNode({
    // fields to fetch
    nameWithOwner: resultData.full_name,
    url: resultData.html_url,
    anyOtherData: {
      hi: 'hola',
      owner: resultData.owner
    },
    // required fields
    id: `example-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData),
    },
  })
}

function getDynamicRoutes(routeFilePath = `src/Routes`) {
  const routesFile = require(path.resolve(routeFilePath))

  const routeKeys = Object.keys(routesFile)
  const staticRouteKeys = routeKeys.filter(route => {
    const childKeys = Object.keys(routesFile[route])
    return childKeys.includes("path") || childKeys.includes("matchPath")
  })
  const staticRoutes = staticRouteKeys.reduce(
    (acc, route) => ({
      ...acc,
      [route]: routesFile[route]
    }),
    {}
  )

  const { ROUTE_ENV, BUILD_ENV, NODE_ENV } = process.env
  const environment = ROUTE_ENV || BUILD_ENV || NODE_ENV || "development"

  const dynamicRoutes = routesFile[environment] || {}
  const routes = Object.assign({}, staticRoutes, dynamicRoutes)

  return {
    routes,
    environment
  }
}

exports.createPages = ({ actions, reporter }, { routeFilePath }) => {
  const { routes, environment } = getDynamicRoutes(routeFilePath)
  reporter.info(
    `Will use '${environment}' env and creating this route keys: ${Object.keys(
      routes
    )}`
  )

  const activity = reporter.activityTimer(`Dynamic routes created`)
  activity.start()

  const { createPage } = actions
  Object.keys(routes).map(routeKey => {
    const route = routes[routeKey]
    reporter.info(`Creating route: ${route.path}`)
    
    createPage({
      matchPath: route.matchPath,
      path: route.path,
      component: path.resolve(route.component)
    })
  })
  activity.end()
}

exports.onCreateWebpackConfig = ({ actions, plugins }, { routeFilePath }) => {
  const { routes } = getDynamicRoutes(routeFilePath)

  const ROUTES = Object.keys(routes).reduce((acc, routeKey) => {
    acc[routeKey] = routes[routeKey]
    return acc
  }, {})

  actions.setWebpackConfig({
    plugins: [plugins.define({ ROUTES: JSON.stringify(ROUTES) })]
  })
}