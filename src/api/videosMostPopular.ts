

const apiKey = import.meta.env.VITE_API_KEY_YT;
async function videoMostPopular () {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=MX&key=${apiKey}`)
    const data = await response.json();
    console.log(data.items)
    return data.items;
}

export default videoMostPopular;