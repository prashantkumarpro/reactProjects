import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { fetchData } from './Components/data'


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData()
        setData(result.results)
        // console.log(result.results)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    getData()
  }, [])

  if (loading) return <p className='mt-5'>Loading...</p>
  if (error) return <p className='mt-5'>Error: {error.message}</p>;

  return (
    <>
      <Header data={data} setData={setData} />
      <Home data={data} setData={setData} />
    </>
  )
}

export default App
