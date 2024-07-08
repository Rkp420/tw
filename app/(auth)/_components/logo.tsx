import { Poppins } from "next/font/google"
import Image from "next/image"

import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ['latin'],
    weight: ['600', '200', '400', '300', '500', '800', '700']
})

export const Logo = function () {
    return(
        <>
        <div className="gap-y-4">
            <Image src='./Unicorn logo.svg' alt="myLogo" width={80} height={80}></Image>
            <div>
                <p className="text-lg">GameHub</p>
                <p>Let's Play</p>
            </div>
        </div>
        </>
    )
}