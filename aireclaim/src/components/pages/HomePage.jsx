import Header from '../Header';
import GoUpButton from '../buttons/GoUpButton';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomePage = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    
    return (
        
        <div className='overflow-y-auto'>
            
            

            <div className=' py-20'>
                <div className='flex gap-20 pl-20'>
                    <div className='flex flex-col '>
                        <strong className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none my-0 py-0 font-bold">Claim your compensation for your  cancelled or delayed flight</strong>
                        <br/>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400">Each passenger can receive €250, €400 or €600 <br></br> plus refund (or free rebooking) plus expenses <br></br>like taxi, hotel, food, etc.</p>
                        <br/>
                        <br></br>
                        <br/>
                        <div className='pl-20'>
                            <div className=' flex border-solid border-2 rounded-lg justify-center border-blue-300   w-96'>
                                <DatePicker className='rounded-sm  w-32 h-10 text-center bg-blue-200 text-gray-700 text-sm m-3' placeholder='select date' selected={selectedDate} onChange={date => setSelectedDate(date)} />
                                <input type="text" placeholder="Flight Number ..."  className='px-1 w-28  rounded-sm text-sm bg-blue-200 text-gray-700 text-center m-3'></input>
                                <button className='text-sm font-bold shadow-lg shadow-green-500/50 rounded m-3 px-2 bg-green-600 hover:opacity-70'>Check</button>
                            </div>
                        </div>
                    </div>

                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/family-trip-illustration-download-in-svg-png-gif-file-formats--international-travelling-immigration-pack-holidays-illustrations-5553221.png?f=webp' 
                            loading='lazy'
                            style={{ 
                                        borderRadius: '10px' ,
                                        maxWidth: '50%',
                                        height:'auto',
                                        float: 'right',
                                        animation: 'unfold 1s ease-in-out', 
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                    
                        />
                </div>

                


                

            </div>

            

            


            <div className='pr-5'>
                <div className='flex justify-center'>
                    <p className='text-4xl w-96 text-center text-wrap font-mono font-bold'>How to claim your flight</p>
                </div>
                
                    <div className='flex justify-center gap-28 mt-10'>
                        <div className='flex-col w-72 '>
                            <p className='text-xl font-bold text-wrap'>1 - Check entitlement</p>
                            <p className='text-base font-semibold text-wrap mt-3'>Enter your flight code and date,<br></br> then get the amount of the compensation. Easy, free, no cost.</p>
                        </div>
                        <div className='flex-col w-72'>
                            <p className='text-xl font-bold text-wrap'>2 - Submit your claim</p>
                            <p className='text-base font-semibold text-wrap mt-3'>If entitled, let the experts do all work <br></br>for you and pay all expenses, including Court. Just relax and wait.</p>
                        </div>
                        <div className='flex-col w-72'>
                            <p className='text-xl font-bold text-wrap'>3 - Check entitlement</p>
                            <p className='text-base font-semibold text-wrap mt-3'>Only after we succeed in exacting your money,we will get a part of it. You pay nothing if unlikely we fail.</p>
                        </div>
                        
                    </div>
                    
                    <div className='flex flex-col justify-center items-center mt-14 '>
                        <button className=' w-64 h-10 text-xl font-bold shadow-lg shadow-green-500/50 rounded-md m-3 px-2 bg-green-600 hover:opacity-70'>Check Compensation 🛫</button>
                        <hr className='w-96 mt-10 '></hr>
                    </div>

                    <div className='flex flex-col mt-10 w-auto  justify-center items-center pl-32 pr-32'>
                        <p className='font-bold '>Know your rights</p>
                        <div className='border-4 border-solid otline-1 border-blue-300 rounded-2xl  mt-5 p-3  hover:ring-2 hover:ring-white '>
                            <div className='flex justify-center mt-2'>
                                <img src='https://img.freepik.com/vetores-gratis/ilustracao-de-lei-conceito_53876-28573.jpg' width='100' className='flex border rounded-2xl justify-center m-2 ' ></img>
                            </div>
                            <p className='mt-2 font-semibold'>Air Passenger Rights</p>
                            <p className='text-sm mt-5'>
                                Regulation 261/2004 of the European Parliament and of the Council, 
                                together with some posterior laws and judgements, 
                                protects passengers against most travel problems. 
                                Not surprisingly, many airlines avoid paying, just 
                                saying "NO" because most passengers (probably including 
                                yourself) are not able to argue back their legal or technical
                                arguments, and certainly will not go to Court.
                                But Aireclaim is and will. That's why Aireclaim became so important, defending passengers
                                rights.
                            </p>
                        </div>

                        <button className='w-40 h-10 text-xl font-bold shadow-lg shadow-gray-500/50 rounded m-3  bg-gray-600 hover:opacity-70 mt-8'> Read More 🔍</button>
                    </div>
                    
                    <div className='flex  justify-center mt-7 gap-7 '>
                        <div className='flex-col'>
                            <div className=' border-4 border-solid  otline-1 border-blue-300  h-56 w-96 rounded-2xl  mt-5 p-1  hover:ring-2 hover:ring-white'>
                                <img src=''></img>
                                <p className='font-semibold'>Fight delay</p>
                                <p className='text-lg mt-5 font-serif'>
                                    You are entitled to a compensation if your flight
                                    arrived 3+ hours late and <br></br> also to food, 
                                    taxi and hotel while waiting.
                                </p>
                            </div>
                            <button className='w-40 h-10 text-xl font-bold shadow-lg shadow-gray-500/50 rounded m-3  bg-gray-600 hover:opacity-70 mt-8'> Read More 🔍</button>
                            <div className=' border-4 border-solid otline-1 border-blue-300  h-56 w-96 rounded-2xl  mt-5 p-1  hover:ring-2 hover:ring-white'>
                                <img src=''></img>
                                <p className='font-semibold'>Flight misconnection</p>
                                <p className='text-lg mt-4 font-serif'>
                                    Compensation is due even for small delays in a flight,
                                     if you miss the next <br></br> flight and you arrive 3+
                                      hours late even after rerouting. Both flights must 
                                      <br></br> belong to the same booking.
                                </p>
                            </div>
                        </div>
                       

                        <div className='flex-col '>

                            <div className=' border-4 border-solid otline-1 border-blue-300  h-56 w-96 rounded-2xl  mt-5 p-1  hover:ring-2 hover:ring-white'>
                                <img src=''></img>
                                <p className='font-semibold'>Fight cancellation</p>
                                <p className='text-lg mt-4 font-serif'>
                                    You can get a compensation that depends on the flight 
                                    distance if your <br></br> flight was cancelled in the 14 days 
                                    prior to the scheduled departure.
                                </p>
                            </div>

                            <button className='w-40 h-10 text-xl font-bold shadow-lg shadow-gray-500/50 rounded m-3  bg-gray-600 hover:opacity-70 mt-8'> Read More 🔍</button>

                            <div className=' border-4 border-solid otline-1 border-blue-300  h-56 w-96 rounded-2xl  mt-5 p-1  hover:ring-2 hover:ring-white'>
                                <img src=''></img>
                                <p className='font-semibold'>Boarding denial</p>
                                <p className='text-lg mt-4 font-serif'>
                                    If you are refused to board due to overbooking,
                                     you're entitled to <br></br> compensation plus a new ticket,
                                      plus food and hotels until you reach your <br></br> destination.
                                </p>
                            </div>
                        </div>

                        
                        

                    </div>

                    <div className='flex flex-col justify-center items-center mt-14 '>
                        <button className=' w-72 h-10 text-xl font-bold shadow-lg shadow-green-500/50 rounded-md m-3 px-2 bg-green-600 hover:opacity-70'>Check Compensation Now🛫</button>
                        <hr className='w-96 mt-10 '></hr>
                    </div>
                
            </div>

            <br></br>
            <br></br>
            
            <div className='fixed right-0 bottom-0 pr-12 py-10'>
                <GoUpButton />
            </div>

                    
        </div>

        
        
    )
}

export default HomePage;