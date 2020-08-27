import React from 'react';
import '../styles/main.css'
import Spy from '../img/spy.jpg'
import Gangster from '../img/gangster.jpg'
import Asenior from '../img/aseniorslove.jpg'
import GoodBye from '../img/googdbyepp.jpg'
import Diamond from '../img/diamondIsland.jpg'
import Campus from '../img/campuslove.jpg'
import DontScream from '../img//DontScream.jpg'
import BlackArm from '../img/blackarm.jpg'
import FebWind from '../img/februarywind.jpg'
import Visal from '../img/visal.jpg'
import Yellow from '../img/yellowlight.jpg'

const Achievements = () => {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="mb-4 h-full flex justify-center ">                
                <h1 className="mt-8 border rounded-lg h-10 px-8 text-center pt-2 bg-gray-500 text-gray-200 text-base">Achievements</h1>                
            </div>
              
            <div class="flex flex-row justify-center flex-row mx-64 mb-2">
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={Spy} alt="Profile" className="rounded-lg w-48"></img>
                </div>
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={Gangster} alt="Profile" className="rounded-lg w-48"></img>
                </div>
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={Asenior} alt="Profile" className="rounded-lg w-48"></img>
                </div>
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={GoodBye} alt="Profile" className="rounded-lg w-48"></img>
                </div>
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={Diamond} alt="Profile" className="rounded-lg w-48"></img>
                </div>

            </div>  
            <div class="flex flex-row justify-center flex-row mx-64 mb-2">
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={Campus} alt="Profile" className="rounded-lg w-48"></img>
                </div>
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={DontScream} alt="Profile" className="rounded-lg w-48"></img>
                </div>
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={BlackArm} alt="Profile" className="rounded-lg w-48"></img>
                </div>
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={FebWind} alt="Profile" className="rounded-lg w-48 h-auto"></img>
                </div>
                <div class="text-gray-700 text-center px-4 py-2 rounded-lg">
                    <img src={Visal} alt="Profile" className=" rounded-lg w-48"></img>
                </div>

            </div>  
            <div class="flex flex-row justify-start flex-row mx-64">
                <div class="text-gray-700 text-center px-4 py-2 mx-6 rounded-lg">
                    <img src={Yellow} alt="Profile" className="rounded-lg w-48"></img>
                </div>                
            </div>                        
        </div>
    );
}
export default Achievements;