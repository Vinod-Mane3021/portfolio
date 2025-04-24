"use client"

import { useIsMobile } from '@/hooks/use-is-mobile'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { NavMobile } from './nav-mobile'
import { navRoutes } from '@/constants/nav'

export const Nav = () => {
  const pathname = usePathname()
  const isMobile = useIsMobile(750)

  if(isMobile) {
    return <NavMobile/>
  }

  console.log({pathname})
  
  return (
    <div className='bg-background_soft rounded-full px-4 py-[6px] border border-gray-300 dark:border-gray-800'>
      {navRoutes.map(route => (
        <Link 
          key={route.id} 
          href={route.href} 
          className={cn(
            "text-muted-foreground hover:text-primary px-2 text-sm font-medium tracking-wide",
            pathname == route.href && "text-primary"
          )}
          >
          {route.label}
        </Link>
      ))}
    </div>
  )
}
