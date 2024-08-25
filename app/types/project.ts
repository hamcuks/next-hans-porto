interface Project {
    thumbnail: string,
    name: string,
    slug: string
    associatedWith: string,
    role: string,
    duration: string,
    release: string,
    description: string,
    technologies: string[],
    attachments: string[],
    collaborators: string[],
    links: ProjectLinks
}

interface ProjectLinks {
    playStore: string,
    appStore: string,
    testflight: string,
    github: string
}

export default Project