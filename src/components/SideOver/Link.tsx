'use client'
import NativeLink from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  path: string
  children: ReactNode
}

export function Link({ path, children }: Props) {
  const currentPath = usePathname()
  return (
    <NativeLink
      href={path}
      className={`text-sm ${
        currentPath === path ? 'text-white' : 'text-gray-400'
      } `}
    >
      {children}
    </NativeLink>
  )
}
