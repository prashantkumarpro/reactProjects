const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWU0OTEwZDEzOGI3MTcyYTRiNTE2ZDI2N2ViMjcyOSIsIm5iZiI6MTcyMTU0OTEwNi43MjQwODMsInN1YiI6IjY2OWJkNzA2NDNhMGQxZmI5YTk1NDRjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RzsGQD9EESyb_XfFzs7omTbySkoBQlmi-GXqhtuh1r8'
    }
};

export const fetchData = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}