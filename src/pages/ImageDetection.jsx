import { useState } from "react";
import API from "../services/api";


function ImageDetection(){

    const [image,setImage] = useState(null);
    const [result,setResult] = useState(null);



    const analyzeImage = async()=>{

        try{

            const token = localStorage.getItem("token");


            const formData = new FormData();

            formData.append("image", image);



            const res = await API.post(
                "/scam/image-check",
                formData,
                {
                    headers:{
                        Authorization:`Bearer ${token}`,
                        "Content-Type":"multipart/form-data"
                    }
                }
            );


            setResult(res.data.result);


        }
        catch(error){

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Image Analysis Failed"
            );

        }

    };



    return(

        <div className="min-h-screen bg-slate-100 p-8">


            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">


                <h1 className="text-3xl font-bold mb-6">
                    🖼️ AI Image Scam Detection
                </h1>



                <input

                    type="file"

                    accept="image/*"

                    onChange={(e)=>setImage(e.target.files[0])}

                />



                <button

                    onClick={analyzeImage}

                    className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"

                >

                    Analyze Image

                </button>



                {
                    result && (

                        <div className="mt-8 p-5 border rounded-lg">


                            <h2 className="text-2xl font-bold mb-4">
                                Result
                            </h2>


                            <p>
                                <b>Risk:</b> {result.risk}
                            </p>


                            <p>
                                <b>Scam:</b>{" "}
                                {
                                  result.isScam 
                                  ? "Yes 🚨" 
                                  : "No ✅"
                                }
                            </p>


                            <p>
                                <b>Detected:</b>{" "}
                                {
                                result.detectedKeywords.join(", ")
                                }
                            </p>


                            <p className="mt-4">
                                <b>Extracted Text:</b>
                            </p>


                            <p>
                                {result.extractedText}
                            </p>


                        </div>

                    )
                }


            </div>


        </div>

    );

}


export default ImageDetection;