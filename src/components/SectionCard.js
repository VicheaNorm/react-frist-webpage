import React from 'react';
import '../styles/main.css'

const SectionCard = () => {
    return (
        <div className="w-auto" id="card">
            <div className="mb-4 h-full flex justify-center">
                <h1 className="mt-4 border rounded-lg h-10 px-4 text-center pt-2 bg-gray-500 text-gray-200 text-base">Professional Experience</h1>
            </div>
            <div className="wrap flex flex-wrap rounded">
                <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                        <div class="p-6 flex-1 flex flex-col">
                            <h3 class="mb-2 text-xl">Independent Artist</h3>
                            <div class="mb-4 text-grey-darker text-sm flex-1">
                                <p>Nov 2016 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 md:w-1/1 flex flex-col p-3">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                        <div class="p-6 flex-1 flex flex-col">
                            <h3 class="mb-4 text-xl">Apsara TV: Assitant of Filmmaker(Davy Chou).
                            Kon Khmer Koun Khmer Filmmaker of the first sequence.</h3>
                            <div class="mb-4 text-grey-darker text-sm flex-1">
                                <p>December 2008</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                        <div class="p-4 flex-1 flex flex-col">
                            <h3 class="mb-4 text-xl">Jazz Production: Assistant Producer.</h3>
                            <div class="mb-4 text-grey-darker text-sm flex-1">
                                <p>2005 - 2007</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 md:w-1/1 flex flex-col p-3">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                        <div class="p-6 flex-1 flex flex-col">
                            <h3 class="mb-4 text-xl">Personal Team: Director and Actor of two short films:
                            </h3>
                            <p class="text-xs font-thin">1. Spy and the secret of documents.</p>
                            <p class="text-xs font-thin">2. The Gangster.</p>
                            <div class="mb-4 text-grey-darker text-sm flex-1">
                                <p>Nov 2016 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                        <div class="p-4 flex-1 flex flex-col">
                            <h3 class="mb-4 text-xl">2nd runner of the movie of the year (New Talent Program-Apsara TV).</h3>
                            <div class="mb-4 text-grey-darker text-sm flex-1">
                                <p>December 2008</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                        <div class="p-4 flex-1 flex flex-col">
                            <h3 class="mb-4 text-xl">
                                Personal Team work. Making short video clips with mobile phone camera (around 6 video clips).
                            </h3>
                            <div class="mb-4 text-grey-darker text-sm flex-1">
                                <p>2005 - 2007</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SectionCard;
