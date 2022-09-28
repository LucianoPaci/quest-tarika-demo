import * as React from 'react'

import { Outlet, Link, useRoutes } from 'react-router-dom'
import TarikaGlue from './TarikaGlue/TarikaGlue'

export default function App() {
  let routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <TarikaGlue /> },
        {
          path: '/tickets',
          element: <TarikaGlue />,
        },
        {
          path: '/projects',
          element: <TarikaGlue />,
        },
        {
          path: '/workorders',
          element: <TarikaGlue />,
        },
        {
          path: '/invoices',
          element: <TarikaGlue />,
        },
        { path: '*', element: <NoMatch /> },
      ],
    },
  ]

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes)

  return <>{element}</>
}

function Layout() {
  return (
    <>
      <Outlet />
    </>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
