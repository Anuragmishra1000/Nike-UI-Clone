import { shoe8 } from "../assets/images";
import Button from '../components/Button'

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-full info-text">
        Offering superior comfort and style, our carefully crafted footwear aims to enhance your experience, delivering unparalleled quality, innovation, and a hint of sophistication.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Our commitment to detail and excellence guarantees your satisfaction.        </p>
        <div className="mt-11">
          <Button label='view details' />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center" >
        <img src={shoe8} alt='product detail' width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality