"use client"

import { useEffect, useState, useRef } from "react"

type Character = {
  id: number
  name: string
  status: string
  species: string
  image: string
}

function StatusBadge({ status }: { status: string }) {
  const styles: any = {
    Alive: "bg-green-500/20 text-green-400",
    Dead: "bg-red-500/20 text-red-400",
    unknown: "bg-gray-500/20 text-gray-400",
  }

  return (
    <span className={`px-2 py-1 rounded text-xs ${styles[status]}`}>
      {status}
    </span>
  )
}

export function DashboardTable() {
  const [data, setData] = useState<Character[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<"pagination" | "infinite">("pagination")

  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (mode === "pagination") {
      fetchData(page, false)
    }
  }, [page, mode])

  useEffect(() => {
    if (mode === "infinite") {
      fetchData(page, true)
    }
  }, [page, mode])

  const fetchData = async (page: number, append: boolean) => {
    setLoading(true)

    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const json = await res.json()

    setTotalPages(json.info.pages)

    if (append) {
      setData((prev) => [...prev, ...json.results])
    } else {
      setData(json.results)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (mode !== "infinite") return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && page < totalPages) {
          setPage((prev) => prev + 1)
        }
      },
      { threshold: 1 }
    )

    if (observerRef.current) observer.observe(observerRef.current)

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current)
    }
  }, [loading, page, totalPages, mode])

  return (
    <div className="mt-10 bg-gray-900 p-6 rounded-xl border border-gray-800">

      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setData([])
            setPage(1)
            setMode(mode === "pagination" ? "infinite" : "pagination")
          }}
          className="px-4 py-1 bg-purple-600 hover:bg-purple-500 rounded text-sm"
        >
          {mode === "pagination" ? "Switch to Infinite" : "Switch to Pagination"}
        </button>
      </div>

      <table className="w-full text-left">
        <thead className="border-b border-gray-800 text-gray-400">
          <tr>
            <th className="py-3">Character</th>
            <th>Species</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((char) => (
            <tr key={char.id} className="border-b border-gray-800 hover:bg-gray-800/50">
              <td className="py-4 flex items-center gap-3">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-white">{char.name}</span>
              </td>

              <td className="text-gray-400">{char.species}</td>

              <td>
                <StatusBadge status={char.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {mode === "pagination" && (
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-400">
            Page {page} of {totalPages}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded disabled:opacity-50"
            >
              Prev
            </button>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {mode === "infinite" && (
        <div ref={observerRef} className="h-10 flex items-center justify-center">
          {loading && <p className="text-gray-400">Loading more...</p>}
        </div>
      )}

      {loading && mode === "pagination" && (
        <p className="text-center text-gray-400 mt-4">Loading...</p>
      )}
    </div>
  )
}