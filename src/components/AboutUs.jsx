import { testimonials } from "../constants"
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

function AboutUs() {
    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
                Nosotros
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-white rounded-md p-6 text-md shadow-lg border border-neutral-200 text-center">
                        <img className="w-16 h-16 mx-auto mb-4 rounded-full border border-neutral-300" src={user2} alt="user" />
                        <p>text</p>
                        <h6 className="mt-4">user</h6>
                        <span className="text-sm font-normal italic text-neutral-600">Company</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { AboutUs }