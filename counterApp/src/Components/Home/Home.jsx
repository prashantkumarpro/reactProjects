import Card from '../Card/Card'

const Home = ({ data, setData }) => {

    return (
        <>
            <div className='py-5 text-xl'>
                <h1 className='mb-10'>Latest movies lists</h1>
                <Card data={data} setData={setData} />
            </div>

        </>
    )
}

export default Home