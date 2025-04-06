"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import Link from "next/link";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import {
    SignInButton,
    useAuth,
    UserButton,
} from "@clerk/nextjs";

const ThemeToggle = dynamic(() => import("../ui/ThemeToggle"), { ssr: false });

type Props = {};

const DesktopNav = (props: Props) => {
    const { isSignedIn } = useAuth();

    return (
        <div className="flex justify-end w-full gap-2">
            <ThemeToggle />
            {isSignedIn ? (
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
                    {!isSignedIn && (
                        <SignInButton mode="modal">
                            <Button variant={"ghost"}>Sign In</Button>
                        </SignInButton>
                    )}
                </>
            )}
        </div>
    );
};

export default DesktopNav;
