import { resourcesLinks } from "../constants"
import { ApiWhatsApp } from "../api/ApiWhatsApp";


function Footer() {
    const handleClick = (e, id) => {
        if (id === "whatsapp") {
            e.preventDefault();
            ApiWhatsApp();
        }
    };

    return (
        <footer className="mt-20 border-t py-10 border-neutral-700" id="contact">
            <div className="container px-4 mx-auto">
                <div className="text-center">
                    <ul className="flex justify-center space-x-12">
                        {resourcesLinks.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => handleClick(e, item.id)}
                                    className="flex items-center">
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <a className="text-xs">
                ©Bio-Li
            </a>
        </footer>
    );
}

export { Footer }