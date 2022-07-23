export interface HeaderProps{
    active: string
}

export interface BackgroundProps{
    children: any,
    bubbles: boolean,
    explore: boolean
}

export interface Collections{
    title: string,
    name: string,
    image: string,
    miniImage: string,
    details: string
};

export interface MainCollections{
    name: string,
    image: string,
    link: string
}

export interface Games{
    title: string,
    image: string,
    price: number
};

export interface GameProps{
    title: string,
    image: string,
    price: number,
}

export interface CollectionItemProps{
    id: number,
    name: string,
    image: string,
    active: boolean,
    onClick: (e: number) => void
};

export interface BannerProps{
    image: string,
    title: string,
    details: string
}