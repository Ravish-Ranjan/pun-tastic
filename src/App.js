import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setErr(null);
        try {
            const res = await axios.get("/api/pun", {
                withCredentials: true,
            });
            setData(res.data);
        } catch (error) {
            setErr(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [err]);

    if (loading) return <div className="board">loading</div>;
    if (err) return <div className="board">err : {err}</div>;

    return <div className="board text-2xl w-3/4 text-center xl:text-4xl" >{data.pun}</div>;
}

export default App;
