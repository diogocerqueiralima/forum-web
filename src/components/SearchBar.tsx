import {FaSearch} from "react-icons/fa";

interface SearchBarProps {

    placeholder: string;

}

export default function SearchBar({ placeholder }: SearchBarProps) {

    return (

        <div className={`flex flex-row items-center gap-2 px-4 text-base py-2 rounded-md bg-input-background`}>

            <FaSearch />

            <input
                className={`outline-none border-none`}
                type={`text`}
                placeholder={placeholder}
            />

        </div>

    )

}