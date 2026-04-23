import React from "react"

export function Card({
  icon,
  label,
  refEl,
  color,
}: {
  icon: React.ReactNode
  label: string
  refEl: React.RefObject<HTMLSpanElement | null>
  color: string
}) {
  return (
    <div className="flex items-center gap-4 bg-gray-900 p-5 rounded-xl shadow">
      
      <div className={`p-3 rounded-full ${color}`}>
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <h2 className="text-xl font-bold">
          <span ref={refEl}>0</span>
        </h2>
      </div>
    </div>
  )
}