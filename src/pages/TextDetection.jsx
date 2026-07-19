import { useState } from "react";
import API from "../services/api";

function TextDetection() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

const analyzeMessage = async () => {
  console.log("API:", API.defaults.baseURL);
  console.log("Token:", localStorage.getItem("token"));
  console.log("Message:", message);

  try {
    const token = localStorage.getItem("token");

    const res = await API.post(
      "/scam/analyze",
      { message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response:", res.data);
    setResult(res.data.report);

  } catch (error) {
    console.log("Full Error:", error);
    console.log("Response:", error.response);
    console.log("Request:", error.request);
    console.log("Message:", error.message);

    alert(error.message);
  }
};

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          📝 AI Text Scam Detection
        </h1>

        <textarea
          rows="6"
          className="w-full border rounded-lg p-4"
          placeholder="Paste suspicious message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={analyzeMessage}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Analyze
        </button>

        {result && (
          <div className="mt-8 p-5 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Result</h2>

            <p><strong>Risk:</strong> {result.risk}</p>
            <p><strong>Is Scam:</strong> {result.isScam ? "Yes" : "No"}</p>
            <p><strong>Detected Keywords:</strong> {result.detectedKeywords.join(", ")}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default TextDetection;