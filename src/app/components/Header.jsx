import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full mt-8">            
                <ul className="flex md:gap-6 w-full justify-center text-[15px] md:text-[18px]">
                    <li className="hover:bg-[#18181a] rounded px-2 py-2 transition-all duration-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:bg-[#18181a] rounded px-2 py-2 transition-all duration-300">
                        <Link href="/sobre">Sobre</Link>
                    </li>
                    <li className="hover:bg-[#18181a] rounded px-2 py-2 transition-all duration-300">
                        <Link href="/projetos">Projetos</Link>
                    </li>
                    <li className="hover:bg-[#18181a] rounded px-2 py-2 transition-all duration-300">
                        <Link href="/contato">Contato</Link>
                    </li>
                </ul>            
        </header>
    )
}