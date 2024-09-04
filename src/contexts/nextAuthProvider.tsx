'use client'

// Third-party Imports
import { SessionProvider } from 'next-auth/react'
import type { SessionProviderProps } from 'next-auth/react'

export const NextAuthProvider = ({ children, ...rest }: SessionProviderProps) => {
  return <SessionProvider {...rest}>{children}</SessionProvider>
}
