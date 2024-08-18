// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { FaLine } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { LogIn  } from "lucide-react";

// export default function login() {
//   return (
//     <Card className="mx-auto max-w-sm my-52 shadow-xl ">
//       <CardHeader className="space-y-1">
//         <CardTitle className="text-2xl font-bold flex items-center">
//         <LogIn />
//             <span className="ml-2 flex ">เข้าสู่ระบบ</span>
//         </CardTitle>
//         <CardDescription>กรุณาเข้าสู่ระบบเพื่อใช้ในการเก็บข้อมูล</CardDescription>
//       </CardHeader>
//       <CardContent>
//       <Link to="/dashboard">
//           <Button
//             variant="destructive"
//             className="shadow-lg"
//           >
//             <FaLine className="mr-2 h-4 w-4" /> Login ด้วย Line Account
//           </Button>
//         </Link>
//       </CardContent>
//     </Card>
//   );
// }

// import Image from "next/image"
// import Link from "next/link"
import { FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

export default function login() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">เข้าสู่ระบบ</h1>
            <p className="text-balance text-muted-foreground">
              กรุณาเข้าสู่ระบบด้วย Line เพื่อใช้ในการเก็บข้อมูล
            </p>
          </div>
          <div className="grid gap-4">
            {/* <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div> */}
            <Link to="/dashboard">
              <Button variant="destructive" className="w-full shadow-lg">
                <FaLine className="mr-2 h-4 w-4" /> Login ด้วย Line Account
              </Button>
            </Link>
            <Button variant="outline" className="w-full">
              ฉันไม่มี Line Account
            </Button>
          </div>
          {/* <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="#" className="underline">
              Sign up
            </Link>
          </div> */}
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" />
     
      </div>
    </div>
  );
}
