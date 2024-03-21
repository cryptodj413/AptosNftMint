import { FC } from "react"
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";


const Header : FC = () => {

    return (
        <>
            <div className="w-[100vw] flex px-[24px] py-[12px] absolute justify-end">
                <WalletSelector />
            </div>
        </>
    )
}

export default Header;