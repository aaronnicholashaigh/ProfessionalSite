export function Hero(){
    return(
        <div className="pt-4">
            <div className="px-[20px] text-[32px] leading-[40px] font-medium text-[#172026]">
                <h1 className="text-center ">This is the Hero component.  I have not decided what is going here???</h1>
                <p className="text-center pt-6">In web design, a hero is a large image, video, illustration, or banner that appears at the top of a page, usually above the fold and below the header. Heroes are also known as "hero headers" or "hero sections". They are important because they can:
                <br />-Grab the user's attention
                <br />-Provide a quick visual message about the page's content
                <br />-Set the emotional background of the user experience
                <br />-Help the user navigate to the right information
                </p>

                <div className="flex we-full">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px]"> Button 1</button>
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px]"> Button 2</button>
                </div>
            </div>
        </div>
    )
}