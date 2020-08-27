import React from 'react';
import '../styles/main.css'

import Achievements from '../components/Achievements'

const SectionCard = () => {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="mb-4 h-full flex justify-center ">                
                <h1 className="mt-8 border rounded-lg h-10 px-8 text-center pt-2 bg-gray-500 text-gray-200 text-base">PROFESSIONAL EXPERIENCE</h1>                
            </div>
              
            <div class="flex flex-row justify-center">
                <div class="text-gray-700 text-center px-4 py-2 m-2 w-3/12">
                    <div class="flex flex-row rounded overflow-hidden shadow-lg bg-gray-200 justify-center">                      
                        <div class="px-6 py-4 border-0 bg-gray-200">
                            <div class="font-bold text-xl mb-2">
                                <h5 class="text-ms">Independent Artist</h5>      
                                <p> <br></br> </p>                                                          
                            </div>
                            <p class="text-gray-700 text-xs font-hairline">Nov 2016 - Present</p>
                        </div>                                    
                    </div> 
                </div>                
                <div class="text-gray-700 text-center px-4 py-2 m-2 w-3/12">
                    <div class="flex flex-row rounded overflow-hidden shadow-lg bg-gray-200 justify-center">                      
                        <div class="px-6 py-4 border-0 bg-gray-200">
                            <div class="font-bold text-xl mb-2">
                                <h5 class="text-sm">Apsara TV: Assitant of Filmmaker(Davy Chou).</h5>
                                <h5 class="text-sm">Kon Khmer Koun Khmer Filmmaker of the </h5>   
                                <h5 class="text-sm">first sequence.</h5>                                                              
                            </div>
                            <p class="text-gray-800 text-xs font-hairline">December 2008</p>
                        </div>                                    
                    </div>                 
                </div>                
                <div class="text-gray-700 text-center px-4 py-2 m-2 w-3/12">
                    <div class="flex flex-row rounded overflow-hidden shadow-lg bg-gray-200 justify-center">                      
                        <div class="px-6 py-4 border-0 bg-gray-200">
                            <div class="font-bold text-xl mb-2">
                                <h5 class="text-ms">Jazz Production: Assistant Producer.</h5>                                
                            </div>
                            <p class="text-gray-800 text-xs font-hairline">2005 - 2007</p>
                        </div>                                    
                    </div> 
                </div>                
            </div>
                
            <div class="flex flex-row justify-center">
                <div class="text-gray-700 text-center px-4 py-2 m-2 w-3/12">
                    <div class="flex flex-row rounded overflow-hidden shadow-lg bg-gray-200 justify-center ">                      
                        <div class="px-6 py-4 border-0 bg-gray-200 ">
                            <div class="font-bold text-xl mb-2">
                                <h5 class="text-sm">Personal Team: Director and</h5>
                                <h5 class="text-sm">Actor of two short films:</h5>
                                <p class="text-xs font-thin">1. Spy and the secret of documents.</p>
                                <p class="text-xs font-thin">2. The Gangster.</p>
                            </div>
                            <p class="text-gray-700 text-xs font-hairline">Nov 2016 - Present</p>
                        </div>                                    
                    </div> 
                </div>                
                <div class="text-gray-700 text-center px-4 py-2 m-2 w-3/12">
                    <div class="flex flex-row rounded overflow-hidden shadow-lg bg-gray-200 justify-center">                      
                        <div class="px-6 py-4 border-0 bg-gray-200">
                            <div class="font-bold text-xl mb-2">
                                <h5 class="text-sm">2nd runner of the movie of the year</h5>
                                <h5 class="text-sm">(New Talent Program-Apsara TV).</h5>   
                                <p class="text-xs font-thin"> <br></br> </p>
                                <p class="text-xs font-thin"> <br></br></p>                             
                            </div>
                            <p class="text-gray-800 text-xs font-hairline">December 2008</p>
                        </div>                                    
                    </div>                 
                </div>                
                <div class="text-gray-700 text-center px-4 py-2 m-2 w-3/12">
                    <div class="flex flex-row rounded overflow-hidden shadow-lg bg-gray-200 justify-center">                      
                        <div class="px-6 py-4 border-0 bg-gray-200">
                            <div class="font-bold text-xl mb-2">
                                <h5 class="text-sm">Personal Team work. Making short </h5>
                                <h5 class="text-sm">video clips with mobile phone</h5>   
                                <h5 class="text-sm">camera (around 6 video clips).</h5> 
                                <p class="text-xs font-thin"> <br></br></p>                             
                            </div>
                            <p class="text-gray-800 text-xs font-hairline">2005 - 2007</p>
                        </div>                                    
                    </div> 
                </div>                
            </div>  
            <Achievements />                      
        </div>
        
    );
}
export default SectionCard;
