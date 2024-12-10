import { useEffect, useState } from "react";
import AllData from "./AllData";

export default function Main4() {
    const URL_API = "https://api.artic.edu/api/v1/artworks/search?q=cats";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataJson = await fetch(URL_API);
                const response = await dataJson.json();

                const formattedData = response.data.map(item => ({
                    text: item.thumbnail?.alt_text || "No description available",
                    img: item.thumbnail?.lqip || "https://via.placeholder.com/150",
                    title: item.title || "Untitled"
                }));

                setData(formattedData);
                setLoading(false);
            } catch (e) {
                setError("Failed to fetch data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (data.length === 0) {
        return <div>No data found.</div>;
    }

    return (
        <div>
            <AllData data={data} />
        </div>
    );
}
