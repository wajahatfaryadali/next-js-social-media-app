"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import Link from "next/link";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

const ModeToggle = dynamic(() => import("../ui/ModeToggle"), { ssr: false });


type Props = {
    user: any
};

const DesktopNav = (props: Props) => {
    const { user } = props;
    return (
        <div className="flex justify-end w-full gap-2">
            <ModeToggle />
            <Button variant={"ghost"} asChild>
                <Link href={"/"}>
                    <HomeIcon className="h-4 w-4" />
                    <span className="hidden lg:inline">Home</span>
                </Link>
            </Button>
            {user ? (
                <>
                    <Button variant={"ghost"} asChild>
                        <Link href={"/"}>
                            <BellIcon className="h-4 w-4" />
                            <span className="hidden lg:inline">
                                Notifications
                            </span>
                        </Link>
                    </Button>
                    <Button variant={"ghost"} asChild>
                        <Link href={"/"}>
                            <UserIcon className="h-4 w-4" />
                            <span className="hidden lg:inline">Profile</span>
                        </Link>
                    </Button>
                </>
            ) : (
                <>
                    <SignOutButton />
                </>
            )}
        </div>
    );
};

export default DesktopNav;
