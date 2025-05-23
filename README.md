# 🎬 Wall Poster Movies

Wall Poster Movies is a responsive Angular application that allows users to search and view movie posters using the OMDb API.

![Wall Poster Movies Screenshot](https://via.placeholder.com/1200x600?text=Screenshot+Preview)

---

## ✨ Features

- 🔍 Search movies by title
- 🖼 Display movie posters, year, and type
- 📱 Responsive design with modern UI
- ⚠️ Error handling for empty or failed search
- 🎨 Styled using Bootstrap and custom CSS

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- Angular CLI

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/wall-poster-movies.git
cd wall-poster-movies
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
ng serve
The app will be running at http://localhost:4200.

🔧 Configuration
This app uses the OMDb API. You can replace the API key in the service file:

ts
Copy
Edit
private apiKey = 'your_api_key';
To get your API key, sign up at OMDb.

📁 Project Structure
cpp
Copy
Edit
src/
├── app/
│   ├── components/
│   ├── services/
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
├── environments/
├── index.html
└── styles.css
📸 UI Preview
Home page with search input

Dynamic card layout for results

Placeholder image for missing posters

🛠 Technologies Used
Angular

TypeScript

Bootstrap 5

OMDb API

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss.

## 📜 License

This project is licensed under the MIT License.

## 🙌 Acknowledgements

OMDb API

Bootstrap
