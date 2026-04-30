interface Option {
    id: number;
    position: number;
    navigational: boolean;
    permalink: string | null;
    title: string | null;
    api_permalink: string | null;
}

interface Property {
    id: number;
    position: number;
    backoffice: boolean;
    is_hidden: boolean;
    is_navigational: boolean;
    permalink: string | null;
    title: string | null;
}

interface Characteristics {
    id: number;
    property_id: number;
    position: number;
    title: string | null;
    permalink: string | null;
}

interface OptionValues {
    id: number;
    option_name_id: number;
    position: number;
    title: string | null;
    image_url: string | null;
    permalink: string | null;
}

interface VariantFieldValues {
    id: number;
    variant_field_id: number;
    value: string;
}

export interface Image {
    id: number;
    product_id: number;
    external_id: number | null,
    position: number,
    created_at: Date;
    title: string | null;
    image_processing: boolean;

    url: string;
    original_url: string;
    medium_url: string;
    small_url: string;
    thumb_url: string;
    compact_url: string;
    large_url: string;

    filename: string;
    has_bitmap_image: boolean;
    image_content_type: string;
}

export interface Variant {
    id: number;
    product_id: number;
    available: boolean;
    title: string;
    url: string;
    sku: string;

    barcode: any;
    dimensions: any;

    image_ids: Array<any>;
    image_id: any;
    weight: any;

    created_at: string;
    updated_at: string;

    quantity: number;
    quantity_at_warehouse0: string;
    price: string;
    base_price: string | null;
    old_price: string | null;
    prices: Array<any>;

    variant_field_values: Array<VariantFieldValues>;
    option_values: Array<OptionValues>;

    sber_bnpl_price: number;
    ozon_link: string;
    wildberries_link: string;
}

export interface Product {
    id: number;
    title: string;
    available: boolean;
    unit: string | null;

    url: string;
    permalink: string;
    category_id: number;
    canonical_url_collection_id: number;

    short_description: string | null;
    description: string;

    images: Array<Image> | null;
    first_image: Image | null;

    price_kinds: Array<any>;
    price_min: string | null;
    price_max: string | null;

    bundle: any;
    updated_at: string;
    video_links: Array<any>;
    reviews_average_rating_cached: any | null;
    reviews_count_cached: any | null;

    option_names: Array<Option> | null;
    properties: Array<Property> | null;
    characteristics: Array<Characteristics> | null;
    variants: Array<Variant> | null;

    list_card_mode: string;
    list_card_mode_with_variants: string;
    sber_bnpl_price: number;
}