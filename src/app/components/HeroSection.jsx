"use client";

import { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";


export default function HeroSection() {

    const [show, setShow] = useState(false);


    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <section>
            <main className="max-w-screen-lg mx-auto px-4">
                <div className="h-[77vh] flex flex-col justify-center items-center">
                    <RoughNotation
                        type="underline"
                        show={show}
                        color="#7042cc" 
                        animationDelay={100}
                        animationDuration={500}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
                            Olá, sou a Kênia Caroline -- Software Developer & Indie Hacker
                        </h2>
                    </RoughNotation>

                    <h2 className="text-md font-regular text-center pt-10 text-[18px]">
                        uma desenvolvedora de software apaixonada por criar soluções inovadoras para impulsionar negócios no mundo digital
                    </h2>
                </div>
            </main>
        </section>

    )
}

