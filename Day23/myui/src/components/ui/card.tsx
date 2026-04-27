import * as React from "react"
import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "flex flex-col rounded-xl bg-card text-card-foreground border border-border shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("p-4", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-lg font-semibold text-white", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

/* Dashboard specific card */
type DashboardCardProps = {
  icon: React.ReactNode
  label: string
  refEl: any
  color: string
}

function DashboardCard({ icon, label, refEl, color }: DashboardCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4">

        <div className={`p-3 rounded-full text-white ${color}`}>
          {icon}
        </div>

        <div>
          <CardDescription>{label}</CardDescription>
          <CardTitle ref={refEl} />
        </div>

      </CardContent>
    </Card>
  )
}

export {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  DashboardCard,
}