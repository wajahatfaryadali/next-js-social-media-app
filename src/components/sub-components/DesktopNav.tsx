"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import Link from "next/link";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import {
    SignInButton,
    SignOutButton,
    UserButton,
    useUser,
} from "@clerk/nextjs";

const ThemeToggle = dynamic(() => import("../ui/ThemeToggle"), { ssr: false });

type Props = {};

const DesktopNav = (props: Props) => {
    const currentUser = useUser();
    console.log("chekcing currentuser *** ", currentUser);

    console.log(
        "currentUsercurrentUsercurrentUsercurrentUsercurrentUser *** ",
        currentUser
    );
    return (
        <div className="flex justify-end w-full gap-2">
            <ThemeToggle />
            {currentUser.user ? (
                <>
                    <Button variant={"ghost"} asChild>
                        <Link href={"/"}>
                            <HomeIcon className="h-4 w-4" />
                            <span className="hidden lg:inline">Home</span>
                        </Link>
                    </Button>
                    <Button variant={"ghost"} asChild>
                        <Link href={"/notifications"}>
                            <BellIcon className="h-4 w-4" />
                            <span className="hidden lg:inline">
                                Notifications
                            </span>
                        </Link>
                    </Button>
                    <Button variant={"ghost"} asChild>
                        <Link href={"/profile"}>
                            <UserIcon className="h-4 w-4" />
                            <span className="hidden lg:inline">Profile</span>
                        </Link>
                    </Button>
                    <div className="flex items-center justify-center">
                        <UserButton />
                    </div>

                    {/* <SignOutButton>
                        <Button variant={"ghost"}>Sign out</Button>
                    </SignOutButton> */}
                </>
            ) : (
                <>
                    {!currentUser.isLoaded ? (
                        <></>
                    ) : (
                        <SignInButton mode="modal">
                            <Button variant={"ghost"} asChild>
                                <Link href={"/"}>Sign In</Link>
                            </Button>
                        </SignInButton>
                    )}
                </>
            )}
        </div>
    );
};

export default DesktopNav;
