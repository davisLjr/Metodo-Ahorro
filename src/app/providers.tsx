// app/providers.tsx
'use client'

import DrawerExample from '@/components/header'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <DrawerExample />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}