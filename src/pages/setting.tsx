import Navbar from "./navbar.tsx";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { PersonStanding, Star  } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";

import { Input } from "@/components/ui/input";

export default function Settings() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="w-full max-w-6xl text-3xl font-medium">ตั้งค่า</div>
       {/* <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold text-start">ตั้งค่า</h1>
        </div> */}
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          />

          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>อัพเดตค่าน้ำหนักเเละส่วนสูงปัจจุบัน</CardTitle>
                <CardDescription>
                  หากมีการเปลี่ยนแปลงน้ำหนักหรือส่วนสูง กรุณาอัพเดตข้อมูล
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label className="text-foreground">น้ำหนัก</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      placeholder="50 Kg"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label className="text-foreground">ส่วนสูง</Label>
                    <Input
                      id="name"
                      type="number"
                      className="w-full"
                      placeholder="160 Cm"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Alert>
                      <PersonStanding className="h-4 w-4" />
                      <AlertTitle>BMI</AlertTitle>
                      {/* <Label className="text-foreground-muted">BMI</Label> */}
                      <AlertDescription>
                        <span>ค่า BMI ของคุณคือ </span>
                        <Badge>
                          22.2 <Star className="ml-1 h-4 w-4" />
                        </Badge>
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>บันทึก</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>อายุ</CardTitle>
                <CardDescription>
                  หากมีการเปลี่ยนแปลงอายุ กรุณาอัพเดตข้อมูล
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label className="text-foreground">อายุ</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      placeholder="18 ปี"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>บันทึก</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>โรคประจำตัว</CardTitle>
                <CardDescription>
                  หากมีการเปลี่ยนแปลงของโรคประจำตัว กรุณาอัพเดตข้อมูล
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Textarea placeholder="ระบุโรคประจำตัวของคุณหากมี" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>บันทึก</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>การเเพ้อาหาร</CardTitle>
                <CardDescription>
                  หากมีการเปลี่ยนแปลงการเเพ้อาหาร กรุณาอัพเดตข้อมูล
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                <Textarea placeholder="ระบุการเเพ้อาหารของคุณหากมี" />
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>บันทึก</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>เป้าหมาย</CardTitle>
                <CardDescription>
                  หากมีการเปลี่ยนแปลงเป้าหมายในการกิน กรุณาอัพเดตข้อมูล
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label className="text-foreground">เป้าหมายในการกิน</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="เลือกเป้าหมายในการกิน" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>เลือกเป้าหมายในการกิน</SelectLabel>
                          <SelectItem value="apple">เพิ่มน้ำหนัก</SelectItem>
                          <SelectItem value="banana">ลดน้ำหนัก</SelectItem>
                          <SelectItem value="blueberry">คุมน้ำหนัก</SelectItem>
                          {/* <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem> */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>บันทึก</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
