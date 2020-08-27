import React from 'react';
import '../styles/main.css'
import '../styles/test.css'
import spy from '../img/spy.jpg'
import gangster from '../img/gangster.jpg'
import asenior from '../img/aseniorslove.jpg'
import goodBye from '../img/googdbyepp.jpg'
import diamond from '../img/diamondIsland.jpg'
import campus from '../img/campuslove.jpg'
import dontScream from '../img//DontScream.jpg'
import blackArm from '../img/blackarm.jpg'
import febWind from '../img/februarywind.jpg'
import visal from '../img/visal.jpg'
import yellow from '../img/yellowlight.jpg'

const Test = () => {
    return (
        <div class="w-full">     
            <div className="wrap flex flex-wrap ">                                    
                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">                        
                            <img src={spy} alt="" className="rounded-lg w-auto border-2"></img>
                        </div>                  
                        
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">
                            <img src={gangster} alt="" className="rounded-lg w-auto border-2"></img>                   
                        </div>
                    </div>
                </div>


                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">
                            <img src={asenior} alt="" className="rounded-lg w-auto border-2"></img>                 
                        </div>
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">
                            <img src={goodBye} alt="" className="rounded-lg w-auto border-2"></img>                  
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">
                            <img src={diamond} alt="" className="rounded-lg w-auto border-2"></img>                  
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="wrap1 flex flex-wrap ">                                    
                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">                        
                            <img src={campus} alt="" className="rounded-lg w-auto"></img>
                        </div>                  
                        
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">
                            <img src={dontScream} alt="" className="rounded-lg w-auto"></img>                   
                        </div>
                    </div>
                </div>


                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">
                            <img src={blackArm} alt="" className="rounded-lg w-auto"></img>                 
                        </div>
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">
                            <img src={febWind} alt="" className="rounded-lg w-auto"></img>                  
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">
                            <img src={visal} alt="" className="rounded-lg w-auto"></img>                  
                        </div>
                    </div>
                </div>                
            </div>
            <div className="wrap flex flex-wrap ">                                    
                <div class="w-full sm:w-1/2 md:w-1/5 flex flex-col p-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">                    
                        <div class="p-4 flex-1 flex flex-col">                        
                            <img src={yellow} alt="" className="rounded-lg w-auto border-2"></img>
                        </div>                  
                        
                    </div>
                </div>            
            </div>
        </div>   
        
    );
}
export default Test;
