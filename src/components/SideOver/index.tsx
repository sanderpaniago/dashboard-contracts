import { User } from '../User'
import { Block } from './Block'
import { Link } from './Link'

export function SideOver() {
  return (
    <section className="border border-[#232325] rounded-lg ml-2 max-w-60 w-full min-w-60 h-full py-4 px-4">
      <div>
        <User />

        <Block>
          <Link path="/">Emissoes</Link>
          <Link path="/cards">Cartões</Link>
          <Link path="/newEmission">Criação</Link>
        </Block>
      </div>
    </section>
  )
}
