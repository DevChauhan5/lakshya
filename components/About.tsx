export default function About() {
    return (
        <div className="h-screen relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="/about-background.jpg"
                    alt="About Background"
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">About Lakshya</h2>
                    <p className="text-lg">
                        Lakshya is an eagerly anticipated event held annually at our college. This exciting and vibrant festival offers a diverse range of activities and events for students to participate in, showcasing their skills and talents in a wide variety of fields. The festival encompasses technical, cultural, sports and e-sports events, providing opportunities for students to compete, learn, and explore new areas of interest.
                        <br /><br />
                        Lakshya is a night-time festival that is designed to be entertaining and engaging for all attendees. The festival kicks off in the evening and runs late into the night, with a range of activities and events taking place throughout the evening. One of the highlights of the festival is the celebrity DJ party, which promises to be an unforgettable experience for all who attend.
                        <br /><br />
                        In addition to the technical, cultural, sports, and e-sports events, Lakshya also offers a range of other activities and attractions, such as food stalls, exhibitions, and performances by local artists. With so much to see and do, Lakshya promises to be a fun-filled and exciting event that will leave attendees with lasting memories.
                    </p>
                </div>
            </div>
        </div>
    );
};

