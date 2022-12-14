/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const fetchingMap = (key) => {
  const map = {
    '/workorders': 'posts',
    '/invoices': 'comments',
    '/tickets': 'albums',
    '/projects': 'users',
  }

  return map[key] || 'posts'
}

const useTarikaGlue = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://jsonplaceholder.typicode.com/${fetchingMap(
        location.pathname
      )}?_limit=15`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`)
        }
        return response.json()
      })
      .then((actualData) => setData(actualData))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [location.pathname])

  let fns = {}
  return { data: { data, error, loading }, fns }
}

export default useTarikaGlue
