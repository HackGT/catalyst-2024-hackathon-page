const PrizeSection = () => {
    return (
        <section id="prizes" className="relative p-16 text-center">
            <h2 className="text-3xl md:text-6xl text-textColorDark font-coco font-bold mb-3">PRIZES</h2>
            <div className="text-lg md:text-2xl font-bubblegum space-y-6">
                <div>
                    <h3 className="text-2xl md:text-4xl">Best Overall Hack</h3>
                </div>
                <div>
                    <h3 className="text-2xl md:text-4xl">For Each Track</h3>
                    <ul className="list-none">
                        <li className="text-xl md:text-2xl">First Place</li>
                        <li className="text-xl md:text-2xl">Second Place</li>
                        <li className="text-xl md:text-2xl">Third Place</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PrizeSection;
