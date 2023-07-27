import React, {useState, useEffect} from 'react'
import { faCheck, faLanguage, faLocationArrow, faStar, faStore, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider, {Settings, CustomArrowProps, SwipeDirection } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../home/Card';

const Service = () => {

    const CustomPrevArrow: React.FC<CustomArrowProps> = (props) => {
        const { className, style, onClick } = props;
        return (
          <button className= " slick-custom-arrow  px-4 py-2 absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full text-black font-bold text-2xl z-10" 
            onClick={onClick}> 
            &lt;
          </button>
        );
      };
      
      const CustomNextArrow: React.FC<CustomArrowProps> = (props) => {
        const { className, style, onClick } = props;
        return (
          <button className= "slick-custom-arrow  px-4 py-2 absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full text-black font-bold text-2xl z-10 " 
            onClick={onClick}> 
             &gt; 
          </button>
      
        );
      };
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Log the current slide index whenever it changes
        console.log('Current Slide:', currentSlide);
    }, [currentSlide]);

    
    const handleBeforeChange = (oldIndex: number, newIndex: number) => {
        setCurrentSlide(newIndex);
        // You can use oldIndex and manually handle swipe direction if needed
        console.log('Previous Slide:', oldIndex);
        console.log('Swipe Direction:', newIndex > oldIndex ? 'next' : 'prev');
    };

    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        beforeChange: handleBeforeChange,
        prevArrow: <CustomPrevArrow />, // Custom previous arrow component
        nextArrow: <CustomNextArrow />, // Custom next arrow component
      };
    
  return (
    <div className='flex overflow-hidden'>
        {/* right panel  */}
        <div className="mt-32 flex w-2/3 px-8 flex-col">
            {/* top section */}
            <div className='topsection block'>
                <h1 className="title text-3xl font-lora font-bold text-dark">develop your reactjs web app as react js developer</h1>
                <div className="rating p-4 flex ">
                    <FontAwesomeIcon className='py-1' icon={faStar} />
                    <FontAwesomeIcon className='py-1' icon={faStar} />
                    <FontAwesomeIcon className='py-1' icon={faStar} />
                    <FontAwesomeIcon className='py-1' icon={faStar} />
                    <FontAwesomeIcon className='py-1' icon={faStar} />
                    <p className='mx-2 font-roboto text-dark font-bold'>5 <span className='text-sm text-grey font-light mx-1'>(120)</span></p>
                </div>
                <div className="porfile flex mt-4">
                    <img className="h-32 w-32 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <div className="profileinfos flex flex-col mx-4">
                        <h1 className='font-bold font-lora text-3xl text-dark'>Full Name</h1>
                        <div className="text-grey text-sm mt-4 font-roboto">
                            <ul className='flex'>
                                <li className='flex mx-2'>
                                    <FontAwesomeIcon className='p-1' icon={faLocationArrow}/>
                                    <p className=''>Algeria</p>
                                </li>
                                <li className='flex mx-2'>
                                    <FontAwesomeIcon className='p-1' icon={faLanguage}/>
                                    <p className=''>English</p>
                                </li>
                                <li className='flex mx-2'>
                                    <FontAwesomeIcon className='p-1' icon={faStore}/>
                                    <p className=''>selled 120</p>
                                </li>
                            </ul>
                        </div>
                    <button className='border rounded-md border-grey-2 mt-4 py-2 px-4 w-1/2 hover:bg-grey-2 text-grey text-md'> Contact Me </button>
                    </div>
                </div>
            </div>
            {/* body section  */}
            <div className="body p-8 leading-7">
                {/* gig description  */}
                <div className="disciption">

                <h1 className='font-bold text-xl'>
                    Why me: 
                </h1>
                <p className='text-grey font-roboto'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente illo temporibus illum ex possimus facere, ad rerum voluptatum, molestias nemo cumque sit reiciendis blanditiis eos molestiae numquam doloremque corrupti tenetur? Dolor, repellat tenetur modi, eligendi sequi alias molestias maxime ducimus quo sint pariatur id? Ipsa aliquam similique ut quisquam quibusdam architecto natus enim tempore, fugit, doloremque velit mollitia in esse obcaecati facilis, voluptatum dolor temporibus quam autem quasi? Ducimus amet assumenda illum possimus neque? Excepturi, quidem itaque magni ad eaque dolorum labore minima laborum, exercitationem temporibus quae recusandae perspiciatis suscipit? Tempore voluptas id earum! Voluptatem non corporis possimus magni!
                </p>
                </div>
                {/* skills buttons  */}
                <div className="skills mt-4 leading-7">
                <h1 className='font-bold text-xl'>
                   What I Use: 
                </h1>
                    <div className="buttons py-4 ">
                        <button className='bg-grey-2 px-2 py-1 font-roboto text-sm shadow-2xl mx-1 rounded-2xl text-grey hover:bg-white hover:text-dark'>html</button>
                        <button className='bg-grey-2 px-2 py-1 font-roboto text-sm shadow-2xl mx-1 rounded-2xl text-grey hover:bg-white hover:text-dark'>css</button>
                        <button className='bg-grey-2 px-2 py-1 font-roboto text-sm shadow-2xl mx-1 rounded-2xl text-grey hover:bg-white hover:text-dark'>javascript</button>
                        <button className='bg-grey-2 px-2 py-1 font-roboto text-sm shadow-2xl mx-1 rounded-2xl text-grey hover:bg-white hover:text-dark'>php</button>
                    </div>
                </div>
                <div className="recomanded mt-8">
                <h1 className='font-bold py-4 text-xl'>
                   recommanded to you: 
                </h1>
                <div className=" border border-grey-2 rounded-md p-4">
                    <Slider {...settings}>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Slider>
                </div>
                </div>

            </div>
        </div>
        {/* left pannel */}
        <div className="mt-32 flex w-1/3 px-8 flex-col">
            <div className="sellingcard  w-1/4 border p-8 mx-auto border-grey-2 flex flex-col flex-wrap fixed">
                <h1 className='font-lora text-grey font-bold text-xl pb-8 border-b border-grey-2 w-full'>react js app</h1>
                <div className="flex py-8 justify-between font-roboto text-grey font-semibold ">
                    <h1>price:</h1>
                    <p className=''>200$</p>
                </div>
                <div className="infolist mb-8">
                    <h1 className='font-lora text-grey font-bold text-lg'>what am going to do:</h1>
                    <ul className="flex flex-col leading-7 font-roboto font-md">
                        <li>
                            <FontAwesomeIcon className="text-sm text-grey mx-1" icon={faCheck}/>
                             4 pages UI</li>
                        <li>
                            <FontAwesomeIcon className="text-sm text-grey mx-1" icon={faCheck}/>
                             review code </li>
                        <li>
                            <FontAwesomeIcon className="text-sm text-grey mx-1" icon={faCheck}/>
                             responsive design </li>
                        <li>
                            <FontAwesomeIcon className="text-sm text-grey mx-1" icon={faCheck}/>
                             Newest tech stack  </li>
                    </ul>
                </div>
                <div className="buybutoon">
                    <button className='py-2 px-4 border border-grey-2 rounded-lg ease-in delay-200 text-grey hover:bg-grey-2'> Buy service </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service