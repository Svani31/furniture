import Image from 'next/image'
import LogoImage from "@/Images/MainLogo.png"



const Body = () =>{
    return(
        <div className="pt-12 pl-36 pr-36 flex bg-darkGreen">
            <div style={{width:"420px"}} className="mt-16">
                <h1 className="text-5xl text-white">Modern Interior 
                Design Studio</h1>
                <div className="flex gap-3 mt-32">
                    <button className="p-3 bg-yellow rounded-3xl hover:bg-transparent ease-linear duration-300 border hover:text-white">Explorer Now</button>
                    <button className="p-3 rounded-3xl border text-white hover:bg-yellow ease-linear duration-300 hover:text-black">Explorer Now</button>
                </div>
            </div>
            <div className='ml-32'>
                <Image src={LogoImage} alt={'image'}                
                />
            </div>
        </div>
    )
}
export default Body