import { CircleDollarSign, HandCoins, Laugh } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" pt-0 mx-auto h-screen  text-stone-800 ">
      <div className=" bg-gradient-to-b from-white to-orange-500 pt-[24px] lg:px-28 px-3 w-full ">
        <div className="flex justify-between px-4 mb-12 text-2xl ">
          <p className="text-2xl lg:text-4xl"><span className=" text-yellow-600  font-bold">Golden</span><span className="font-semibold"> Card</span> </p>
          <button className="py-2 px-3 bg-stone-800 text-lg text-white rounded-lg shadow-md shadow-orange-500">Solicite o seu!</button>
        </div>
        <div className="">
          <div className="lg:flex justify-around items-center px-4 text-center  ">

            <Image src="/images/goldencard.png" width={500} height={500} alt="Golden card" />
            <div className="flex flex-col gap-4 text-stone-800  text-xl lg:w-1/2 font-semibold">
              <h1 className="text-orange-50 font-bold w-full text-[60px] leading-[1] text-pretty lg:text-8xl">Golden Card</h1>
              <p className="lg:text-2xl text-xl" >O cartão de benefícios consignado que
                oferece crédito com taxas reduzidas,
                saque sem tarifas e benefícios
                exclusivos para você.</p>

            </div>
          </div>

        </div>
      </div>
      <div className="relative pt-8 bg-orange-500 text-white ">




      </div>
      <div className="w-full px-4">


        <section className="container mx-auto py-8 px-4 mt-8 bg-orange-100 w-full text-center text-stone-800 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold">Nossas Vantagens</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center mt-12">
            <div className="flex flex-col gap-4 items-center text-center">
              <h3 className="text-xl font-semibold text-stone-800">Sem anuidade</h3>
              <div className="bg-orange-400 text-orange-100 w-12 h-12 flex items-center justify-center rounded-full">
                <Laugh />
              </div>
            </div>


            <div className="flex flex-col gap-4 items-center text-center">

              <h3 className="text-xl font-semibold text-stone-800">Benefícios exclusivos</h3>
              <div className="bg-orange-400 text-orange-100 w-12 h-12 flex items-center justify-center rounded-full">
                <HandCoins />
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center text-center col-span-2 md:col-span-1 mx-auto">
              <h3 className="text-xl font-semibold text-stone-800">Saque consignado Sem taxas</h3>
              <div className="bg-orange-400 text-orange-100 w-12 h-12 flex items-center justify-center rounded-full">
                <CircleDollarSign />
              </div>
            </div>

          </div>
        </section>
        <section className="text-center py-8 rounded-lg  flex my-8 flex-col gap-4 mx-6">
          <h2 className="text-3xl  font-bold">Como funciona?</h2>
          <p className="mt-4 text-lg">Solicite Online – Preencha o formulário e envie seus dados.</p>
          <p className="mt-2 text-lg">Aguarde a Aprovação – Nossa equipe analisa rapidamente suas informações.</p>
          <p className="mt-2 text-lg">Receba seu Cartão – Enviado para seu endereço com segurança.</p>
          <p className="mt-2 text-lg">Aproveite! – Use para compras, saques e benefícios exclusivos!</p>
          <p className="mt-6 text-lg font-bold">Peça agora mesmo e tenha acesso a todas essas vantagens!</p>
        </section>
        <section className="container mx-auto py-8 px-4 bg-orange-100 w-full text-center text-stone-800 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold  text-orange-400 mb-8 ">Benefícios Rápidos</h2>

          <div className=" w-full gap-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5   ">
            <div className="bg-orange-400 text-slate-100 p-2 rounded-lg flex justify-center items-center"><p className="mt-4 text-lg">Crédito consignado com taxas reduzidas</p></div>
            <div className="bg-orange-400 text-slate-100 p-2 rounded-lg flex justify-center items-center"><p className="mt-2 text-lg">Saque imediato sem tarifas extras</p></div>
            <div className="bg-orange-400 text-slate-100 p-2 rounded-lg flex justify-center items-center"><p className="mt-2 text-lg">Descontos em farmácias, lojas e supermercados</p></div>
            <div className="bg-orange-400 text-slate-100 p-2 rounded-lg flex justify-center items-center"><p className="mt-2 text-lg">Telemedicina e serviços de bem-estar</p></div>
            <div className="bg-orange-400 text-slate-100 p-2 rounded-lg flex justify-center items-center"><p className="mt-2 text-lg">Pagamento direto na folha, sem comprometer seu orçamento</p></div>
          </div>
        </section>
        <section className="container mx-auto py-16 text-black bg-white rounded-lg   text-center">
          <h2 className="text-4xl font-bold">Solicite Agora o Seu Golden Card!</h2>
          <div> <p className="mt-4 text-lg">Entre em contato agora e faça sua solicitação:</p>
            <p className="mt-2 text-lg font-semibold">TELEFONE: (18) 99699-9125</p>
            <p className="mt-2 text-lg font-semibold">E-MAIL: contato@goldencard.com.br</p>
            <p className="mt-6 text-xl text-orange-400 font-bold">Golden Card – Mais Crédito, Mais Benefícios, Mais Qualidade de Vida para Você!</p></div>

        </section>
        <footer className="py-10 text-center">
          <p>&copy; 2025 Sooper. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
