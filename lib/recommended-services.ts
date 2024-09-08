import { db } from "@/database/db";
import { getYourSelf } from "./getCurrentUser";

export const recommendedUser = async () => {
  let userId;

  try {
    const self = await getYourSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  let users = [];

  if (userId) {
    users = await db.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  if (!users) {
    console.log("There is no Active Users");
  }

  return users;
};
