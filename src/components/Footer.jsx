import { resourcesLinks } from "../constants"

function Footer() {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-700" id="contact">
            <div className="container px-4 mx-auto">
                <div className="text-center">
                    <ul className="flex justify-center space-x-12">
                        {resourcesLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="flex items-center">
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