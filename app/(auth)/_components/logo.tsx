import Image from "next/image"

export const Logo = function () {
    return(
        <>
        <div className="gap-y-4">
            <Image src='./Unicorn logo.svg' alt="myLogo" width={80} height={80}></Image>
            <div>
                <p className="">GameHub</p>
                <p>Let's Play</p>
            </div>
        </div>
        </>
    )
}