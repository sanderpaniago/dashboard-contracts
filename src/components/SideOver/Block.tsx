import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export function Block({ children }: Props) {
  return (
    <div className="py-2 border-t-2 border-[#232325] border-dotted flex flex-col gap-2">
      {children}
    </div>
  )
}
