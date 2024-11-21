```mermaid
classDiagram
    class Account {
        +email: string
        +password: string
        +activated: boolean
        +blocked_until: Date | null
        +created_at: Date
        +updated_at: Date
    }

    class Profile {
        +account_id: Account
        +name: string
        +profile_image: string | null
        +date_of_birth: Date
        +language_id: Language
        +created_at: Date
        +updated_at: Date
    }

    class Content {
        +title: string
        +duration: string
        +release_date: Date
        +season: number
        +quality_id: Quality
        +created_at: Date
        +updated_at: Date
    }

    class ContentMetadata {
        +title: string
        +genre_id: Genre
        +rating: string
        +content_id: Content
        +language_id: Language
        +subtitle_id: Subtitle
        +type: "movie" | "series" | "documentary"
        +age_rating: "G" | "PG" | "PG-13" | "R" | "NC-17"
        +created_at: Date
        +updated_at: Date
    }

    class Genre {
        +name: string
    }

    class ContentRating {
        +rating_type: string
    }

    class Quality {
        +quality: string
    }

    class Language {
        +language: string
    }

    class Subtitle {
        +language_id: Language
        +content: string
    }

    class ViewingHistory {
        +profile_id: Profile
        +content_id: Content
        +watch_date: Date
        +progress_percentage: number
    }

    class Watchlist {
        +profile_id: Profile
        +content_id: Content
    }

    class Subscription {
        +begin_date: Date
        +end_date: Date | null
        +account_id: Account
        +subscription_type_id: SubscriptionType
        +referral_id: Subscription | null
        +created_at: Date
        +updated_at: Date
    }

    class SubscriptionType {
        +type: string
        +price_in_euro_cents: number
    }

    class Invoice {
        +subscription_id: Subscription
        +is_paid: "paid" | "unpaid" | "overdue"
        +created_at: Date
        +updated_at: Date
    }

    class PreviousPasswordHash {
        +account_id: Account
        +password_hash: string
        +created_at: Date
    }

    Account "1" --> "*..1" Profile
    Profile "1" --> "*..1" ViewingHistory
    Profile "1" --> "*..1" Watchlist
    Content "1" --> "*..1" ViewingHistory
    Content "1" --> "*..1" Watchlist
    Content "1" --> "*..1" ContentMetadata
    Genre "1" --> "*..1" ContentMetadata
    Language "1" --> "*..1" ContentMetadata
    Subtitle "1" --> "1" Language
    ContentMetadata "1" --> "1" Content
    ContentMetadata "1" --> "1" ContentRating
    Content "1" --> "1" Quality
    Subscription "1" --> "1" Account
    Subscription "1" --> "1" SubscriptionType
    Subscription "1" --> "*..1" Invoice
    PreviousPasswordHash "1" --> "1" Account
```
