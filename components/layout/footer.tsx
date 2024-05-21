const Footer = () => {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-center md:h-24 md:flex-row">
                <div className="text-center text-sm leading-loose text-muted-foreground md:text-center">
                    <p>
                        Copyright © 2024 Osho Pedia. All rights reserved.
                    </p>
                    <p>
                        Made with <span role="img" aria-label="love emoji">❤️</span> for OSHO
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
