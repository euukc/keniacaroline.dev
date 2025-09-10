import Link from "next/link";

export default function Contato() {
    return (
        <section className="flex flex-col items-center min-h-screen py-2 w-full ">
            <h1 className="text-6xl font-bold mt-[100px] mb-4">Contato</h1>
            <span className="flex flex-row text-xl md:text-2xl items-center text-center px-2">
                Se você deseja entrar em contato comigo para solicitar orçamentos, me chame no WhatsApp:
            </span>
            <div className="flex gap-6 mt-16">
                <Link className="border-2 rounded-lg p-2 bg-[#18181a]" href="https://api.whatsapp.com/send?phone=5511994929467" target="_blank" passHref>WhatsApp </Link>
            </div>

        </section>
    )
}