import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <Card className="mx-auto max-w-sm my-52 shadow-xl ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">เข้าสู่ระบบ</CardTitle>
        <CardDescription>กรุณาเข้าสู่ระบบเพื่อใช้ในการเก็บข้อมูล</CardDescription>
      </CardHeader>
      <CardContent>
      <Link to="/dashboard">
          <Button
            variant="destructive"
            className="shadow-lg"
          >
            <FaLine className="mr-2 h-4 w-4" /> Login ด้วย Line Account
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
