import { Home, ArrowLeft, Rocket } from "lucide-react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 ">
        <div className="max-w-4xl w-full">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="relative inline-block mb-8">
                <div className="backdrop-blur-md bg-white/15 rounded-full p-6 border border-white/30">
                  <Rocket className="w-16 h-16 text-white transform rotate-45" />
                </div>
              </div>

              <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-4 leading-none">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                We have a problem!
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Looks like this page decided to take a little space vacation.
                Don't worry, our mission control team is working on bringing it
                back to Earth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => window.history.back()}
                className="group backdrop-blur-md bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-2xl border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
              <Link
                to="/"
                className="group backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white px-8 py-4 rounded-2xl border border-purple-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Home Base
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
