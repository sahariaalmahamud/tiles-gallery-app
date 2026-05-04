import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold">Not Found page!</h3>
        <Link href={"/"} className="text-center">
          {" "}
          <Button className={"bg-[#FF653F]"}>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
