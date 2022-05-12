import React from "react";
import "./App.css";
import BlogGridView from "./pages/Blog/BlogGridView";
import BlogListView from "./pages/Blog/BlogListView";
import BlogPost from "./pages/Blog/BlogPost";
import CategoryGridView from "./pages/Category/CategoryGridView";
import Homepage from "./pages/Homepage/Homepage";
function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      {/* <BlogGridView /> */}
      {/* <BlogPost /> */}
      {/* <BlogListView /> */}
      <CategoryGridView />
    </div>
  );
}

export default App;
