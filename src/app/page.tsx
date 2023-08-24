import DownloadButton from './../components/DownloadButton';
import Image from 'next/image';
import mockup from '@/assets/mockup.svg'
import sale from '@/assets/sale.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-200 overflow-hidden">
      <Image src={sale} alt="sale image" className='fixed rotate-[17deg] z-0 lg:w-[100vh] lg:top-[-7%] lg:right-[-11%] 2xl:w-auto 2xl:top-[-35%] 2xl:right-[-20%]'/>
      <div className='flex items-center justify-between w-full px-24 2xl:w-2/3 bg-red-400/0 z-10'>
        <div className='flex w-2/3 flex-col items-start justify-start gap-8 text-indigo-950'>
          <span>
            <h1 className='text-3xl pl-2'>easy</h1>
            <h1 className='text-9xl font-extrabold text-start'>POS</h1>
          </span>
          <h1 className='text-2xl w-[30rem] pl-1'>Uma solução intuitiva e eficiente para controle de vendas, projetada para simplificar a gestão de negócios. </h1>
        <DownloadButton/>
        </div>

        <Image src={mockup} alt='mockup pc' className='w-[30rem]'/>
      </div>
    </main>
  )
}
