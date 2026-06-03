"use client";

import dynamic from "next/dynamic";

const ProjectSwipper = dynamic(() => import("./ProjectSwipper"), {
    ssr: false,
    loading: () => <div className="min-h-[30rem]" />,
});

export default function ProjectSwipperClient(props) {
    return <ProjectSwipper {...props} />;
}
