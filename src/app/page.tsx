import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { cx } from "class-variance-authority";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="container flex flex-col gap-4">
          <h1 className="text-center mt-5">
            要らないもので、欲しいが買える。
            <br /> 下取り購入EC
          </h1>
          <div className="h-20 text-center w-full border">ロゴ</div>
          <p>
            ほしかったあの商品が、
            <br />
            手持ちの商品下取りで、お得な価格に
          </p>
          <button className={cx(buttonVariants())}>
            簡単に下取り見積もりをする
          </button>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex h-40 items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          News {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
