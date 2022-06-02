import React from "react";
import "./App.css";
import BlogGridView from "./pages/Blog/BlogGridView";
import BlogListView from "./pages/Blog/BlogListView";
import BlogPost from "./pages/Blog/BlogPost";
import Cart from "./pages/Cart/Cart";
import CartEmpty from "./pages/Cart/CartEmpty";
import CategoryGridView from "./pages/Category/CategoryGridView";
import CategoryGridviewFull from "./pages/Category/CategoryGridviewFull";
import CategoryListview from "./pages/Category/CategoryListview";
import AddNewAddress from "./pages/Checkout/AddNewAddress";
import AddNewCard from "./pages/Checkout/AddNewCard";
import Checkout from "./pages/Checkout/Checkout";
import Checkout1 from "./pages/Checkout/Checkout1";
import Payment from "./pages/Checkout/Payment";
import Collection from "./pages/Collections/Collection";
import CollectionDetail from "./pages/Collections/CollectionDetail";
import Contact from "./pages/Contact/Contact";
import Homepage from "./pages/Homepage/Homepage";
import Menu from "./pages/Menu/Menu";
import MenuExpand from "./pages/Menu/MenuExpand";
import OurStory from "./pages/OurStory/OurStory";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProductDetail from "./pages/product/ProductDetail";
import ProductDetail2 from "./pages/product/ProductDetail2";
import Search from "./pages/search/Search";
import Search_recent from "./pages/search/Search_recent";
import Search_view from "./pages/search/Search_view";
function App() {
  return (
    <div className="App">
      <Homepage />

      <div style={{ marginTop: 20 }}>
        <BlogGridView />
      </div>
      <div style={{ marginTop: 20 }}>
        <BlogPost />
      </div>


      {/* <BlogListView /> */}
      {/* <CategoryGridView /> */}
      {/* <CategoryListview /> */}
      {/* <CategoryGridviewFull /> */}
      {/* <ProductDetail /> */}
      {/* <ProductDetail2 /> */}
      {/* <Collection /> */}
      {/* <CollectionDetail /> */}
      {/* <Menu /> */}
      {/* <MenuExpand /> */}
      {/* <CartEmpty /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <OurStory /> */}
      {/* <PageNotFound /> */}
      {/* <Contact /> */}
      {/* <Search /> */}
      {/* <Search_recent /> */}
      {/* <Search_view /> */}
      {/* <AddNewAddress /> */}
      {/* <AddNewCard /> */}
      {/* <Checkout1 /> */}
      {/* <Payment /> */}
    </div>
  );
}

export default App;
