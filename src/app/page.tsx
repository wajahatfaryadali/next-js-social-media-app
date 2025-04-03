import { Button } from "@/components/ui/button";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";

export default function Home() {
    return (
        <>
            
                body home page
                {/* <div className="my-4">
                <ModeToggle />
            </div>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="p-1 font-bold uppercase bg-gray-500 text-white rounded-sm my-1s">
                            sign in
                        </button>
                    </SignInButton>
                    <div>|</div>
                    <SignUpButton mode="modal" />
                </SignedOut>
                <div className="my-2">
                    <hr />
                    <Button variant={"destructive"}>Testing button</Button>
                    <Button variant={"default"}>Testing button</Button>
                    <Button variant={"ghost"}>Testing button</Button>
                    <Button variant={"link"}>Testing button</Button>
                    <Button variant={"outline"}>Testing button</Button>
                    <Button variant={"secondary"}>Testing button</Button>
                    <hr />
                </div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <div className="">
                    <></>home page
                </div>*/}
        </>
    );
}
