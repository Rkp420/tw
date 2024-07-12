import { db } from "@/database/db";

export const recommendedUser = async () => {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!users) {
    console.log("There is no Active Users");
  }

  return users;
};
