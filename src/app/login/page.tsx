import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container relative flex flex-col items-center">
      <div className="w-full">
        <div className="mt-10">
          <h1 className="text-center text-2xl font-semibold text-gray-500">
            ログイン
          </h1>
        </div>

        <div className="grid gap-6 mt-5">
          <form action="">
            <div className="grid gap-2 py-2">
              <Input type="email" placeholder="メールアドレス" />
            </div>
            <div className="grid gap-2">
              <Input type="password" placeholder="パスワード" />
            </div>
            <button
              className={buttonVariants({
                className: "w-full mt-4",
              })}
            >
              ログイン
            </button>
            <div>
              <Link
                href="/sign-in"
                className={buttonVariants({
                  variant: "link",
                  className: "text-gray-600",
                })}
              >
                パスワードをお忘れの方はこちら
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
