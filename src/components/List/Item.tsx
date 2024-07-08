type Props = {
  ifCode: string
  debtor: string
  validDate: string
  isin: string
  offerCode: string
  concentration: string
  masterService: string
  remuneration: string
  codeOpea: string
  serie: string
}

export function ItemList({
  concentration,
  debtor,
  ifCode,
  isin,
  masterService,
  offerCode,
  remuneration,
  validDate,
  codeOpea,
  serie
}: Props) {
  return (
    <tr className="bg-gray-800">
      <td className="p-3">{ifCode}</td>
      <td className="p-3">{debtor}</td>
      <td className="p-3">
        {new Date(validDate).toLocaleDateString(['pt-br'])}
      </td>
      <td className="p-3">{remuneration}</td>
      <td className="p-3">{isin}</td>
      <td className="p-3">{serie}</td>
      <td className="p-3">{codeOpea}</td>
      <td className="p-3">{offerCode}</td>
      <td className="p-3">{concentration}</td>
      <td className="p-3">{masterService}</td>
    </tr>
  )
}
