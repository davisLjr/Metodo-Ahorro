// app/providers.tsx
'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Box } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Header />
        <Box display="block" w="100%">
          {children}
          <Footer />
        </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}