import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import { fetchData } from './Components/data'
import { Outlet } from 'react-router-dom'
import { dataContext } from './context'



function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData()
        setData(result)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    getData()
  }, [])

  if (loading) return <p className='center'>Loading...</p>
  if (error) return <p className='center text-1'>Error: {error.message}</p>;

  return (
    <dataContext.Provider value={{ data }}>
      <Header />
      <main>
        <Outlet />
      </main>
    </dataContext.Provider>
  )
}

export default App
