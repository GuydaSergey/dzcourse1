export type Launch = {
    flight_number: number,
    mission_name: string,
    launch_year: string,
    launch_success: boolean,
    rocket: Rocket,
    links: Link
}

export type Rocket = {
    rocket_id: number,
    rocket_name: string,
    rocket_type: string,
    launch_success: boolean
}

export type Link = {
    mission_patch: string,
    video_link: string,
    article_link: string
}

export type Meteor = {
    name: string,
    nametype: string,
    recclass: string,
    year: string,
    mass: string | number,
    id: string,
}

export type Query = {
    Launches: Launch[],
    Meteors: Meteor[]
}
