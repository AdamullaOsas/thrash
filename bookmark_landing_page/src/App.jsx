import React from "react";
import Navbar from "./components/Navbar";
import BookmarkManager from "./components/BookmarkManager";
const App = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <BookmarkManager />
        </div>
    );
};

export default App;
