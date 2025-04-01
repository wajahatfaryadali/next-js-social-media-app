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
        <ClerkProvider>
            <SignedOut>
                <SignInButton mode="modal">
                    <button className="p-1 font-bold uppercase bg-gray-500 text-white rounded-sm my-1s">sign in</button>
                </SignInButton>
                <div>|</div>
                <SignUpButton mode="modal" />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <div className="">
                <></>home page
            </div>
        </ClerkProvider>
    );
}
