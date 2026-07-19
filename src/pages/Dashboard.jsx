import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import API from "../services/api";


function Dashboard() {

  const [stats, setStats] = useState({
    totalScans: 0,
    scamDetected: 0,
    highRisk: 0,
    safeMessages: 0
  });


  const fetchStats = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await API.get("/scam/stats", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });


      setStats(res.data.stats);


    } catch(error) {

      console.log(error);

    }

  };


  useEffect(() => {

    fetchStats();

  }, []);



  return (
    <>

      <Navbar />


      <div className="min-h-screen bg-slate-100 py-10">

        <div className="max-w-7xl mx-auto px-6">


          <h1 className="text-4xl font-bold mb-2">
            Welcome Back 👋
          </h1>


          <p className="text-gray-600 mb-10">
            AI powered scam detection dashboard
          </p>



          {/* Statistics */}

          <div className="grid md:grid-cols-4 gap-6 mb-10">


            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-gray-500">
                Total Scans
              </h2>

              <p className="text-3xl font-bold">
                {stats.totalScans}
              </p>
            </div>



            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-gray-500">
                Scam Detected
              </h2>

              <p className="text-3xl font-bold text-red-600">
                {stats.scamDetected}
              </p>
            </div>



            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-gray-500">
                High Risk Alerts
              </h2>

              <p className="text-3xl font-bold text-orange-600">
                {stats.highRisk}
              </p>
            </div>



            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-gray-500">
                Safe Messages
              </h2>

              <p className="text-3xl font-bold text-green-600">
                {stats.safeMessages}
              </p>
            </div>


          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            <DashboardCard
              icon="📝"
              title="Text Detection"
              description="Analyze scam messages."
              link="/text-detection"
            />


            <DashboardCard
              icon="🎤"
              title="Voice Detection"
              description="Detect scam calls."
              link="/voice-detection"
            />


            <DashboardCard
              icon="🖼️"
              title="Image Detection"
              description="Analyze screenshots."
              link="/image-detection"
            />


            <DashboardCard
              icon="🔗"
              title="URL Detection"
              description="Detect phishing links."
              link="/url-detection"
            />


            <DashboardCard
              icon="📚"
              title="Awareness"
              description="Cyber safety tips."
              link="/awareness"
            />


            <DashboardCard
              icon="📊"
              title="History"
              description="View previous scans."
              link="/history"
            />


          </div>


        </div>

      </div>

    </>
  );

}


export default Dashboard;