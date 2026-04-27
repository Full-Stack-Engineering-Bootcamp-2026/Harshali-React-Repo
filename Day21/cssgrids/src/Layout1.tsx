export default function Layout1() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      <div className="w-full max-w-3xl grid grid-cols-12 gap-3">

       
        <div className="bg-yellow-400 h-16 col-span-12 sm:col-span-4"></div>
        <div className="bg-red-400 h-16 col-span-12 sm:col-span-8"></div>

        
        <div className="bg-red-400 h-16 col-span-12"></div>

       
        <div className="bg-yellow-400 h-16 col-span-6 sm:col-span-3"></div>
        <div className="bg-yellow-400 h-16 col-span-6 sm:col-span-3"></div>
        <div className="bg-green-400 h-32 sm:h-auto col-span-12 sm:col-span-6"></div>

      
        <div className="bg-blue-500 h-16 col-span-12 sm:col-span-6"></div>
        <div className="bg-orange-400 h-16 col-span-6 sm:col-span-3"></div>
        <div className="bg-orange-400 h-16 col-span-6 sm:col-span-3"></div>

        
        <div className="bg-teal-400 h-16 col-span-12 sm:col-span-9"></div>
        <div className="bg-blue-500 h-16 col-span-12 sm:col-span-3"></div>

      </div>

    </div>
  );
}