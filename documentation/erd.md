erDiagram
    genre {
        bigint id
        text name
    }
    content_rating {
        bigint id
        text rating_type
    }
    content {
        bigint id
        text title
        timestamp duration
        date release_date
        int season
        bigint quality_id
        date created_at
        date updated_at
    }
    language {
        bigint id
        text language
    }
    subtitle {
        bigint id
        bigint language_id
        text content
    }
    content_metadata {
        bigint id
        bigint title
        bigint genre_id
        int rating
        bigint content_id
        bigint language_id
        bigint subtitle_id
        enum content_type
        bigint content_rating_id
        enum age_rating
        date created_at
        date updated_at
    }
    viewinghistory {
        bigint id
        bigint profile_id
        bigint content_id
        timestamp watch_date
        double progress_percentage
    }
    watchlist {
        bigint id
        bigint profile_id
        bigint content_id
    }
    profile {
        bigint id
        bigint account_id
        text name
        bigint profile_image
        date date_of_birth
        text language
        date created_at
        date updated_at
    }
    subscription {
        bigint id
        date begin_date
        date end_date
        bigint account_id
        bigint subscription_type_id
        bigint referral_id
        date created_at
        date updated_at
    }
    subscription_type {
        bigint id
        text type
        int price_in_euro_cents
    }
    invoice {
        bigint id
        bigint subscription_id
        enum is_paid
        date created_at
        date updated_at
    }
    account {
        bigint id
        text email
        text password
        boolean activated
        timestamp blocked_until
        date created_at
        date updated_at
    }
    previous_password_hash {
        bigint id
        bigint account_id
        text password_hash
        date created_at
    }
    
    account ||--o{ profile : "has"
    profile ||--o{ viewinghistory : "has"
    profile ||--o{ watchlist : "has"
    account ||--o{ subscription : "has"
    subscription ||--o{ invoice : "generates"
    content_metadata ||--o{ content : "describes"
    content_metadata ||--o{ genre : "categorized by"
    content_metadata ||--o{ language : "available in"
    content_metadata ||--o{ subtitle : "has"
    content_metadata ||--o{ content_rating : "rated by"
    viewinghistory ||--o{ content : "tracks"
    watchlist ||--o{ content : "contains"
    subscription ||--o{ subscription_type : "of type"
    account ||--o{ previous_password_hash : "stores"