import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Utensils, User } from "lucide-react";
import {
  Tabs,
  // TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import * as React from "react";
// import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function Register() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <nav className="flex-col self-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Utensils className="h-6 w-6" />
      </nav>
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle className="text-xl">กรุณากรอกข้อมูลของคุณ</CardTitle>
          <CardDescription>
            กรุณากรอกข้อมูลของคุณเพื่อนำไปคำนวณเเละปรับปรุงสุขภาพของคุณ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">ชื่อ</Label>
              <Input id="name" type="text" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">วันเกิด</Label>
              <Popover >
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span>เลือกวันเกิดของคุณ</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className=" w-auto p-0">
                  <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    selected={date}
                    onSelect={setDate}
                    fromYear={1960}
                    toYear={2030}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="age">อายุ</Label>
              <Input id="age" type="number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="weight">น้ำหนัก</Label>
              <Input id="weight" type="number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="height">ส่วนสูง</Label>
              <Input id="height" type="number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="age">เพศ</Label>
              {/* <Input id="gender" type="number" /> */}
              <div className="flex">
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="male">
                      <User className="h-5 flex" />
                      ชาย
                    </TabsTrigger>
                    <TabsTrigger value="female">
                      <User className="h-5 flex" />
                      หญิง
                    </TabsTrigger>
                    <TabsTrigger value="lgbtq">
                      <User className="h-5 flex" />
                      อื่นๆ
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <Button type="submit" className="w-full">
              ถัดไป
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
