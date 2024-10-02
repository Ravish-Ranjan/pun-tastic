import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setErr(null);
        try {
            const res = await axios.get("https://punapi.rest/api/pun", {
                withCredentials: true,
            });
            console.log(res);

            setData(res.data);
        } catch (error) {
            setErr(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <div>loading</div>;
    if (err) return <div>err : {err}</div>;

    return <div>{data}</div>;
}

export default App;
