"use client";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { BellIcon, HomeIcon, Menu, UserIcon } from "lucide-react";
// import ThemeToggle from "../ui/ThemeToggle";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../ui/ThemeToggle"), { ssr: false });

type Props = {
    // user: any;
};

const MobileNav = (props: Props) => {
    const currentUser = useUser();
    let user = null;

    console.log("currentUsercurrentUser ", currentUser?.user);

    return (
        <div className="flex justify-end items-center gap-4">
            <ThemeToggle />
            <Sheet>
                {currentUser.user && (
                    <>
                        <SheetTrigger className="flex justify-center">
                            <Menu />
                        </SheetTrigger>
                        <div className="flex items-center justify-center">
                            <UserButton />
                        </div>
                    </>
                )}
                {currentUser.isLoaded && !currentUser?.user ? (
                    <SignInButton mode="modal">
                        <Button variant={"link"} size={"sm"}>
                            Sign In
                        </Button>
                    </SignInButton>
                ) : (
                    <></>
                )}
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-center">Menu</SheetTitle>
                        <SheetDescription className="flex flex-col gap-3 items-start">
                            {currentUser.user ? (
                                <>
                                    <Button variant={"ghost"} asChild>
                                        <Link href={"/"}>
                                            <HomeIcon className="h-4 w-4" />
                                            <span className="">Home</span>
                                        </Link>
                                    </Button>
                                    <Button variant={"ghost"} asChild>
                                        <Link href={"/notifications"}>
                                            <BellIcon className="h-4 w-4" />
                                            <span className="">
                                                Notifications
                                            </span>
                                        </Link>
                                    </Button>
                                    <Button variant={"ghost"} asChild>
                                        <Link href={"/profile"}>
                                            <UserIcon className="h-4 w-4" />
                                            <span className="">Profile</span>
                                        </Link>
                                    </Button>
                                </>
                            ) : (
                                <></>
                            )}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
