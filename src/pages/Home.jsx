import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold leading-tight">
            AI Scam Detection Platform
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Protect yourself from online scams using Artificial Intelligence.
            Detect fake messages, scam calls, phishing links, and fraudulent
            screenshots in real time.
          </p>

          <button className="mt-10 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg text-lg font-semibold transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="📝"
              title="Text Scam Detection"
              description="Analyze SMS, emails, WhatsApp chats and suspicious messages using AI."
            />

            <FeatureCard
              icon="🎤"
              title="Live Voice Detection"
              description="Convert live voice to text and detect scam calls instantly."
            />

            <FeatureCard
              icon="🖼️"
              title="Screenshot Detection"
              description="Upload screenshots of chats or messages for AI scam analysis."
            />

            <FeatureCard
              icon="🔗"
              title="Fake Link Detection"
              description="Identify phishing websites and suspicious URLs before opening them."
            />

            <FeatureCard
              icon="📚"
              title="Cyber Awareness"
              description="Learn about UPI fraud, OTP scams, fake jobs, bank fraud and more."
            />

            <FeatureCard
              icon="📊"
              title="History & Reports"
              description="View previous scam detection results and generate reports."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;