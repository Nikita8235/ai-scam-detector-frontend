function Awareness() {

  const tips = [
    {
      title: "🔐 Never Share OTP",
      desc: "Banks and genuine companies never ask for OTP, PIN or passwords."
    },

    {
      title: "🔗 Avoid Unknown Links",
      desc: "Do not click suspicious links received through SMS, WhatsApp or email."
    },

    {
      title: "🏦 Fake Bank Calls",
      desc: "Verify callers before sharing any banking information."
    },

    {
      title: "💼 Fake Job Offers",
      desc: "Never pay money for job registration or interview confirmation."
    },

    {
      title: "📱 UPI Safety",
      desc: "Never approve unknown UPI collect requests or payment requests."
    },

    {
      title: "🎁 Prize Scams",
      desc: "Lottery and reward messages are commonly used for fraud."
    }
  ];


  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          📚 Cyber Safety Awareness
        </h1>


        <div className="grid md:grid-cols-2 gap-6">


          {
            tips.map((tip,index)=>(

              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              >

                <h2 className="text-2xl font-bold mb-3">
                  {tip.title}
                </h2>


                <p className="text-gray-600">
                  {tip.desc}
                </p>


              </div>

            ))
          }


        </div>


      </div>


    </div>

  );

}


export default Awareness;