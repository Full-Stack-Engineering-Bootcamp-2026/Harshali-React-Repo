import { useEffect, useState } from "react"

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

  useEffect(() => {
    fetchData(page)
  }, [page])

  const fetchData = async (page: number) => {
    setLoading(true)

    const res = await fetch(  `https://rickandmortyapi.com/api/character?page=${page}`
    )
    const json = await res.json()

    setData(json.results)
    setTotalPages(json.info.pages)

    setLoading(false)
  }

  return (
    <div className="mt-10 bg-gray-900 p-6 rounded-xl">

      {/* Table */}
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
            <tr key={char.id} className="border-b border-gray-800">
              <td className="py-4 flex items-center gap-3">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-10 h-10 rounded-full"
                />
                <span>{char.name}</span>
              </td>

              <td>{char.species}</td>

              <td>
                <StatusBadge status={char.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <div className="flex justify-between items-center mt-6">

        <p className="text-sm text-gray-400">
          Page {page} of {totalPages}
        </p>

        <div className="flex gap-2">

          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1} className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50" >
            Prev
          </button>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50"  >
            Next
          </button>

        </div>
      </div>

     
      {loading && (
        <p className="text-center text-gray-400 mt-4">Loading...</p>
      )}
    </div>
  )
}