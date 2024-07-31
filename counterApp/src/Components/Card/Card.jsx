import { useContext } from "react"
import { dataContext } from "../../context"



function Card() {


    const { data } = useContext(dataContext);
   
    return (
        <div className='flex items-center justify-start flex-wrap gap-5 m-auto'>
            {data.list.length > 0 && data.list.map(({ id, thumbnail_url, title }) => (

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
    )
}

export default Card