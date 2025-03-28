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
                <SignInButton mode="modal" />
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
