 

const Cta = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row">
      <div className="flex-1">
        <img src="/image/clasic-service.webp" alt="" />
      </div>

      <div className="flex-1 flex  flex-col justify-center items-center bg-[#1d2736]">
        <div className="px-6 ">
        <h2 className="text-[#fbd232] text-3xl">We Are Professional & Thoughful HandyMan</h2>
        <p className="text-sm text-white py-4">Everyhome owner has a list of renovation, home repair, or home improvement projects he or she needs done — both interior and exterior. Sometimes that list can get quite long, too! The bathrooms that needs updating. The garbage disposal that’s on the fritz. The basement that needs drywall repairs. But with today’s busy lifestyles, who has the time or the patience to do it all yourself? Let us help your home run more smoothly with a wide range of affordable repair, improvement and remodel services.</p>
        <button className="bg-[#fbd232] px-4 py-2 text-medium">Find Out More</button>
        </div>
      </div>
    </div>
  )
}

export default Cta
