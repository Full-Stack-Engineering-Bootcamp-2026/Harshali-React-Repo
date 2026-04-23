import { useEffect, useRef } from "react"
import { CountUp } from "countup.js"
import { Users, Wallet, ShoppingCart, MessageCircle } from "lucide-react"

import { Card } from "@/components/common/Card"
import { DashboardTable } from "@/components/common/DashboardTable"

import { Charts } from "@/components/common/Charts"

export default function Dashboard() {
  const clientsRef = useRef(null)
  const balanceRef = useRef(null)
  const salesRef = useRef(null)
  const contactsRef = useRef(null)

  useEffect(() => {
    new CountUp(clientsRef.current!, 6389).start()
    new CountUp(balanceRef.current!, 46760, { prefix: "$" }).start()
    new CountUp(salesRef.current!, 376).start()
    new CountUp(contactsRef.current!, 35).start()

  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <Card icon={<Users />} label="Total Clients" refEl={clientsRef} color="bg-orange-500" />

        <Card icon={<Wallet />} label="Account Balance" refEl={balanceRef} color="bg-green-500" />

        <Card icon={<ShoppingCart />} label="New Sales" refEl={salesRef} color="bg-blue-500" />
        
        <Card icon={<MessageCircle />} label="Contacts" refEl={contactsRef} color="bg-cyan-500" />


      </div>

     
      <DashboardTable />

      <Charts />
    </div>
  )
}