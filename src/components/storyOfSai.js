import React from 'react';
import '../styles/main.css'
import sai1 from '../img/Sai1.png'
import sai2 from '../img/Sai2.png'
import sai3 from '../img/Sai3.png'
import sai4 from '../img/Sai4.png'
import sai5 from '../img/Sai5.png'

const StoryOfSai = () => {
    return (      
        <div class="container my-12 mx-auto px-4 md:px-12">
        <div className="mb-4 h-full flex justify-center">
                <h1 className="mt-4 h-10 px-4 text-center text-gray-800 font-bold font-mono text-base text-2xl">The Story of Sai</h1>
            </div>
            <div class="flex flex-wrap -mx-1 lg:-mx-4">            
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">            
                    <article class="overflow-hidden rounded-lg shadow-lg">                        
                        <img className="block h-auto w-full" src={sai1}></img>                        
                        <header class="flex items-center justify-between leading-tight pl-4 pt-4">
                            <h1 class="text-lg text-red-600 font-bold">About Sai</h1>                            
                        </header>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <p class="justify-between font-sans text-sm font-light text-justify leading-5 h-64">
                            Batham Oun as known as Sai, is an independent artist who passionate in filmmaking, singing and acting. He has started in his young age as a filmmaker, in 2007 he join filmmaking competitions on TV and wons 2nd place two years straight. In 2008 he started to work in production and joined Kon Khmer Koun Khmer a group of young filmmaker that try to chase their dream as a filmmaker. From 2010 he started his singing career and acting since 2013. Currently Sai known as an original song-writer/singer and a romance actor. 
                        </p>
                        </footer>
                    </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">            
                    <article class="overflow-hidden rounded-lg shadow-lg">                        
                        <img className="block h-auto w-full" src={sai3}></img>                        
                        <header class="flex items-center justify-between leading-tight pl-4 pt-4">
                            <h1 class="text-lg text-red-600 font-bold">The Social Advocate</h1>                            
                        </header>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <p class="justify-between font-sans text-sm font-light text-justify leading-5 h-64">
                        When Sai performs on stage, his vision is not to only entertain people. He said he wants to inspire people to dream big and follow their passion. This is why he easily agrees to perform for charity concerts or events which causes are close to his heart.
                        “Sometimes I get invited for two events in a week. Though my schedule is really packed, I still take time to perform in those events and share some encouraging messages to the audience.
                        “There are times, too, when I serve as inspirational speaker for different topics. It makes my heart swell with happiness when I know I’m inspiring people.”
                        
                        </p>
                        
                        </footer>
                    </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">            
                    <article class="overflow-hidden rounded-lg shadow-lg">                        
                        <img className="block h-auto w-full" src={sai5}></img>                        
                        <header class="flex items-center justify-between leading-tight pl-4 pt-4">
                            <h1 class="text-lg text-red-600 font-bold">The Artist</h1>                            
                        </header>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4 ">
                        <p class="justify-between font-sans text-sm font-light text-justify leading-5 h-64">
                        In 2008, Sai has just graduated from high school. But he was more enthusiastic to learn how to play guitar. He never thought of himself as a singer or a songwriter, but he knew he wanted to play the instrument. So he strived to learn.
                        I was always moved and inspired by those who sing on stage. Then I learned to play guitar and composed songs on my own without thinking that I can be famous one day. Back then, I was wondering why some productions copied melodies from other countries when we can do it by ourselves.
                        </p>
                        </footer>
                    </article>
                </div>
                
            </div>

            {/* New Article */}
            <div class="flex flex-wrap -mx-1 lg:-mx-4">            
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">            
                    <article class="overflow-hidden rounded-lg shadow-lg">                        
                        <img className="block h-auto w-full" src={sai4}></img>                        
                        <header class="flex items-center justify-between leading-tight pl-4 pt-4">
                            <h1 class="text-lg text-red-600 font-bold">The Farmer</h1>                            
                        </header>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <p class="justify-between font-sans text-sm font-light text-justify leading-5">
                        Aside from performing up on stage, Sai is also a “performer” in the farm. Yes! He owns a farm in Ratanakiri province which is filled with different kinds of fruits. He personally manages it and plants fruits. He said that he started planting since he was young, even before he became a public figure.
                        He revealed that it was his love for the environment and nature that pushed him to become a farmer. “Managing people is not part of my favourite things to do. This is why I choose to live with nature and grow my own fruits.”
                        </p>
                        </footer>
                    </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">            
                    <article class="overflow-hidden rounded-lg shadow-lg">                        
                        <img className="block h-auto w-full" src={sai2}></img>                        
                        <header class="flex items-center justify-between leading-tight pl-4 pt-4">
                            <h1 class="text-lg text-red-600 font-bold">The Athlete</h1>                            
                        </header>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <p class="justify-between font-sans text-sm font-light text-justify leading-5">
                        Aiming to promote local sports and to make sure that he is healthy, Sai is now involved in running. Even with his tight schedule at the university and on his career, Sai always spares a few hours to play basketball and join marathons. He has already taken part in a dozen marathons both within and outside Cambodia.
                        I’ve been running for years now. I’ve run from the shortest to 21 kilometers. After joining many marathons in Thailand, I now try harder competitions. I’m preparing for 42-km marathon soon. And on June 16, I will be joining a half marathon in Phnom Penh.
                        </p>
                        </footer>
                    </article>
                </div>
                {/* <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">            
                    <article class="overflow-hidden rounded-lg shadow-lg">                        
                        <img className="block h-auto w-full" src={sai5}></img>                        
                        <header class="flex items-center justify-between leading-tight pl-4 pt-4">
                            <h1 class="text-lg text-red-600 font-bold">About Sai</h1>                            
                        </header>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <p class="justify-between font-sans text-sm font-light text-justify">
                            Batham Oun as known as Sai, is an independent artist who passionate in filmmaking, singing and acting. He has started in his young age as a filmmaker, in 2007 he join filmmaking competitions on TV and wons 2nd place two years straight. In 2008 he started to work in production and joined Kon Khmer Koun Khmer a group of young filmmaker that try to chase their dream as a filmmaker. From 2010 he started his singing career and acting since 2013. Currently Sai known as an original song-writer/singer and a romance actor. 
                        </p>
                        </footer>
                    </article>
                </div> */}
                
            </div>
            
        </div>
    );
}
export default StoryOfSai;
