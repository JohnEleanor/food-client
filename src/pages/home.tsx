import Navbar from "./navbar.tsx";

/**
 * shadcnUI
 */
import { Separator } from "@/components/ui/separator"
// import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  // ChartTooltip,
  // ChartTooltipContent,
} from "@/components/ui/chart";
import {
  // Area,
  // AreaChart,
  Bar,
  BarChart,
  // CartesianGrid,
  // Label,
  LabelList,
  // Line,
  // LineChart,
  // PolarAngleAxis,
  // RadialBar,
  // RadialBarChart,
  Rectangle,
  // ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
/**
 *
 */

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <Card className="max-w-5xl" x-chunk="charts-01-chunk-6">
            <CardHeader className="p-4 pb-0">
              <CardTitle>เคลอรี่วันนี้</CardTitle>
              <CardDescription>
                วันนี้คุณได้รับเคลอรี่ไปแล้ว
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
              <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
                1,254
                <span className="text-sm font-normal text-muted-foreground">
                  kcal
                </span>
              </div>
              <ChartContainer
                config={{
                  calories: {
                    label: "Calories",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="ml-auto w-[64px]"
              >
                <BarChart
                  accessibilityLayer
                  margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2024-01-01",
                      calories: 354,
                    },
                    {
                      date: "2024-01-02",
                      calories: 514,
                    },
                    {
                      date: "2024-01-03",
                      calories: 345,
                    },
                    {
                      date: "2024-01-04",
                      calories: 734,
                    },
                    {
                      date: "2024-01-05",
                      calories: 645,
                    },
                    {
                      date: "2024-01-06",
                      calories: 456,
                    },
                    {
                      date: "2024-01-07",
                      calories: 345,
                    },
                  ]}
                >
                  <Bar
                    dataKey="calories"
                    fill="var(--color-calories)"
                    radius={2}
                    fillOpacity={0.2}
                    activeIndex={6}
                    activeBar={<Rectangle fillOpacity={0.8} />}
                  />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={4}
                    hide
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
         
          <Card className="max-w-5xl" x-chunk="charts-01-chunk-4">
          <CardContent className="flex gap-4 p-4 pb-2">
            <ChartContainer
              config={{
                move: {
                  label: "โปรตีน",
                  color: "hsl(var(--chart-1))",
                },
                stand: {
                  label: "Stand",
                  color: "hsl(var(--chart-2))",
                },
                exercise: {
                  label: "Exercise",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[140px] w-full"
            >
              <BarChart
                margin={{
                  left: 10,
                  right: 0,
                  top: 0,
                  bottom: 10,
                }}
                data={[
                  {
                    activity: "โปรตีน",
                    value: (8 / 12) * 100,
                    label: "8/12 กรัม",
                    fill: "var(--color-stand)",
                  },
                  {
                    activity: "คาร์โบไฮเดท",
                    value: (46 / 60) * 100,
                    label: "46/60 กรัม",
                    fill: "var(--color-exercise)",
                  },
                  {
                    activity: "ไขมัน",
                    value: (245 / 360) * 100,
                    label: "245/360 กรัม",
                    fill: "var(--color-move)",
                  },
                 
                ]}
                layout="vertical"
                barSize={26}
                barGap={2}
              >
                <XAxis type="number" dataKey="value" hide />
                <YAxis
                  dataKey="activity"
                  type="category"
                  tickLine={false}
                  tickMargin={1}
                  axisLine={false}
                  className="capitalize"
                />
                <Bar dataKey="value" radius={8}>
                  <LabelList
                    position="insideLeft"
                    dataKey="label"
                    fill="white"
                    offset={8}
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row border-t p-4">
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">โปรตีน</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  562
                  <span className="text-sm font-normal text-muted-foreground">
                    กรัม
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">คาร์โบไฮเดท</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  73
                  <span className="text-sm font-normal text-muted-foreground">
                  กรัม
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">ไขมัน</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  14
                  <span className="text-sm font-normal text-muted-foreground">
                  กรัม
                  </span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>ประวัติการกิน</CardTitle>
                <CardDescription>
                  นี้คือรายการประวัติการกินอาหารของคุณที่จะบอกแคลอรี่ของอาหาร.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ชื่ออาหาร</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Type
                    </TableHead>
                    <TableHead className="text-right">จำนวนแคลอรี่</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">ข้าวผัด</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right">250 kg/cal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">เบอเกอร์</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        olivia@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Refund
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Declined
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-24
                    </TableCell>
                    <TableCell className="text-right">250 kg/cal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">หมูปิ้ง</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        noah@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-25
                    </TableCell>
                    <TableCell className="text-right">250 kg/cal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">ไก่ทอด</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        emma@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-26
                    </TableCell>
                    <TableCell className="text-right">250 kg/cal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">หมูทอด</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-27
                    </TableCell>
                    <TableCell className="text-right">250 kg/cal</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
