import { FC } from "react"
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

const Home: FC = () => {

    const onClickMintButton = () => {
        console.log("mint")
        alert("mint")
    }
    return (
        <>
            <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center main-bg">
                <button className="mint-button-bg block md:w-[340px] md:h-[80px] w-[220px] h-[50px]" onClick={onClickMintButton}></button>
            </div>
        </>
    )
}

export default Home;