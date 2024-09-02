
import { Link } from "react-router-dom";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../components/theme-switcher";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
    CircleUser,
    Menu,
    Utensils,
    Users,
    LogOut,
    // Settings,
    User,
  } from "lucide-react";

export default function navbar() {
  return (
      <div className="sticky z-50 top-0 flex h-16 whitespace-nowrap items-center items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="/dashboard" className="flex items-center gap-2 text-lg md:text-base">
            <Utensils className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            to="/dashboard"
            className="text-foreground transition-colors hover:text-foreground"
          >
            หน้าหลัก
          </Link>
          <Link
            to="/history"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            ประวัติการกิน
          </Link>

          <Link
            to="/setting"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            ตั้งค่า
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Utensils className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link to="/dashboard" className="hover:text-foreground">
                หน้าหลัก
              </Link>
              <Link
                to="/history"
                className="text-muted-foreground hover:text-foreground"
              >
                ประวัติการกิน
              </Link>
              <Link to="/setting" className="text-muted-foreground hover:text-foreground" >
                ตั้งค่า
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-2 sm:flex-initial "></form>
          <DropdownMenu>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <ModeToggle />
            </ThemeProvider>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <Link to="/setting">
                <span className="text-foreground">ตั้งค่าบัญชีของฉัน</span>
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuLabel>บัญชีของฉัน</DropdownMenuLabel> */}
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <Link to="/setting">
                  <span className="text-muted-foreground hover:text-foreground">
                    ตั้งค่า
                  </span>
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span className="text-muted-foreground hover:text-foreground">
                  แจ้งปัญหา
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  ออกจากระบบ
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
  );
}
