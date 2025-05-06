'use client'

import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import {useUserService} from "@/context/UserServiceContext";
import {useEffect, useState} from "react";
import User from "@/model/User";
import Image from "next/image";

export default function Header() {

    const userService = useUserService();
    const [me, setMe] = useState<User | null>(null);

    useEffect(() => {
        userService.getMe()
            .then(me => setMe(me))
    }, [userService])

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

                { me &&
                    <Image className="rounded-full" width={40} height={40} src={me.picture} alt={"My picture"} />
                }

            </div>

        </div>

    )

}