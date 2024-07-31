import { useContext, useEffect, useState } from 'react'
import { dataContext } from '../context'
import { Link, useParams } from 'react-router-dom'
import { RiSearchLine } from '@remixicon/react'




export const Result = () => {

  const { queryResult } = useParams()
  const { data } = useContext(dataContext);
  const [queriedData, setQueriedData] = useState([])

  const filterData = () => {
    if (data && data.list) {
      const filtedredItem = data.list.filter(item => item.title.toLowerCase().includes(queryResult))
      setQueriedData(filtedredItem)
    }
  }

  useEffect(() => {
    filterData()
  }, [queryResult])

  return (
    <div className='mt-2 py-10 flex flex-col h-full w-full'>
      <div className='w-full flex items-center gap-3 '>
        <RiSearchLine
        size={20}
        color='#00A6ED'
        className='mt-[2.8px]'
        />
        <h1 className='text-2xl '>Search: {queryResult}</h1>
      </div>

      {queriedData.length > 0 ? (
        <div className='flex items-center justify-start flex-wrap gap-5 mt-3'>
          {queriedData.map(({ id, thumbnail_url, title }) => (

            < div key={id} className='w-[260px]  bg-slate-50 text-gray-700  overflow-hidden' >
              <div className=' w-full h-[320px]'>
                <img
                  className='size-full object-cover'
                  src={thumbnail_url}
                  alt={title}
                  loading='lazy' />
              </div>
              <div className='p-2 mt-1 border-solid border-[1.2px] border-slate-300 text-center'>
                <p></p>
                <p>{`${title.length > 10 ? title.substring(0, 18) + '...' : title}`}</p>
                <p>Language</p>
              </div>
            </div>
          ))
          }

        </div >
      ) : (
        <div className=' w-full h-full flex items-center justify-center flex-col gap-5'>
          <h1 className='text-red-500 font-semibold text-3xl'>OH NO!!</h1>
          <h4>We couldn't find what you are looking for.</h4>

          <Link to="/" 
          className='max-w-md w-full text-center px-5 py-2  border-solid border-[1.2px] border-slate-300 mt-6'
          >Back home</Link>
        </div>
      )}
    </div>
  )
}
