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

export interface CollectionProps{
    name: string,
    image: string,
    link: string
}

export interface MainCollections{
    name: string,
    image: string,
    link: string
}

export interface Games{
    title: string,
    image: string,
    price: number,
    id: number,
    rating: number,
    age: number,
    collection: string,
    collectionLink: string
};

export interface GameProps{
    title: string,
    image: string,
    price: number,
    id: number
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
};

export interface ButtonProps{
    title: string,
    onClick: () => void
};

export interface CartItemProps{
    title: string,
    image: string,
    price: number
};

export interface SummaryAmountProps{
    name: string,
    amount: number,
    isDiscount: boolean
};

export interface SelectedBannerProps{
    img1: string,
    img2: string,
    img3: string,
    img4: string
};

export interface SelectedHeaderProps{
    title: string,
    rating: number,
    collection: string,
    collectionLink: string,
    age: number
}
export interface StarsProps{
    rated: boolean
}