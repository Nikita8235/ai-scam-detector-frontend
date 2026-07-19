import { useState } from "react";
import API from "../services/api";


function URLDetection() {

    const [url, setUrl] = useState("");
    const [result, setResult] = useState(null);


    const analyzeURL = async () => {

        try {

            const token = localStorage.getItem("token");


            const res = await API.post(
                "/scam/url-check",
                {
                    url
                },
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );


            setResult(res.data.result);


        } catch(error){

            console.log(error);

            alert(
                error.response?.data?.message || 
                "URL Analysis Failed"
            );

        }

    };


    return (

        <div className="min-h-screen bg-slate-100 p-8">


            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">


                <h1 className="text-3xl font-bold mb-6">
                    🔗 AI URL Scam Detection
                </h1>



                <input

                    type="text"

                    placeholder="Paste suspicious URL here..."

                    className="w-full border rounded-lg p-4"

                    value={url}

                    onChange={(e)=>setUrl(e.target.value)}

                />



                <button

                    onClick={analyzeURL}

                    className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"

                >

                    Analyze URL

                </button>




                {
                    result && (

                        <div className="mt-8 p-5 border rounded-lg">


                            <h2 className="text-2xl font-bold mb-4">
                                Result
                            </h2>


                            <p>
                                <b>URL:</b> {result.url}
                            </p>


                            <p>
                                <b>Risk:</b>{" "}
                                {result.risk}
                            </p>


                            <p>
                                <b>Scam:</b>{" "}
                                {result.isScam ? "Yes 🚨" : "No ✅"}
                            </p>


                            <p>
                                <b>Detected:</b>{" "}
                                {result.detectedKeywords.join(", ")}
                            </p>


                        </div>

                    )
                }


            </div>


        </div>

    );

}


export default URLDetection;