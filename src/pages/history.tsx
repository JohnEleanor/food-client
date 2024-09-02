// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button"
import Navbar from "./navbar.tsx";

export default function history() {
  return (
    <div className="flex min-h-screen w-full flex-col">
    
    <Navbar />

    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold text-start">ประวัติการกิน</h1>
        </div>
      </main>

    </div>

  )
}
