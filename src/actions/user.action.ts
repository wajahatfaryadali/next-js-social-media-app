"use server";

import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export const syncUser = async () => {
    try {
        const user = await currentUser()
        const { userId } = await auth();

        if (!user || !userId) return

        if (userId) {

            // checking if user already exist
            const existingUser = await prisma.user.findUnique({
                where: {
                    clerkID: userId
                }
            })

            if (existingUser) {
                return existingUser;
            }

            const dbUser = await prisma.user.create({
                data: {
                    email: user.primaryEmailAddress?.emailAddress ?? "",
                    username: user.username ?? user.primaryEmailAddress?.emailAddress.split('@')[0] ?? "",
                    name: `${user.firstName || ""} ${user.lastName || ""}`,
                    password: "",
                    clerkID: userId ?? "",
                    bio: "",
                    image: user.imageUrl ?? "",
                    location: "",
                    website: "",
                }
            })

            return dbUser

        }
    } catch (error) {
        console.error("Error while synchronize user", error)
    }
}