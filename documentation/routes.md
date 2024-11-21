### **Account Management**

- **GET** `/accounts` - Get all accounts.
- **GET** `/accounts/{id}` - Get a specific account by ID.
- **POST** `/accounts` - Create a new account.
- **PUT** `/accounts/{id}` - Update account details.
- **DELETE** `/accounts/{id}` - Delete an account.

---

### **Profiles**

- **GET** `/profiles` - Get all profiles.
- **GET** `/profiles/{id}` - Get a specific profile by ID.
- **POST** `/profiles` - Create a new profile.
- **PUT** `/profiles/{id}` - Update profile details.
- **DELETE** `/profiles/{id}` - Delete a profile.

---

### **Content Management**

- **GET** `/content` - Get all content.
- **GET** `/content/{id}` - Get a specific content item by ID.
- **POST** `/content` - Add a new content item.
- **PUT** `/content/{id}` - Update details of content.
- **DELETE** `/content/{id}` - Delete a content item.

---

### **Genres**

- **GET** `/genres` - Get all genres.
- **GET** `/genres/{id}` - Get a specific genre by ID.
- **POST** `/genres` - Add a new genre.
- **PUT** `/genres/{id}` - Update a genre.
- **DELETE** `/genres/{id}` - Delete a genre.

---

### **Content Metadata**

- **GET** `/content-metadata` - Get all metadata records.
- **GET** `/content-metadata/{id}` - Get metadata for a specific content item.
- **POST** `/content-metadata` - Add metadata for content.
- **PUT** `/content-metadata/{id}` - Update metadata for content.
- **DELETE** `/content-metadata/{id}` - Delete content metadata.

---

### **Quality**

- **GET** `/qualities` - Get all quality levels.
- **GET** `/qualities/{id}` - Get a specific quality level by ID.
- **POST** `/qualities` - Add a new quality level.
- **PUT** `/qualities/{id}` - Update a quality level.
- **DELETE** `/qualities/{id}` - Delete a quality level.

---

### **Content Rating**

- **GET** `/content-ratings` - Get all content ratings.
- **GET** `/content-ratings/{id}` - Get a specific rating by ID.
- **POST** `/content-ratings` - Add a new content rating.
- **PUT** `/content-ratings/{id}` - Update a content rating.
- **DELETE** `/content-ratings/{id}` - Delete a content rating.

---

### **Watchlist**

- **GET** `/watchlists` - Get all watchlists.
- **GET** `/watchlists/{profile_id}` - Get a watchlist for a specific profile.
- **POST** `/watchlists` - Add content to a watchlist.
- **DELETE** `/watchlists/{profile_id}/{content_id}` - Remove content from a watchlist.

---

### **Viewing History**

- **GET** `/viewing-history` - Get all viewing history records.
- **GET** `/viewing-history/{profile_id}` - Get viewing history for a specific profile.
- **POST** `/viewing-history` - Add a new viewing history record.
- **PUT** `/viewing-history/{id}` - Update viewing progress (e.g., percentage).
- **DELETE** `/viewing-history/{id}` - Delete a viewing history record.

---

### **Language**

- **GET** `/languages` - Get all languages.
- **GET** `/languages/{id}` - Get a specific language by ID.
- **POST** `/languages` - Add a new language.
- **PUT** `/languages/{id}` - Update language information.
- **DELETE** `/languages/{id}` - Delete a language.

---

### **Subtitle**

- **GET** `/subtitles` - Get all subtitles.
- **GET** `/subtitles/{id}` - Get subtitles for specific content.
- **POST** `/subtitles` - Add new subtitles.
- **PUT** `/subtitles/{id}` - Update subtitle information.
- **DELETE** `/subtitles/{id}` - Delete a subtitle.

---

### **Subscriptions**

- **GET** `/subscriptions` - Get all subscriptions.
- **GET** `/subscriptions/{id}` - Get a specific subscription.
- **POST** `/subscriptions` - Add a new subscription.
- **PUT** `/subscriptions/{id}` - Update subscription details.
- **DELETE** `/subscriptions/{id}` - Cancel a subscription.

---

### **Subscription Types**

- **GET** `/subscription-types` - Get all subscription types.
- **GET** `/subscription-types/{id}` - Get a specific subscription type.
- **POST** `/subscription-types` - Add a new subscription type.
- **PUT** `/subscription-types/{id}` - Update a subscription type.
- **DELETE** `/subscription-types/{id}` - Delete a subscription type.

---

### **Invoices**

- **GET** `/invoices` - Get all invoices.
- **GET** `/invoices/{id}` - Get a specific invoice.
- **POST** `/invoices` - Generate a new invoice.
- **PUT** `/invoices/{id}` - Mark invoice as paid or update details.
- **DELETE** `/invoices/{id}` - Delete an invoice.

---

### **Previous Password Hashes**

- **GET** `/previous-password-hashes` - Get all previous password hashes.
- **GET** `/previous-password-hashes/{account_id}` - Get password hashes for a specific account.
- **POST** `/previous-password-hashes` - Add a new password hash.
- **DELETE** `/previous-password-hashes/{id}` - Delete a password hash.
