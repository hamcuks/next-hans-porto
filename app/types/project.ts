interface Project {
    thumbnail: string,
    name: string,
    slug: string
    associatedWith: string,
    role: string,
    duration: string,
    release: string,
    links: ProjectLinks
}

interface ProjectLinks {
    playStore: string,
    appStore: string,
    testflight: string,
    github: string
}

export default Project