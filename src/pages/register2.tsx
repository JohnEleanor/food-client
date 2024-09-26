
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


export default function register2() {
    return (
        <>
            <div className="flex flex-2 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <nav className="flex-col self-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Utensils className="h-6 w-6" />

                </nav>
                <form >
                    <Card className="mx-auto max-w-xl">
                        <CardHeader>
                            <CardTitle className="text-xl">คุณมีไลฟ์สไตล์เเบบไหน</CardTitle>
                            <CardDescription>
                                กรุณากรอกข้อมูลของคุณเพื่อนำไปคำนวณเเละปรับปรุงสุขภาพของคุณ
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="flex  bg-[#B8D8BA] h-20 rounded-lg p-2 text-white">
                                    <div className="grid justify-items-center content-center mx-2 w-36 rounded-lg">
                                        <img src="https://cdn-icons-png.flaticon.com/512/6478/6478061.png  " className="cover" width={50}/>
                                    </div>
                                    <div className="grid justify-items-center bg-stone-50 text-black rounded-lg p-2 w-full">
                                        <p>ไม่ออกกำลังกาย / ทำงานนั่งโต๊ะ</p>
                                    </div>
                                </div>
                                <div className="flex  bg-[#B8D8BA] h-20 rounded-lg p-2 text-white">
                                    <div className="grid justify-items-center mx-2 w-36 rounded-lg items-center">
                                        <img src="https://cdn-icons-png.flaticon.com/512/6478/6478060.png " className="cover" width={50}/>
                                    </div>
                                    <div className="grid justify-items-center bg-stone-50 text-black rounded-lg p-2 w-full">
                                        <p>ออกกำลังกายเบาๆ</p>
                                        <p className="text-muted-foreground">(1-2 ครั้งต่อสัปดาห์)</p>
                                    </div>
                                </div>
                                <div className="flex  bg-[#B8D8BA] h-20 rounded-lg p-2 text-white">
                                    <div className="grid justify-items-center mx-2 w-36 rounded-lg items-center">
                                        <img src="https://cdn-icons-png.flaticon.com/512/6478/6478057.png" className="cover" width={50}/>
                                    </div>
                                    <div className="grid justify-items-center bg-stone-50 text-black rounded-lg p-2 w-full">
                                        <p>ออกกำลังกาย </p>
                                        <p className="text-muted-foreground">(3-5 ครั้งต่อสัปดาห์)</p>
                                    </div>
                                </div>
                                <div className="flex  bg-[#B8D8BA] h-20 rounded-lg p-2 text-white">
                                    <div className="grid justify-items-center mx-2 w-36 rounded-lg items-center">
                                        <img src="https://cdn-icons-png.flaticon.com/512/6478/6478058.png" className="cover" width={50}/>
                                    </div>
                                    <div className="grid justify-items-center bg-stone-50 text-black rounded-lg p-2 w-full ">
                                        <p>ออกกำลังกาย </p>
                                        <p className="text-muted-foreground">(6-7 ครั้งต่อสัปดาห์)</p>
                                    </div>
                                </div>
                                <div className="flex bg-[#B8D8BA] h-20 rounded-lg p-3 text-white">
                                    <div className="grid justify-items-center mx-2 w-36 rounded-lg items-center">
                                        <img src="https://cdn-icons-png.flaticon.com/512/6478/6478059.png " className="cover" width={50}/>
                                    </div>
                                    <div className="grid justify-items-center bg-stone-50 text-black rounded-lg p-2 w-full">
                                        <p>ออกกำลังกายทุกวัน</p>
                                        <p className="text-muted-foreground">(วันละ 2 เวลา)</p>
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
        </>
    )
}

