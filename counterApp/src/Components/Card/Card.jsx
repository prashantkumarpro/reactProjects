import { useContext } from "react"
import { dataContext } from "../../context"



function Card() {

    const data = useContext(dataContext)

    return (
        <div className='flex items-center justify-start flex-wrap gap-5 m-auto'>
            {data.list.length > 1 && data.list.map(item => (

                <div key={item.id} className='w-[260px]  bg-slate-50 text-gray-700  overflow-hidden'>
                    <div className=' w-full h-[320px]'>
                        <img
                            className='size-full object-cover'
                            src={item.thumbnail_url}
                            alt={item.name}
                            loading='lazy' />
                    </div>
                    <div className='p-2 mt-1 border-solid border-[1.2px] border-slate-300 text-center'>
                        <p></p>
                        <p>Released : {item.release_date}</p>
                        <p>Language : {item.original_language + 'glish'}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Card