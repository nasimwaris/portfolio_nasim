export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        {/* Simple CSS Loader */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin" />
          <div className="absolute inset-2 rounded-full border-r-2 border-purple-500 animate-[spin_1.5s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border-b-2 border-pink-500 animate-[spin_2s_linear_infinite]" />
        </div>
        <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse tracking-widest text-sm uppercase">
          Loading
        </div>
      </div>
    </div>
  );
}
