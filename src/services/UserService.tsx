import User from "@/model/User";
import UserDto from "@/dto/UserDto";

export interface UserService {

    getMe: () => Promise<User | null>;

}

export function userService(url: string): UserService {

    async function getMe() {

        const response = await fetch(`${url}/info/me`, {
            credentials: "include"
        })

        if (!response.ok) {
            return null
        }

        const dto: UserDto = await response.json()
        const picture = dto.picture != null ? dto.picture : "/avatar-default.png"

        return new User(dto.email, dto.given_name, dto.family_name, dto.full_name, picture)
    }

    return {
        getMe
    }

}