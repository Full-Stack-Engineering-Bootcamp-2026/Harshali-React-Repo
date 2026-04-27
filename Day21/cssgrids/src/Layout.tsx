export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      <div className="w-full max-w-3xl space-y-3">

       
        <div className="flex flex-col sm:flex-row gap-3">

          <div className="bg-yellow-400 h-16 flex-1"></div>
          <div className="bg-red-400 h-16 flex-[2]"></div>
        </div>

        
        <div className="flex gap-3">
          <div className="bg-red-400 h-16 w-full"></div>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-3">

          <div className="flex flex-1 gap-3">
            <div className="bg-yellow-400 h-16 flex-1"></div>
            <div className="bg-yellow-400 h-16 flex-1"></div>
          </div>
          <div className="bg-green-400 h-32 sm:h-auto sm:flex-1"></div>
          
        </div>

       
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="bg-blue-500 h-16 sm:flex-[2]"></div>
          <div className="flex gap-3 sm:flex-1">
            <div className="bg-orange-400 h-16 flex-1"></div>
            <div className="bg-orange-400 h-16 flex-1"></div>
          </div>
        </div>

      
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="bg-teal-400 h-16 sm:flex-[3]"></div>
          <div className="bg-blue-500 h-16 sm:flex-1"></div>
        </div>

      </div>

    </div>
  );
}