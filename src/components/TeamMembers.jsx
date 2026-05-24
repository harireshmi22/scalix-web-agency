import React from 'react'

const teamMembers = [{
    name: "Harireshmi",
    role: "Full Stack Developer",
    imageUrl: "/images/harireshmi.jpg",
    description: "Manages the complete project workflow, assigns tasks, coordinates with team members, and ensures every project is completed with proper planning and execution.",
    responsibilities: ["Project Management", "Team Coordination", "Client Communication"],
    techStack: ["MERN Stack", "Project Management", "Automation", "Web Development"]
}, {
    name: "Kanishq",
    role: "Full Stack Developer",
    imageUrl: "/images/kanishq.jpg",
    description: "Designs and develops responsive websites and web applications using modern MERN stack technologies with a focus on clean UI and usability.",
    responsibilities: ["UI Design", "Front-end Development", "Responsive Web Design"],
    techStack: ["HTML", "CSS", "JavaScript", "React", "MERN Stack"]
}, {
    name: "Srestha",
    role: "Full Stack Developer",
    imageUrl: "/images/srestha.jpg",
    description: "Works on AI and machine learning solutions to create automation features, smart tools, and intelligent systems for modern web applications.",
    responsibilities: ["AI/ML Development", "Automation Solutions", "Intelligent Systems", "Backend Development"],
    techStack: ["Python", "Machine Learning", "AI", "Automation Tools", "Backend Development"]
},
{
    name: "Kaustubh",
    role: "Full Stack Developer",
    imageUrl: "/images/kaustubh.jpg",
    description: "Handles JavaScript-based functionality, interactive features, and code optimization to improve performance and user experience.",
    responsibilities: ["Backend Development", "API Integration", "Performance Optimization"],
    techStack: ["Node.js", "Express", "JavaScript", "REST APIs", "Backend Development"]
}]


const TeamMembers = () => {
    return (
        <section className='w-full bg-[#070031] border border-gray-400 flex flex-col items-center relative overflow-hidden '>

            <div className="absolute -bottom-80 -left-40 h-85 w-185 rounded-full bg-[#FFA369] blur-[180px]"></div>
            <div className="absolute -bottom-80 -right-40 h-85 w-185 rounded-full bg-[#FFA369] blur-[180px]"></div>

            <div className="absolute -top-80 -right-80 h-80 w-212.5 rounded-full bg-[#D6F1FF] blur-[150px]"></div>
            <div className="absolute -top-80 -left-80 h-80 w-212.5 rounded-full bg-[#D6F1FF] blur-[150px]"></div>

            <div className='w-full flex flex-col items-center mt-15'>

                <div className="rounded-4xl flex items-center justify-center border border-gray-400 w-[250px] h-12 ">
                    <h2 className="text-sm font-bold text-[#ffffff]">OUR TEAM MEMBERS</h2>
                </div>
                <h1 className='text-3xl font-semibold text-gray-50 mt-10 text-center'>Meet the people behind Scalix <span className='font-bold text-[#FFA369]'>Web Agency</span> </h1>

                <p className='text-[#ffffff] w-220 mt-5 text-center text-[14px]'>At Scalix Web Agency, our team brings together development, design, automation, and project management skills to build modern digital solutions. Each member focuses on a specific area of work,
                    helping us create websites, web applications, automation systems, and optimized user experiences with a clear and collaborative process.</p>
            </div>

            <div className="mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {
                        teamMembers.map((member) => (
                            <div key={member.id} className="flex flex-col bg-[#070031] border border-gray-400 rounded-2xl p-5">
                                <div className='border border-gray-50 h-16 w-16 rounded-full'>
                                    <img src={member.imageUrl} alt={member.name} />
                                </div>
                                <h1 className='text-2xl font-semibold text-gray-50'>{member.name}</h1>
                                <h1 className='text-xl font-semibold text-gray-50 mt-5'>{member.role}</h1>
                                <h1 className='text-sm text-gray-50 mt-5'>{member.description}</h1>

                                <div className='flex gap-5 mt-5'>
                                    <h1 className='text-sm text-[#FFA369]'>{member.responsibilities}</h1>
                                    <h1 className='text-sm text-[#FFA369]'>{member.techStack}</h1>
                                </div>
                            </div>
                        ))}
                </div>
            </div>


        </section>
    )
}

export default TeamMembers