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
    prices: Array<object>,
    id: number,
    rating: number,
    age: number,
    collection: string,
    collectionLink: string
};

export interface GameProps{
    title: string,
    image: string,
    prices: Array<object>,
    id: string
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
    details: string,
    link: string
};

export interface ButtonProps{
    title: string,
    onClick: () => void
};

interface pricesObjectProps{
    name: string,
    price: number
}

export interface CartItemProps{
    title: string,
    image: string,
    price: number,
    prices: Array<pricesObjectProps>,
    id: string,
    onDelete: () => void
};

export interface SummaryAmountProps{
    name: string,
    amount: number,
    isDiscount: boolean
};

export interface SelectedBannerProps{
    img1: string,
    img2: string,
    img3: string
};

export interface SelectedHeaderProps{
    title: string,
    rating: number,
    collection: string,
    collectionLink: string,
    age: number
};

export interface StarsProps{
    rated: boolean
};

interface platformProps{
    name: string,
    pricr: number
}

export interface platformsProps{
    platforms: Array<platformProps>
}

export interface PurchaseSummaryProps{
    onClick: () => void
};

export interface NavigationProps{
    onClick: (e: boolean) => void,
    activeLink: boolean
}

export interface TabProps{
    title: string,
    isActive: boolean,
    onClick: () => void
};

export interface InputProps{
    title: string,
    onChange: (e: string) => void
};

export interface SelectInputProps{
    title: string,
    onChange: (e: string) => void
};

export interface SelectCityInputProps{
    title: string,
    data: any,
    onChange: (e: string) => void
};

export interface PurchasePlatformProps{
    name: string,
    price: number,
    active: boolean,
    add: () => void,
    remove: () => void
};

export interface SelectedGameDetailsProps{
    details: string
};

export interface AddedToCartProps{
    game: string,
    price: number,
    onClose: () => void
};

export interface SearchSuggestionProps{
    name: string,
    onSelect: () => void
};

interface CollectionObjectProps{
    name: string,
    images: Array<string>,
    _id: string,
    prices: Array<object>
};

export interface CategoryProps{
    name: string,
    data: Array<CollectionObjectProps>
};

export interface ErrorProps{
    title: string,
    details: string
};

export interface FormProps{
    firstname: string,
    lastname: string,
    country: string,
    city: string,
    address: string
}

export interface CheckoutFormPageProps{
    onNext: (e: FormProps) => void
};