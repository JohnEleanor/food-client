
import { FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { AspectRatio } from "@/components/ui/aspect-ratio"

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
          
            <Link to="/dashboard">
              <Button className="bg-lime-600 w-full shadow-lg hover:bg-lime-500">
                <FaLine className="mr-2 h-4 w-4" /> Login ด้วย Line Account
              </Button>
            </Link>
            <Button variant="outline" className="w-full">
              ฉันไม่มี Line Account
            </Button>
          </div>
      
        </div>
      </div>
      <AspectRatio  className="hidden bg-muted lg:block">
        <img
          src="https://siamais.co.uk/wp-content/uploads/2023/07/pad-thai-dish-1024x771.jpeg"
          alt="Photo by Drew Beamer"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
      {/* <div className="hidden bg-muted lg:block">
        <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg" width="1920" height="1080"/>
      </div> */}
    </div>
  );
}
