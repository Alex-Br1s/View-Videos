


const apiKey = import.meta.env.VITE_API_KEY_YT;
async function searchVideos(searchTerm: string) {
    const encodedSearchTerm = encodeURIComponent(searchTerm); // Codificar el término de búsqueda
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${encodedSearchTerm}&key=${apiKey}`)
    const data = await response.json();
    return data.items
}

export default searchVideos