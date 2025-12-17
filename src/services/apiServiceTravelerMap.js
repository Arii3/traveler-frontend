import axios from 'axios';

const TM_API_URL = 'https://travellermap.com/api';

function removeNonWorlds(item) {
    return (Object.keys(item).length === 1 && Object.keys(item)[0] === "World");
}

export const getWorld = async (world) => {
    try {
        const response = await axios.get(`${TM_API_URL}/search?q=${world}`);
        // TODO: Filter worlds from sectors and subsectors
        return response.data.Results.Items.filter(removeNonWorlds);
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};