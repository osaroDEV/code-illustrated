import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className='w-full h-auto py-10 lg:py-[50px] bg-white px-5 lg:px-[260px] flex flex-col gap-15 lg:gap-[109px]'>
      <div className='w-full lg:w-[528px] h-[118px] lg:h-[97px] flex flex-col gap-[20px] lg:gap-[30px] justify-center items-center mx-auto'>
        <div className='w-[174px] lg:w-[189px] flex justify-center items-center gap-[15px]'>
          <span className='w-[4px] h-[4px] bg-[#007AFF]'></span>
          <h2 className='uppercase text-[10px] lg:text-[11px]'>
            Frequently Asked Questions
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-[10px] px-3'>
          <h2 className='text-[#0B0A0A] text-center text-[18px] lg:text-[22px] font-semibold leading-[21.6px]'>
            Get Answers, Stay Informed.
          </h2>
          <p className='text-[#646464] text-center text-[13px] lg:text-[15px] leading-[15.6px] font-medium'>
            Find quick answers to common questions about courses, enrollment,
            schedules, and more
          </p>
        </div>
      </div>

      <div className='w-full mx-auto flex flex-col gap-2.5'>
        <div>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1' className='bg-[#FAFAFA]'>
              <AccordionTrigger className='flex items-center gap-2 px-4 lg:px-[35px] hover:no-underline border-[0.605px] border-[#ECECEC] rounded-[7.5px] lg:h-[66px]'>
                <div className='flex items-center gap-2 flex-1'>
                  <span className='text-xs lg:text-[15px] font-semibold text-[#646464]'>
                    Who can take the courses on this platform?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className='text-xs lg:text-[15px] text-[#646464]'>
              Our courses are designed for anyone interested in learning to code, regardless of their prior experience. We welcome complete beginners with no previous coding knowledge, as well as individuals with some existing programming skills who are looking to expand their expertise or learn new technologies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-2' className='bg-[#FAFAFA]'>
            <AccordionTrigger className='flex items-center gap-2 px-4 lg:px-[35px] hover:no-underline border-[0.605px] border-[#ECECEC] rounded-[7.5px] lg:h-[66px]'>
                <div className='flex items-center gap-2 flex-1'>
                  <span className='text-xs lg:text-[15px] font-semibold text-[#646464]'>
                    Are the courses free?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className='text-xs lg:text-[15px] text-[#646464]'>
                Some of the courses are free, while others may require a fee. We offer a mix of free introductory courses and paid advanced courses that provide in-depth knowledge and hands-on projects.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-3' className='bg-[#FAFAFA]'>
            <AccordionTrigger className='flex items-center gap-2 px-4 lg:px-[35px] hover:no-underline border-[0.605px] border-[#ECECEC] rounded-[7.5px] lg:h-[66px]'>
                <div className='flex items-center gap-2 flex-1'>
                  <span className='text-xs lg:text-[15px] font-semibold text-[#646464]'>
                    How do I enroll in a course?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className='text-xs lg:text-[15px] text-[#646464]'>
                Enrolling in a course is easy! Simply fill out the enquiry form, select the course you want to enroll in, and we shall contact you to confirm your enrollment or provide any necessary information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-5' className='bg-[#FAFAFA]'>
            <AccordionTrigger className='flex items-center gap-2 px-4 lg:px-[35px] hover:no-underline border-[0.605px] border-[#ECECEC] rounded-[7.5px] lg:h-[66px]'>
                <div className='flex items-center gap-2 flex-1'>
                  <span className='text-xs lg:text-[15px] font-semibold text-[#646464]'>
                    Do courses have live sessions?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className='text-xs lg:text-[15px] text-[#646464]'>
                Currently, most of our courses will be done live, with a few pre-recorded sessions in the works. Live sessions allow for real-time interaction with instructors and fellow students, enhancing the learning experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
