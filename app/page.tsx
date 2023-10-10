import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Page() {
  let session = await getServerSession(authOptions);

  return (
    <div>
      <p>반갑습니다 {session?.user?.name}님</p>
    </div>
  );
}
