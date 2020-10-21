module.exports = {
  home: {
    path: '/',
    component: 'src/routesComponents/home/index.tsx',
  },
  about: {
    path: '/about/',
    component: 'src/routesComponents/about/index.tsx',
  },
  pageCreatedAtGatsbyNode: {
    matchPath: '/pageWithUrlParams/*',
    path: '/pageWithUrlParams/',
    component: 'src/routesComponents/pageWithUrlParams/index.tsx',
  },
  example: {
    path: '/example/',
    component: 'src/routesComponents/example/index.tsx',
  },
}
