'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar';

export default function MobileSideBar() {
    const pathname = usePathname();
    const [isMounted , setIsMounted] = useState(false);


    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    useEffect(() => {
        onClose();
    }, [pathname, onClose])

    if(!isMounted) {
        return null
    }
  return (
    <div>
        <Button 
        className='block md:hidden mr-5'
        variant={'ghost'}
        size={'sm'}
        onClick={onOpen}
        >
            <Menu className='h-4 w-4' />   
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                className='p-2 pt-10'
                side={"left"}>
                    <Sidebar 
                    storageKey='kanflow-sidebar-mobile-state'
                    />
                </SheetContent>
            </Sheet>
        </Button>
    </div>
  )
}
