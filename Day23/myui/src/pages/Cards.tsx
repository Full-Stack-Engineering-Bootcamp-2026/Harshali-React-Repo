import { useEffect, useRef } from "react"
import { CountUp } from "countup.js"
import { Users, Wallet, ShoppingCart, MessageCircle } from "lucide-react"

import { Card } from "@/components/common/Card"

export default function CardsPage() {


  const clientsRef = useRef<HTMLSpanElement | null>(null)
  const balanceRef = useRef<HTMLSpanElement | null>(null)
  const salesRef = useRef<HTMLSpanElement | null>(null)
  const contactsRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {


    new CountUp(clientsRef.current!, 6389).start()
    new CountUp(balanceRef.current!, 46760, { prefix: "$" }).start()
    new CountUp(salesRef.current!, 376).start()
    new CountUp(contactsRef.current!, 35).start()
  }, [])

  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-bold text-white">Cards</h1>

      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-4 rounded-xl flex justify-between items-center">
        <span className="text-white">Star this project on GitHub</span>
        
      </div>

      {/* Big section card */}
      <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 text-gray-400">
        Large, full width sections goes here
      </div>

      {/* Responsive Cards */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">
          Responsive cards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Card icon={<Users />} label="Total clients" refEl={clientsRef} color="bg-orange-500" />

          <Card icon={<Wallet />} label="Account balance" refEl={balanceRef} color="bg-green-500" />

          <Card icon={<ShoppingCart />} label="New sales" refEl={salesRef} color="bg-blue-500" />

          <Card icon={<MessageCircle />} label="Pending contacts" refEl={contactsRef} color="bg-cyan-500" />

        </div>
      </div>

      {/* Cards with title */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">
          Cards with title
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-white font-semibold mb-2">Revenue</h3>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              cum commodi a omnis numquam quod? Totam exercitationem quos hic
              ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-6 rounded-xl text-white">
            <h3 className="font-semibold mb-2">Colored card</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              cum commodi a omnis numquam quod? Totam exercitationem quos hic
              ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}