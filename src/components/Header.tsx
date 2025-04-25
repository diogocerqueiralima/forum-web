import SearchBar from "@/components/SearchBar";
import Link from "next/link";

export default function Header() {

    return (

        <div className={`flex flex-row items-center justify-around py-6 border-b border-border`}>

            <h1 className={`tracking-widest text-3xl font-bold`}>FORUM</h1>

            <div className={`flex flex-row items-center gap-4`}>

                <SearchBar
                    placeholder={`Search for a Topic`}
                />

                <Link
                    href={"/topics"}
                    className={`bg-button-background px-4 py-2 rounded-md transition duration-500 hover:opacity-75`}
                >
                    Create Topic
                </Link>

            </div>

        </div>

    )

}