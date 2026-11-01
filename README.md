# News Frontend Clone

This is a responsive news website based on VnExpress International.
I built two versions: one with HTML, CSS and JavaScript, and another with Angular. 
The Angular version also has an admin page to create and edit articles.



## Repository Structure

```text
├── news-basic-version/     # HTML5, CSS (Grid/Flexbox), JavaScript
├── news-angular-version/   # Angular, Angular Material, Tailwind CSS
└── README.md
```



## 1. Basic Version (`/news-basic-version`)

Technologies: HTML5, CSS, JavaScript

- Responsive layout using CSS Grid and Flexbox.
- Reusable CSS styles.
- A simple dropdown menu using JavaScript.
- No frameworks or external libraries.


## 2. Angular Version (`/news-angular-version`)

Technologies: Angular, Angular Material, Tailwind CSS, TypeScript, localStorage.


### Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Shows public articles in a responsive layout. |
| `/admin` | Admin | Shows all articles in a table. |
| `/admin/create` | Create | Form to create a new article |
| `/admin/edit/:id` | Edit | Same form, pre-filled with the selected article |

### Features

- **Home page**
  - Shows only articles with status `public`, newest first.
  - Layout: 1 column on mobile (list), 2 columns on medium screens, 3 columns on large screens.
  - Article cards have 3 display modes: normal (with image), landscape (small image, list style), and no image.
  - "Most Read / Most Commented" tabs with virtual-scrolling list. *These currently use placeholder ordering, not real comment counts.*
- **Admin page**
  - Lists all articles (No., Title, Image, Create Day, Status), newest first.
  - Click a row to open the edit page
  - "Create New" opens the create page.
  - "Renew" resets stored data back to the initial JSON.
- **Create / Edit**
  - Both pages share one reusable `ArticleForm` component.
  - After saving, a snackbar message appears with a "Go to Admin" button.
  - Create: the form is cleared after saving so another article can be written right away.
  - Edit: stays on the page after saving; `id` and `createdDay` are kept unchanged.

---

## Form Validation

The form has 4 user-editable fields: `title`, `content`, `imagePath`, `status`. 
Errors are shown under each field after it is touched or submit is pressed. 
Values are trimmed before saving.

| Field | Rules |
|---|---|
| **Title** | Required. Cannot be only spaces. Only letters (including Vietnamese), numbers and spaces; no special characters. Max 60 characters. |
| **Content** | Max 1000 characters. **Draft:** may be empty. **Public:** required. |
| **Image link** | Must start with `http(s)://` or `/` and end with `.png`, `.jpg`, `.jpeg`, `.webp` or `.gif`. **Public:** required and must be valid. **Draft:** may be empty or invalid link shows an orange warning but can still be saved. |
| **Status** | Required: `draft` or `public`. |

Summary: **draft** only needs a valid title; **public** need a title, content and a valid image link.

---

## Data Flow

```text
initArticles.json ──(first load only)──► localStorage ["arLocal"]
                                              ▲   │
                       serviceLocalStorage ───┘   │ getAll / getById
                       (add, update, renew)       ▼
                                  ┌───────────────┴───────────────┐
                                  ▼                               ▼
                             Admin page                       Home page
                      (all articles, newest first)   (public only, newest first)
```

**Storage service (`serviceLocalStorage`)**
- `getAll()`: reads from localStorage; on first run, seeds it from `initArticles.json`.
- `getById(id)`, `add(article)`, `update(article)`, `renew()`.
- All reads and writes are wrapped in `try/catch`.

**Create flow**
1. `ArticleForm` validates input, then emits `saved` with `{ title, content, imagePath, status }`.
2. `PageCreateArticle` builds a full `Article` by adding `id` (`crypto.randomUUID()`) and `createdDay` (ISO date).
3. `storage.add()` puts the new article at the top of the stored list.
4. The form is reset and a snackbar is shown.

**Edit flow**
1. The `:id` route parameter is passed into `PageEditArticle` as an input.
2. `storage.getById(id)` loads the article and passes it into `ArticleForm` (`arInput`).
3. On save, the 4 form fields are merged over the old article (`{ ...old, ...formValue }`), so `id` and `createdDay` stay the same.
4. `storage.update()` saves it and a snackbar is shown.

**Data model**

```ts
interface Article {
  id: string;
  title: string;
  content: string;
  imagePath: string;
  status: 'draft' | 'public';
  createdDay: string; // ISO date string
}
// The form only handles: Pick<Article, 'title' | 'content' | 'imagePath' | 'status'>
```

---

## Running the Angular Version

```bash
cd news-angular-version
npm install
ng serve
```

Then open `http://localhost:4200`.

---

## Limitations

- No backend or login: data lives in each browser's localStorage, and anyone can open `/admin`.
- No delete, search or approve/reject workflow yet.
- Image validation only checks the link format, not whether the image actually loads.
- Most Read / Most Commented are placeholders.
- The home page reads data when it loads, so reload it to see changes made in another tab.
- Signal Forms is a newer Angular API and may change between Angular versions.
