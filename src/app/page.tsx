import { ItemList } from '@/components/List/Item'

async function getData() {
  const response = await fetch(
    'https://portal-prod-api-portfolio-bff.azurewebsites.net/v1/api/emissao/passivosoperacoes?pagina=1&tamanhoPagina=20'
  )

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }

  const data = await response.json()

  return data.content
}
export default async function Home() {
  const data = await getData()

  return (
    <main className="ml-4 flex-1">
      <h1>Emisssões</h1>

      <div className="overflow-auto max-w-full max-h-full">
        <table className="table text-gray-400 border-separate space-y-6 text-xs">
          <thead className="bg-gray-800 text-gray-500">
            <tr>
              <th className="p-3">IF</th>
              <th className="p-3 text-center">Devedor</th>
              <th className="p-3 text-center">Vencimento</th>
              <th className="p-3 text-center">Remuneração</th>
              <th className="p-3 text-center">ISIN</th>
              <th className="p-3 text-center">Serie</th>
              <th className="p-3 text-center">Codigo Opea</th>
              <th className="p-3 text-center">Oferta</th>
              <th className="p-3 text-center">Concentração</th>
              <th className="p-3 text-center">Master Service</th>
            </tr>
          </thead>
          <tbody>
            {data?.emissoes.items?.map((item) => (
              <ItemList
                codeOpea={item.codigoOpea}
                concentration={item.concentracao}
                debtor={item.nomeDevedor}
                ifCode={item.codigoIf}
                isin={item.isin}
                masterService={item.masterService}
                offerCode={item.oferta}
                remuneration={item.indexador}
                serie={item.serie}
                validDate={item.dataVencimento}
                key={item.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
