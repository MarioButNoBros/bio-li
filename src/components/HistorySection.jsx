import user1 from "../assets/profile-pictures/user1.jpg";

function HistorySection() {
    return (
        <div
            class="group w-full flex-wrap flex items-center gap-8  transition-all duration-500 p-8  lg:flex-nowrap">
            <div class=" w-full lg:w-48 h-64">
                <img src={user1} alt="user"
                    class="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full" />
            </div>
            <div class="text-center lg:text-left lg:max-w-xs flex-1">
                <div class="mb-5 pb-5 border-b border-solid border-gray-300">
                    <h6 class="text-lg text-gray-900 font-semibold mb-1">Harsh Patel</h6>
                    <span class="text-sm text-gray-500 group-hover:text-indigo-600">Co-Founder &
                        CEO</span>
                </div>
                <p class="text-gray-500 leading-6 mb-7">
                    I am the co founder of pagedone and weve pushed our limit so far to make it
                    successful.
                </p>
            </div>
        </div>
    )
}

export { HistorySection }