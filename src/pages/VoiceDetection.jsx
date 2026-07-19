import { useState } from "react";
import API from "../services/api";


function VoiceDetection(){

    const [text,setText] = useState("");
    const [result,setResult] = useState(null);
    const [listening,setListening] = useState(false);



    const startListening = () => {


        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;


        if(!SpeechRecognition){

            alert("Speech Recognition not supported");

            return;

        }


        const recognition = new SpeechRecognition();


        recognition.lang = "en-IN";

        recognition.continuous = false;


        recognition.onstart = () => {

            setListening(true);

        };


        recognition.onend = () => {

            setListening(false);

        };


        recognition.onresult = (event)=>{

            const speechText =
            event.results[0][0].transcript;


            setText(speechText);

        };


        recognition.start();

    };




    const analyzeVoice = async()=>{


        try{


            const token = localStorage.getItem("token");


            const res = await API.post(
                "/scam/analyze",
                {
                    message:text
                },
                {
                    headers:{
                        Authorization:
                        `Bearer ${token}`
                    }
                }
            );


            setResult(res.data.report);


        }
        catch(error){

            console.log(error);

            alert("Analysis Failed");

        }

    };



    return(

        <div className="min-h-screen bg-slate-100 p-8">


            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">


                <h1 className="text-3xl font-bold mb-6">
                    🎤 AI Voice Scam Detection
                </h1>



                <button

                    onClick={startListening}

                    className="bg-green-600 text-white px-6 py-3 rounded-lg"

                >

                    {listening 
                    ? "Listening..." 
                    : "Start Recording 🎤"}

                </button>



                <textarea

                    className="w-full border rounded-lg p-4 mt-6"

                    rows="5"

                    value={text}

                    placeholder="Voice converted text..."

                    readOnly

                />



                <button

                    onClick={analyzeVoice}

                    className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"

                >

                    Analyze Voice

                </button>



                {
                    result && (

                        <div className="mt-8 border p-5 rounded-lg">


                            <h2 className="text-2xl font-bold">
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
                                <b>Keywords:</b>{" "}
                                {
                                result.detectedKeywords.join(", ")
                                }
                            </p>


                        </div>

                    )
                }



            </div>


        </div>

    );

}


export default VoiceDetection;