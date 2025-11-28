export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
        <div className="absolute inset-0 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
      </div>
      <h2 className="text-2xl font-bold animate-pulse">Generating Portfolio...</h2>
      <p className="text-gray-500 mt-2">Analyzing GitHub Profile</p>
    </div>
  );
}
