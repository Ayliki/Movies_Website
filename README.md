# Movie Website

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Ayliki/Movies_Website/CI%20Pipeline?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Ayliki/Movies_Website?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)

## Project Overview

Welcome to the Movie Website! This is a modern, responsive web application built with React and Vite, designed to explore movies and TV shows using the TMDb API. Users can browse popular and trending content, search for specific titles, manage a list of favorite movies/TV shows (both locally and synchronized with a TMDb account), and access detailed information about each entry.

## ✨ Features

*   **Home Page**: Displays a curated selection of trending movies and TV shows.
*   **Movies Page**: Browse popular movies with full pagination.
*   **TV Shows Page**: Explore popular TV series with full pagination.
*   **Search Functionality**:
    *   Search across movies, TV shows, and people.
    *   Results displayed in a dynamic, responsive grid.
    *   Includes debouncing for efficient API calls during typing.
*   **Detail Modals**: Click on any movie or TV show card to open a modal with extended details (overview, release date, etc.).
*   **Favorites System**:
    *   Add or remove movies/TV shows from your favorites directly from the cards or detail modals.
    *   Favorites are persisted locally using `localStorage` for guest users.
    *   For logged-in users, favorites are synchronized with their TMDb account, ensuring consistency across devices.
*   **Dedicated Favorites Page**: View all your favorited content in one organized place.
*   **User Authentication & Profile**:
    *   Secure login process with TMDb.
    *   Dedicated user profile page displaying user information and their favorited items.
    *   Logout functionality.
*   **Responsive Design**: Optimized for seamless viewing on various screen sizes (desktops, tablets, mobile).
*   **Clean UI/UX**: Intuitive navigation and a modern aesthetic.

## 🚀 Technologies Used

*   **Frontend**:
    *   [React](https://react.dev/) (Vite for fast development)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   [React Router DOM](https://reactrouter.com/en/main) (for navigation)
    *   CSS Modules (for scoped component styling)
*   **API**:
    *   [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction) (The Movie Database API)
*   **State Management**:
    *   React's `useState` and `useEffect` hooks
    *   React Context API (for authentication and favorites)
*   **Build Tool**:
    *   [Vite](https://vitejs.dev/)

## ⚙️ Setup and Installation

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/Ayliki/Movies_Website.git
cd Movies_Website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure TMDb API Key

You will need a TMDb API key to fetch movie and TV show data.
1.  Go to [The Movie Database (TMDb) website](https://www.themoviedb.org/) and create an account if you don't have one.
2.  Once logged in, navigate to your [API settings](https://www.themoviedb.org/settings/api).
3.  Request a new API key (Developer / Request an API Key).
4.  Create a `.env` file in the root directory of your project (where `package.json` is located).
5.  Add your API key to the `.env` file like this:

    ```
    VITE_TMDB_API_KEY=YOUR_API_KEY_HERE
    ```
    (Replace `YOUR_API_KEY_HERE` with your actual TMDb API key).

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

The application should now be running locally, typically at `http://localhost:5173`.

### 5. Build for production (optional)

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with the production-ready build.

## 📖 Usage

*   **Navigation**: Use the Navbar to navigate between Home, Movies, TV Shows, and Favorites.
*   **Search**: Type in the search bar in the Navbar to find movies or TV shows.
*   **Details**: Click on any movie/TV show card to view more details in a modal popup.
*   **Favorites**:
    *   Click the heart icon on any card to add/remove it from your favorites.
    *   Visit the "Favorites" page to see all your saved content.
*   **Authentication**:
    *   Click the profile icon in the Navbar to go to the Profile page.
    *   If not logged in, you will be redirected to the TMDb website for authentication.
    *   Once authenticated, your TMDb account details and favorites will synchronize.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
