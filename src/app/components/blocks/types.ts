export type CommonAttributes = {
    id: string,
    type: string,
}

export type ButtonT = CommonAttributes & {
    text: string,
    color: string,
    bgColor: string
}

export type ListItemT = {
    title: string,
    description: string,
    src: string
}

export type ListT = CommonAttributes & {
    items: ListItemT[]
}

export type TextT = CommonAttributes & {
    text: string,
    color: string,
    align: "center" | "right" | "left",
}

export type ImageT = CommonAttributes & {
    id: string,
    src: string
}