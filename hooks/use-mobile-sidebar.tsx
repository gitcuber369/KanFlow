import { create } from "zustand"; 

type MobileSidebarStore = {
    isOpen : boolean; 
    onOpen : () => void; 
    onClose : () => void;
}

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
    isOpen : false,
    onOpen : () => set({ isOpen : true}),
    onClose : () => set({ isOpen : false}),
}));


// this is for the state management please don't get confused Buddy!