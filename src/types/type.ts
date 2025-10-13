export interface Office{
    id : number,
    name : string,
    price: number,
    duration: number,
    slug : string,
    city : City,
    thumbnail : string,
    photos : Photo[],
    benefits : Benefits[],
    about : string,
}

interface Photo{
    id : number,
    photo: string,
}

interface Benefits{
    id: number,
    name: string,
}

export interface City{
    id: number,
    name: string,
    slug: string,
    photo: string,
    officeSpace_count: number,
    officeSpaces: Office[],
}

export interface BookingTransaction{
    id: number,
    name: string,
    phone_number: string,
    booking_trx_id: string,
    is_paid: boolean,
    
}