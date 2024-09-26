
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
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { th } from 'date-fns/locale';  // ใช้ locale ภาษาไทย

type FormValues = {
  name: string;
  age: number;
  weight: number;
  height: number;
  gender: string;
  birthdate: {
    day: number;
    month: number;
    year: number;
  };
}

export default function Register() {
  const navigate = useNavigate();  // Declare useNavigate hook
  const [date, setDate] = React.useState<Date>();
  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data, e) => {
    if (e) e.preventDefault();
    console.log(data)
    navigate('/register-2');
  }


  return (

    <div className="flex flex-2 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <nav className="flex-col self-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Utensils className="h-6 w-6" />

      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                <Input type="text" {...register('name', { required: 'กรุณากรอกชื่อของท่าน' })} />
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
                        format(date, "PPP", { locale: th })
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
                      onSelect={(newDate) => {
                        setDate(newDate);
                        if (newDate) {
                            const formattedDate = {
                              day: newDate.getDate(),
                              month: newDate.getMonth() + 1, // Months are zero-indexed
                              year: newDate.getFullYear(),
                            };
                            // console.log(formattedDate);
                            setValue('birthdate', formattedDate);
                        }

                      }}
                      fromYear={1960}
                      toYear={2030}

                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="age">อายุ</Label>
                <Input type="number" {...register('age', { required: 'กรุณากรอกอายุของท่าน' })} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="weight">น้ำหนัก</Label>
                <Input type="number" {...register('weight', { required: 'กรุณากรอกน้ำหนักของท่าน' })} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="height">ส่วนสูง</Label>
                <Input type="number" {...register('height', { required: 'กรุณากรอกส่วนสูงของท่าน' })} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="age">เพศ</Label>
                <div className="flex">
                  <Tabs onValueChange={(value) => {
                    setValue('gender', value); // update Gender KUB 😂
                  }}>
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
                  <input
                    type="hidden"
                    {...register('gender', { required: 'กรุณาเลือกเพศของท่าน' })}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                ถัดไป
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}