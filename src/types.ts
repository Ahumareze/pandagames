export interface Collections{
    title: string,
    name: string,
    image: string,
    miniImage: string,
    details: string
};

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