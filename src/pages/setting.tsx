import Navbar from "./navbar.tsx";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Plus, Minus, HeartPulse, Drumstick, Salad   } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { PersonStanding, Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

const data = [
  {
    goal: 40,
  },
  {
    goal: 50,
  },
  {
    goal: 60,
  },
  {
    goal: 70,
  },
  {
    goal: 80,
  },
  {
    goal: 90,
  },
  {
    goal: 100,
  },
  {
    goal: 120,
  },
  {
    goal: 130,
  },
  {
    goal: 140,
  },
  {
    goal: 150,
  },
  {
    goal: 160,
  },
  {
    goal: 170,
  },
  {
    goal: 180,
  },
  {
    goal: 190,
  },
  {
    goal: 200,
  },
];

console.log(data);

export default function Settings() {
  const weight = 50;
  const [goal, setGoal] = React.useState(weight);

  const min = 40;
  const max = 300;
  function onClick(adjustment: number) {
    // setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    setGoal(goal + adjustment);
  }
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="w-full max-w-6xl text-3xl font-medium">ตั้งค่า</div>

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
                  <Label className="text-foreground">เป้าหมายในการกิน</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="เลือกเป้าหมายในการกิน" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>เลือกเป้าหมายในการกิน</SelectLabel>
                        <SelectSeparator/>
                        <SelectItem value="plush_kg">
                          <div className="flex ">
                          <Drumstick className="mr-3"/>
                          <p>เพิ่มน้ำหนัก</p>
                          </div>
                        </SelectItem>
                        <SelectItem value="minus_kg">
                          <div className="flex ">
                          <Salad  className="mr-3"/>
                          <p>ลดน้ำหนัก</p>
                          </div>
                        </SelectItem>
                        <SelectItem value="stable_kg" >
                          <div className="flex ">
                          <HeartPulse className="mr-3"/>
                          <p>คุมน้ำหนัก</p>
                          </div>
                          </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* <div className="grid gap-3"></div> */}
                  <Label className="text-foreground">ตั้งเป้าหมายน้ำหนัก</Label>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">ตั้งเป่าหมายน้ำหนัก</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                          <DrawerTitle>เป้าหมายน้ำหนัก</DrawerTitle>
                          <DrawerDescription>
                            ตั้งค่าเป่าหมายน้ำหนักที่คุณต้องการ
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                          <div className="flex items-center justify-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 shrink-0 rounded-full"
                              onClick={() => onClick(-10)}
                              disabled={goal <= min}
                            >
                              <Minus className="h-4 w-4" />
                              <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex-1 text-center">
                              <div className="text-7xl font-bold tracking-tighter">
                                {goal}
                              </div>
                              <div className="text-[1rem] uppercase text-muted-foreground">
                                กิโลกรัม
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 shrink-0 rounded-full"
                              onClick={() => onClick(10)}
                              disabled={goal >= max}
                            >
                              <Plus className="h-4 w-4" />
                              <span className="sr-only">Increase</span>
                            </Button>
                          </div>
                          <div className="mt-3 h-[120px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={data}>
                                <Bar
                                  dataKey="goal"
                                  style={
                                    {
                                      fill: "hsl(var(--foreground))",
                                      opacity: 0.9,
                                    } as React.CSSProperties
                                  }
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                        <DrawerFooter>
                          <Button>Submit</Button>
                          <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>

                {/* <div className="grid grid-cols-4 gap-3 my-2">
                  <Label className="text-foreground">ตั้งเป้าหมายน้ำหนัก</Label>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">ตั้งเป่าหมายน้ำหนัก</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                          <DrawerTitle>Move Goal</DrawerTitle>
                          <DrawerDescription>
                            Set your daily activity goal.
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                          <div className="flex items-center justify-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 shrink-0 rounded-full"
                              onClick={() => onClick(-10)}
                              disabled={goal <= min}
                            >
                              <Minus className="h-4 w-4" />
                              <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex-1 text-center">
                              <div className="text-7xl font-bold tracking-tighter">
                                {goal}
                              </div>
                              <div className="text-[0.70rem] uppercase text-muted-foreground">
                                Calories/day
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 shrink-0 rounded-full"
                              onClick={() => onClick(10)}
                              disabled={goal >= max}
                            >
                              <Plus className="h-4 w-4" />
                              <span className="sr-only">Increase</span>
                            </Button>
                          </div>
                          <div className="mt-3 h-[120px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={data}>
                                <Bar
                                  dataKey="goal"
                                  style={
                                    {
                                      fill: "hsl(var(--foreground))",
                                      opacity: 0.9,
                                    } as React.CSSProperties
                                  }
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                        <DrawerFooter>
                          <Button>Submit</Button>
                          <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div> */}
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
