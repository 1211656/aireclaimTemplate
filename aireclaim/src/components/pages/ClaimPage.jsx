import Header from '../Header';
import GoUpButton from '../buttons/GoUpButton';
const ClaimPage = () => {
    
    return (
        <div className='overflow-y-auto'>
            
            

            <div className='absolute left-20 py-20'>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-none my-0 py-0 font-bold">Claim your compensation for your <br></br> cancelled or delayed flight</h4>
                <br/>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400">Each passenger can receive €250, €400 or €600 <br></br> plus refund (or free rebooking) plus expenses <br></br>like taxi, hotel, food, etc.</p>

            </div>

            <div className='relative float-right py-20 pl-10 pr-20'>
                <img src='https://static.vecteezy.com/ti/vetor-gratis/p1/2756998-familia-com-bagagem-apartamento-ilustracao-ilustracao-ficando-pronto-para-a-viagem-casado-com-malas-indo-de-ferias-preparacao-viagem-personagem-cartoon-isolado-no-fundo-branco-vetor.jpg' 
                    loading='lazy'
                    style={{ border: '2px solid black', 
                                borderRadius: '10px' ,
                                maxWidth: '35%',
                                height:'auto',
                                float: 'right',
                                animation: 'unfold 1s ease-in-out', 
                                width: '100%',
                                height: 'auto',
                            }}

                            
                />
           
            </div>


            <div>
                <p>How to claim your flight</p>
                <br/>
                <p></p>
                <br/>
            </div>
            
            <div>
                <GoUpButton />
            </div>
                    
        </div>

        
        
    )
}

export default ClaimPage;