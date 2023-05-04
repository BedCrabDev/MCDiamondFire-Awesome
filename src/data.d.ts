export interface Category {
    name: string
    description: string
    items: Item[]
    hidden?: boolean
}

export interface Item {
    name: string
    description: string
    properties: Record<string, string>
    outdated?: boolean
}

export type Data = Category[]
