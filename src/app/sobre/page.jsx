"use client";


import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";


export default function Sobre() {

  const [show, setShow] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full">
      <section className="flex md:flex-row flex-col-reverse max-w-[1500px] items-center gap-10">
        <div className="md:w-[50%] px-4">
          <div className="text-justify">

            <span className='text-[25px] p-3 w-full font-bold'>Sobre mim</span>

            <p className="md:text-[24px] pt-6">
              Sou desenvolvedora de software com 2 anos de experiência em criação de aplicações
              web, como sites institucionais, landing pages e sistemas, utilizando tecnologias como
              HTML, CSS, Tailwind, SCSS, JavaScript, ReactJS, NextJS, NodeJS, Express e MongoDB.
              <br />
              <br />
              Tenho uma grande paixão por criar soluções inovadoras para impulsionar negócios no mundo digital, utilizando
              software como ferramenta para transformação e crescimento.
            </p>
          </div>

        </div>

        <div className="md:w-[50%] flex justify-center md:pr-[80px] mt-[20px] md:mt-0">
          <Image src="/kenia-foto.png" alt="Kênia Caroline" width={700} height={500} className="object-cover" />
        </div>
      </section>
      <section className="flex flex-col max-w-full items-center gap-10 pb-[100px] mt-[30px] md:mt-0">

        <span className='text-[25px] p-3 w-full font-bold'>Carreira</span>

        <div className='mt-8 flex-col gap-8 flex lg:grid lg:grid-cols-2 px-4'>
          <div className='rounded-lg flex flex-col justify-between p-8 border bg-accent/50 dark:backdrop-blur-2xl'>
            <div className="flex">
              <Image
                className='rounded-lg'
                src="/female-hacker.jpg" width="52" height="52"
              />
            </div>
            <div className='mt-1 space-y-2 flex flex-col'>
              <h4 className='text-[#a8a8af]'>
                3DPlataform - SAAS para Modeladores e Empreendedores 3D
              </h4>
              <span className='text-[#a8a8af]'>Dez 2024 • Atualmente</span>
              <span className='text-[#a8a8af]'>São Paulo/SP • Remoto</span>
              <span className='text-bold '>Founder</span>
            </div>

          </div>
          <div className='rounded-lg flex flex-col justify-between p-8 border bg-accent/50 dark:backdrop-blur-2xl'>
            <div className="flex">
              <Image
                className='rounded-lg'
                src="/cheil_brasil_logo.jpg" width="52" height="52" alt='Logo Cheil Brazil' />
            </div>
            <div className='mt-1 space-y-2 flex flex-col'>
              <h4 className='text-[#a8a8af]'>
                Cheil - Brazil
              </h4>
              <span className='text-[#a8a8af]'>Jul 2024 • Atualmente</span>
              <span className='text-[#a8a8af]'>São Paulo/SP • Remoto</span>
              <span className='text-bold '>Desenvolvedora Frontend Junior</span>
            </div>

          </div>
          <div className='rounded-lg flex flex-col justify-between p-8 border bg-accent/50 dark:backdrop-blur-2xl'>
            <div className="flex">
              <Image
                className='rounded-lg'
                src="/female-hacker.jpg" width="65" height="65" />
            </div>
            <div className='mt-1 space-y-2 flex flex-col'>
              <h4 className='text-[#a8a8af]'>
                Freelancer
              </h4>
              <span className='text-[#a8a8af]'>Jan 2023 • Atualmente</span>
              <span className='text-[#a8a8af]'>São Paulo/SP • Remoto</span>
              <span className='text-bold '>Desenvolvedora de Software - Fullstack</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
