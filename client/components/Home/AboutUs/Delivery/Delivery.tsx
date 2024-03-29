import { TbTruckDelivery } from 'react-icons/tb'

const Delivery = () => {
  return (
    <section className='flex items-center md:justify-around lg:flex-col'>
      <div className='flex items-center text-center rounded-3xl w-28 h-28 bg-primaryLight lg:mt-6'>
        <h2 className='text-2xl font-semibold font-caveatRegular'>
          <TbTruckDelivery className='inline-block text-3xl text-highlightLight' />
          Доставка
        </h2>
      </div>

      <ul className='lg:mt-10 font-robotoRegular'>
        <li>
          <b>Зона:</b> по місту Харкову
        </li>
        <li>
          <b>Час:</b> з 11:00 до 21:00 години
        </li>
        <ul className='mt-2 [&>li]:indent-2'>
          <b>Оплата:</b>
          <li>
            <b>-</b> Готівкою кур'єру
          </li>
          <li>
            <b>-</b> На сайті безготівкова
          </li>
        </ul>
      </ul>
    </section>
  )
}

export default Delivery
