import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mx-auto flex max-w-5xl flex-col justify-start gap-2 overflow-hidden xl:mt-12 px-5 lg:px-0">
            <div className="rounded-xl border bg-accent/50 dark:backdrop-blur-2xl">
                <div className="items-center m-0 flex justify-center p-5">
                    <div className="grid-cols-5 items-center gap-3 flex">
                        <Link aria-label="Instagram" target="_blank" className="hover:bg-[#18181a] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10" href="https://www.instagram.com/keniacaroline__" target="_blank">
                            <i className="bi bi-instagram"></i>
                        </Link>
                        <Link aria-label="Linkedin" target="_blank" className="hover:bg-[#18181a] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10" href="https://www.linkedin.com/in/keniac" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </Link>
                        <Link aria-label="Github" target="_blank" className="hover:bg-[#18181a] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10" href="https://github.com/euukc" target="_blank">
                            <i className="bi bi-github"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}