import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TextDetection from "./pages/TextDetection";
import History from "./pages/History";
import Awareness from "./pages/Awareness";
import UrlDetection from "./pages/UrlDetection";
import ImageDetection from "./pages/ImageDetection";
import VoiceDetection from "./pages/VoiceDetection";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />


      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />


      <Route
        path="/text-detection"
        element={
          <ProtectedRoute>
            <TextDetection />
          </ProtectedRoute>
        }
      />


     <Route
  path="/url-detection"
  element={
    <ProtectedRoute>
      <UrlDetection />
    </ProtectedRoute>
  }
/>


      <Route
        path="/image-detection"
        element={
          <ProtectedRoute>
            <ImageDetection />
          </ProtectedRoute>
        }
      />


      <Route
        path="/voice-detection"
        element={
          <ProtectedRoute>
            <VoiceDetection />
          </ProtectedRoute>
        }
      />


      <Route
        path="/awareness"
        element={
          <ProtectedRoute>
            <Awareness />
          </ProtectedRoute>
        }
      />

      <Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>

    </Routes>

  );

}


export default App;