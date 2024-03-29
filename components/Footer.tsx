import React from "react"
import { Container } from "@nextui-org/react"
import FooterList from "./FooterList"

export default function Footer() {
    return(
        <div className="footer_bg relative w-full">
            <Container md>
                <div className="py-10">
                    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 md:gap-0 my-5">
                        <img className="hidden md:block md:w-28" src="/footer-logo.svg"/>
                        <FooterList title="Social" list={["Twitter", "Telegram", "Medium", "Discord"]} link={['https://twitter.com','https://telegram.com', 'https://medium.com', 'https://discord.com']}/>
                        <FooterList title="Products" list={["Trade", "Swap", "Wallet", "Blog"]} link={['https://twitter.com','https://telegram.com', 'https://medium.com', 'https://discord.com']}/>
                        <FooterList title="Developers" list={["Documentation", "Help Center"]} link={['https://twitter.com','https://telegram.com', 'https://medium.com', 'https://discord.com']}/>
                    </div>
                    <div className="z-10 py-5">
                        <p className="text-center text-dull-gray text-sm">Copyright © 2022 SolanaTrade</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}