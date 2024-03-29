import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {id: 1,
    link: 'https://www.linkedin.com/in/ayush-agarwal-aa2707208/',
    name: 'Ayush Agarwal',
    role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
    test: 'As a developer and a problem solver, I think Gaurav is a great collaborative partner to have. I met him in my college time  and since then he has drastically progressed in his understanding of the development process. He always has a professional environment and his good audio and video quality which makes it easier to communicate with him.',
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/animesh-sahu-a5994722a/',
    name: 'Animesh Sahu',
    role: 'Full-stack developer ',
    test: "It was a pleasure collaborating with him on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens his knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/arshee-qureshi-374312193/',
    name: 'Arshee Qureshi',
    role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
    test: "I mentored Gaurav some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing his best and going beyond the requirements of the project he's building.",
  },
  {
    id: 4,
    link: 'https://www.linkedin.com/in/mohammad-kamran-taslim/',
    name: 'Kamran Taslim',
    role: 'Software Developer',
    test: "Throughout all our collaborations, Gaurav has always conducted himself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish herself. He's not only someone I highly recommend but is also someone I greatly respect.",
  }

 
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials