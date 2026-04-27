export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-200">

      <div className="grid grid-cols-12 gap-3 w-screen h-screen p-3">

       
       
        <div className="bg-slate-900 text-white p-4 col-span-3">
          header

        </div>

       
       
        <div className="bg-pink-400 text-white p-4 col-span-9">
          menu

        </div>

      
      
        <div className="bg-blue-400 text-white p-10 col-span-12">
          HERO

        </div>

       
       
        <div className="bg-slate-700 text-white p-6 col-span-6">
          MAIN

        </div>

        
        
        <div className="bg-gray-300 p-6 col-span-3">
          IMAGE

        </div>

       
       
        <div className="bg-green-400 p-6 col-span-3">
          EXTRA

        </div>

        
        
        <div className="bg-yellow-400 p-6 col-span-12">
          BANNER

        </div>

      </div>

    </div>
  );
}