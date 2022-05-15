import React from "react";
import "./App.css";
import BlogGridView from "./pages/Blog/BlogGridView";
import BlogListView from "./pages/Blog/BlogListView";
import BlogPost from "./pages/Blog/BlogPost";
import CategoryGridView from "./pages/Category/CategoryGridView";
import CategoryGridviewFull from "./pages/Category/CategoryGridviewFull";
import CategoryListview from "./pages/Category/CategoryListview";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/product/ProductDetail";
import ProductDetail2 from "./pages/product/ProductDetail2";
function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      {/* <BlogGridView /> */}
      {/* <BlogPost /> */}
      {/* <BlogListView /> */}
      {/* <CategoryGridView /> */}
      {/* <CategoryListview /> */}
      {/* <CategoryGridviewFull /> */}
      {/* <ProductDetail /> */}
      <ProductDetail2 />
    </div>
  );
}

export default App;
