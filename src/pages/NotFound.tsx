import { FC } from "react"

const NotFound : FC = () => {

    return (
        <>
            <div className="h-screen w-[100vw] flex flex-col items-center justify-center">
                <h1 className="font-black text-8xl block">404 Page</h1>
                <div className="h-[20vh]"></div>
            </div>
        </>
    )
}

export default NotFound;