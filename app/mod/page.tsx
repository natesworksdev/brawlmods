'use client'

import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')
 
  return <>ID: {id}</>
}