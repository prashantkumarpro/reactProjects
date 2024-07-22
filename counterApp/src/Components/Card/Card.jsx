


function Card({ data }) {


    return (
        <div className='flex items-center justify-start flex-wrap gap-5 m-auto'>
            {data && data.map(item => (

                <div key={item.id} className='w-[260px]  bg-slate-50 text-gray-700  overflow-hidden'>
                    <div className=' w-full h-[320px]'>
                        <img
                            className='size-full object-cover'
                            src={'https://image.tmdb.org/t/p/w200' + item.poster_path
                            }
                            alt={item.name}
                            loading='lazy' />
                    </div>
                    <div className='p-2 mt-1 border-solid border-[1.2px] border-slate-300 text-center'>
                        <p>{item.title}</p>
                        <p>Released : {item.release_date}</p>
                        <p>Language : {item.original_language + 'glish'}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Card