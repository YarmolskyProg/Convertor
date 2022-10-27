import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import useApi from './hooks/useAPI.js'
import './index.scss'
function App(props) {
  const { loading, data } = useApi('https://cdn.cur.su/api/nbu.json')
  if (loading) {
    return <h1>Loading...</h1>
  }
  else {
    return (
      <>
        <Header data={data} />
        <Main loading={loading} data={data} />
      </>
    )
  }
}
export default App
