"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Tooltip } from "@heroui/tooltip";

export default function Projetos() {

    const placements = [
        "top-start",
        "top",
        "top-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "left-start",
        "left",
        "left-end",
        "right-start",
        "right",
        "right-end",
    ];


    const [show, setShow] = useState(false);


    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className="w-full min-h-screen">
            <div className="flex flex-col text-left gap-4 p-4 min-h-screen w-full pt-[130px] md:max-w-[1400px] mx-auto">
                <div className='p-4'>
                    <RoughNotation
                        type="box"
                        show={show}
                        color="#7042cc9b"
                        animationDelay={100}
                        animationDuration={500}
                    >
                        <span className="text-[25px] p-3 w-full font-bold">Projetos</span>
                    </RoughNotation>
                </div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
                     <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/frontend-entregas-condominio.png"
                            alt="Sistema de Cálculo e Análise de Lucro"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Sistema de Gestão de Entregas para Condomínios</h2>
                            <p className="text-[#9c9d9d]">Sistema para simplificar o registro de pacotes e confirmação de recebimento por portarias e moradores.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2025
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>ReactJS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>NextJS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>MongoDB</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>NodeJS</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://frontend-entregas-condominio.vercel.app/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <div>
                            <Image
                                src="/3d-platform.jpg"
                                alt="SaaS para Modeladores e Empreendedores 3D"
                                width={500}
                                height={300}
                                className="object-cover w-full h-[250px]"
                            />
                        </div>
                        
                        <div className="px-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2 pt-2">SaaS para Modeladores e Empreendedores 3D</h2>
                            <p className="text-[#9c9d9d]">Uma plataforma dedicada à venda de modelagens para impressão 3D, com foco no mercado brasileiro, promovendo o crescimento e fortalecimento da comunidade local.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>ReactJS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>NextJS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>Typescript</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>MongoDB</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>Node</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>Express</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap pb-6'>

                                <p className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm cursor-not-allowed" href="#" target='_blank'>
                                    {/* <i className="bi bi-arrow-up-right"></i> */}
                                    Em desenvolvimento
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/sistema-calculo-lucro.jpg"
                            alt="Sistema de Cálculo e Análise de Lucro"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Sistema de Cálculo e Análise de Lucro</h2>
                            <p className="text-[#9c9d9d]">Ferramenta para análise financeira, focada em cálculo de lucros e insights para pequenas empresas.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>ReactJS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>NextJS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>MongoDB</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://sistema-controle-lucro.vercel.app/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/agendamento-online.png"
                            alt="Sistema de Agendamento Online"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Sistema de Agendamento Online</h2>
                            <p className="text-[#9c9d9d]">Sistema web de agendamento para estéticas em geral, simplificando o processo de agendamento dos profissionais. </p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>ReactJS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>NextJS</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://agendamento-online.vercel.app/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/bymodela-site.png"
                            alt="Site Institucional para Modeladora 3D"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Site Institucional para Modeladora 3D</h2>
                            <p className="text-[#9c9d9d]">Projetado para exibir seu portfólio de forma profissional e incluir uma página de vendas com integração de checkout que direciona os clientes diretamente para o WhatsApp.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>ReactJS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>NextJS</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://bymodela-site.vercel.app/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/lp-hamburgueria.png"
                            alt="Site Institucional para Hamburgueria"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Site Institucional para Hamburgueria</h2>
                            <p className="text-[#9c9d9d]">Com o objetivo de destacar a marca e apresentar o cardápio de forma atrativa e envolvente.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>HTML</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>CSS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>Javascript</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://lp-hamburgueria-sabores-do-sul.vercel.app/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/lp-advogados.png"
                            alt="Site Institucional para Advogados"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Site Institucional para Advogados</h2>
                            <p className="text-[#9c9d9d]">Com o objetivo de destacar a profissional e apresentar o seus serviços.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>ReactJS</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://lp-advogados.vercel.app/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/lp-barbearias.jpg"
                            alt="Site para Barbearia"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Site Insitucional para Barbearia</h2>
                            <p className="text-[#9c9d9d]">Desenvolvido para destacar a barbearia, apresentar seus serviços de forma profissional e facilitar o agendamento diretamente pelo WhatsApp.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>HTML</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>CSS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>Javascript</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <p className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm cursor-not-allowed" href="#" target='_blank'>
                                    {/* <i className="bi bi-arrow-up-right"></i> */}
                                    Em desenvolvimento
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/catalogo.jpg"
                            alt="Catálogo de Produtos"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Catálogo de Produtos</h2>
                            <p className="text-[#9c9d9d]">Desenvolvido apresentar o catálogo de produtos de uma Ferragem.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>ReactJS</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://catalogo-jr.vercel.app/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/fatos-de-patos.jpg"
                            alt="Catálogo de Produtos"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Landing Page para Campanha de Marketing </h2>
                            <p className="text-[#9c9d9d]">Desenvolvido a realização uma campanha de marketing para divulgação de um filme de curta metragem.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>HTML</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>CSS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>Javascript</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://www.fatosdepatos.com.br/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-min-h-[500px]">
                        <Image
                            src="/bolsa-carne-site.png"
                            alt="Catálogo de Produtos"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Langing Page para Campanha de Marketing </h2>
                            <p className="text-[#9c9d9d]">Desenvolvido a realização uma campanha de marketing para divulgação de um filme de curta metragem.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>HTML</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>CSS</p>
                                </span>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>Javascript</p>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://www.bolsacarne.com.br/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border bg-[#1e1e1e] text-white shadow-md flex flex-col overflow-hidden w-full md:w-[400px] min-h-[500px]">
                        <Image
                            src="/linkbio.jpg"
                            alt="Linkbio estilo Linktree"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[250px]"
                        />
                        <div className="p-6">
                            <h2 className="font-semibold tracking-tight text-xl mb-2">Linkbio estilo Linktree</h2>
                            <p className="text-[#9c9d9d]">Desenvolvido para reunir e destacar links importantes de forma prática e organizada.</p>
                            <span className="mt-4 inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-[#9059e9] hover:bg-[#6D28D9]">
                                2024
                            </span>
                            <div className='mt-1 flex flex-row gap-2 flex-wrap'>
                                <span className='mt-1 rounded-md dark:bg-[#333] p-1 text-xs text-white flex items-center h-6 w-auto bg-[#f0f0f0]'>
                                    <p>ReactJS</p>

                                </span>
                            </div>
                            <div className='mt-4 flex flex-row gap-2 flex-wrap'>

                                <Link className="gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent  h-10 px-4 py-2 text-sm" href="https://new-linkbio.vercel.app/" target='_blank'>
                                    <i class="bi bi-arrow-up-right"></i>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
