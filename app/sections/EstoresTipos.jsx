import { Home, Building, Thermometer, Power, Hand } from "lucide-react"

export default function TiposEstoresSection() {
  const tiposEstores = [
    { name: "Interior", Icon: Home },
    { name: "Exterior", Icon: Building },
    { name: "Térmico", Icon: Thermometer },
    { name: "Motor e Comandos", Icon: Power },
    { name: "Manual", Icon: Hand },
  ]

  return (
    <section className=" pb-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Tipos de Estores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {tiposEstores.map((tipo) => (
            <div
              key={tipo.name}
              className="bg-gray-100 rounded-lg p-10 text-center hover:shadow-lg transition duration-300 ease-in-out"
            >
              <tipo.Icon className="w-12 h-12 mx-auto mb-4 text-[var(--main)]" />
              <h3 className="text-xl font-semibold text-gray-800">{tipo.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

