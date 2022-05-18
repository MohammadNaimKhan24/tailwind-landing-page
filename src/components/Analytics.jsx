import  Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
        <div className="grid md:grid-cols-2 mx-auto max-w-[1240px]">
            <img className="mx-auto w-[500px] my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
            <p className="text-[#00fd9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl py-2">Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias tenetur illum quasi voluptas sint quibusdam veritatis voluptatibus reiciendis maiores? Perferendis enim porro fugiat iusto dolores ad ipsa quas ratione beatae!</p>
            <button className="py-3 text-[#00fd9a] rounded my-2 w-[200px] font-bold bg-black">Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Analytics;