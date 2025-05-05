"use client"
import { useRouter } from 'next/navigation';
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Game } from '@/app/dyslexia/components/Game';

export default function DyslexiaGamePage() {
  const router = useRouter();

  return (
    <SidebarProvider>
      <AppSidebar params={"dyslexia/games"}/>
      <SidebarInset className="flex h-screen">
        <div className="flex-grow p-4 overflow-y-auto">
          <button 
            onClick={() => router.back()}
            className="mb-4 text-blue-500 hover:text-blue-700 transition-colors"
          >
            ← Back
          </button>
          
          <Game />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
} 