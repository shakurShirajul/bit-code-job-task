import logo from "../../assets/logo/logo.svg";
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      <div className="absolute">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-pulse animation-delay-3000"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <img src={logo} className="w-30 h-30 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 animate-text-glow">
          VoteForge
        </h1>
        <p className="text-xl text-purple-200 mb-8 animate-fade-in-up">
          Shape the Future Together
        </p>
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce animation-delay-400"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingScreen;
