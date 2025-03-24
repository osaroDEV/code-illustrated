import clsx from 'clsx'
import { services } from '../../lib/data/services'

const WhatsIncluded = () => {
  return (
    <section className="bg-[#f9fafb] flex flex-wrap items-center justify-center gap-4 px-4 py-8 md:px-8 md:py-12 xl:px-12 xl:py-16 xxl:px-16 xxl:py-20">
      <>
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-[48%] xl:w-[16rem]
          xxl:w-[22.5rem] h-auto flex flex-col justify-center p-5 xl:p-5 xxl:p-8 border border-neutral-200 bg-white rounded- gap-4"
          >
            <div
              className={clsx(
                'w-12 h-12 rounded-xl place-self-start flex items-center justify-center',
                {
                  'bg-[#41A472]': service.id === 1,
                  'bg-[#F97315]': service.id === 2,
                  'bg-[#4A74FF]': service.id === 3,
                  'bg-[#EA580B]': service.id === 4,
                  'bg-[#273242]': service.id === 5,
                },
              )}
            >
              <service.icon />
            </div>
            <section className="flex flex-col gap-4">
              <h3 className="text-sm text-neutral-900 font-semibold h-5">{service.header}</h3>
              <p className="text-sm text-neutral-500 h-30">{service.body}</p>
            </section>
          </div>
        ))}
      </>
    </section>
  )
}

export default WhatsIncluded
