import React, { use } from "react";
import DesktopNav from "./sub-components/DesktopNav";
import MobileNav from "./sub-components/MobileNav";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

const Navbar = async () => {
    const user = await currentUser();

    if (user) {
        await syncUser();
    }

    return (
        <nav>
            <div className="sticky top-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filler]:bg-background/60 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16 gap-2 md:gap-4">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="text-xl font-bold text-primary font-mono tracking-widest"
                            >
                                Socially
                            </Link>
                        </div>
                        <div className="flex-1">
                            <div className="hidden lg:flex">
                                <DesktopNav />
                            </div>
                            <div className="lg:hidden">
                                <MobileNav />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
