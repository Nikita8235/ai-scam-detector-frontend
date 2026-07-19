import { useEffect, useState } from "react";
import API from "../services/api";

function History() {

    const [history, setHistory] = useState([]);

    const fetchHistory = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.get("/scam/history", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setHistory(res.data.history);

        } catch (error) {

            console.log(error);
            alert("Failed to load history");

        }

    };


    useEffect(() => {
        fetchHistory();
    }, []);


    return (

        <div className="min-h-screen bg-slate-100 p-8">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold mb-8">
                    📊 Scam Detection History
                </h1>


                {
                    history.length === 0 ? (

                        <div className="bg-white p-6 rounded-xl shadow">
                            No scan history found
                        </div>

                    ) : (

                        <div className="space-y-6">

                            {
                                history.map((item)=>(

                                    <div
                                    key={item._id}
                                    className="bg-white p-6 rounded-xl shadow"
                                    >

                                        <p className="text-lg font-semibold">
                                            Message:
                                        </p>

                                        <p className="text-gray-700 mb-4">
                                            {item.message}
                                        </p>


                                        <p>
                                            <b>Risk:</b>{" "}
                                            <span className={
                                                item.risk === "High"
                                                ? "text-red-600"
                                                : item.risk === "Medium"
                                                ? "text-yellow-600"
                                                : "text-green-600"
                                            }>
                                                {item.risk}
                                            </span>
                                        </p>


                                        <p>
                                            <b>Scam:</b>{" "}
                                            {item.isScam ? "Yes 🚨" : "No ✅"}
                                        </p>


                                        <p>
                                            <b>Keywords:</b>{" "}
                                            {item.detectedKeywords.join(", ")}
                                        </p>


                                        <p className="text-sm text-gray-500 mt-3">
                                            {new Date(item.createdAt).toLocaleString()}
                                        </p>


                                    </div>

                                ))
                            }

                        </div>

                    )
                }


            </div>

        </div>

    );

}

export default History;