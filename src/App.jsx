import { useState, useEffect } from "react"
import { Contenedor } from "./componentes/container"
import { Card } from "./componentes/card"
import { consultar, buscarPeliculas } from "./api/api.js"

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const manejarBusqueda = (evento) => {
    setQuery(evento.target.value)
    setPage(1)
  }

  useEffect(() => {
    async function cargar() {
      let data
      if (query.trim() !== "") {
        // 🔍 Si hay búsqueda → usar el endpoint de búsqueda
        data = await buscarPeliculas(query, page)
      } else {
        // 📺 Si no hay búsqueda → mostrar populares
        data = await consultar(page)
      }
      setItems(data.results ?? [])
      setTotalPages(data.total_pages ?? 1)
    }
    cargar()
  }, [page, query])

  

  return (
    <div className="bg-gradient-to-l 
      from-blue-600 
      to-neutral-950 
      min-h-screen 
      flex 
      flex-col 
      justify-center 
      items-center 
      p-4">
        
        <img
        src="/shelvana.png"
        alt="Logo Shelbsvana"
        className="w-80 h-auto mb-4"
        />

      
      <input
        type="text"
        placeholder="BUSCAR"
        value={query}
        onChange={manejarBusqueda}
        className="w-full 
        max-w-md 
        p-2 
        border-2 
        rounded
        border-b-blue-950
        bg-gradient-to-r 
        from-indigo-900
        to-blue-400
        mb-4"
      />

       
        <>
          <Contenedor>
            {items.map((item) => (
              <Card item={item} key={item?.id} />
            ))}
          </Contenedor>

          <div className="flex gap-4 mt-6">
            <button
              className="
              bg-blue-500 
              text-white 
              px-4 
              py-2 
              rounded 
              disabled:opacity-50"
              onClick={() => setPage((pagina) => Math.max(pagina - 1, 1))}
              disabled={page === 1}
            >
               Anterior
            </button>

            <span className="text-lg font-bold">Página {page}</span>

            <button
              className="
              bg-blue-500 
              text-white 
              px-4 
              py-2 
              rounded 
              disabled:opacity-50"
              onClick={() => setPage((pagina) => Math.min(pagina + 1, totalPages))}
              disabled={page === totalPages}
            >
              Siguiente 
            </button>
          </div>
        </>
      
    </div>
  )
}

export default App
