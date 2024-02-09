import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cx } from "class-variance-authority";

const Page = () => {
  return (
    <div className="container relative flex flex-col items-center">
      <div className="w-full">
        <div className="mt-10">
          <h1 className="text-center text-2xl font-semibold text-gray-500">
            ログイン
          </h1>
        </div>

        <div className="mt-4">
          <form
            action=""
            className="flex flex-col items-center justify-center gap-y-4"
          >
            <div className="w-full">
              <Input type="email" placeholder="メールアドレス" />
            </div>
            <div className="w-full">
              <Input type="password" placeholder="パスワード" />
            </div>
            <Button className="w-[200px]">ログイン</Button>
            <div className="text-sm">
              パスワードをお忘れの方は
              <Link href="/sign-in" className="text-sm underline">
                こちら
              </Link>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center mt-16 gap-y-4">
          <p className="text-sm">アカウントをお持ちでない方はこちら</p>
          <Link href="/sign-up" className={cx(buttonVariants(), "w-[200px]")}>
            新規会員登録
          </Link>
          <Link
            href="/"
            className={cx(
              buttonVariants({
                variant: "outline",
              }),
              "w-[200px]"
            )}
          >
            戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
