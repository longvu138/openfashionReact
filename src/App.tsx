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

      <div style={{ marginTop: 20 }}>
        <BlogListView />
      </div>

      <div style={{ marginTop: 20 }}>
        <CategoryGridView />
      </div>

      <div style={{ marginTop: 20 }}>
        <CategoryListview />
      </div>

      <div style={{ marginTop: 20 }}>
        <CategoryGridviewFull />
      </div>

      <div style={{ marginTop: 20 }}>
        <ProductDetail />
      </div>

      <div style={{ marginTop: 20 }}>
        <ProductDetail2 />
      </div>

      <div style={{ marginTop: 20 }}>
        <Collection />
      </div>

      <div style={{ marginTop: 20 }}>
        <CollectionDetail />
      </div>

      <div style={{ marginTop: 20 }}>
        <Menu />
      </div>

      <div style={{ marginTop: 20 }}>
        <MenuExpand />
      </div>

      <div style={{ marginTop: 20 }}>
        <CartEmpty />
      </div>

      <div style={{ marginTop: 20 }}>
        <Cart />
      </div>

      <div style={{ marginTop: 20 }}>
        <OurStory />
      </div>

      <div style={{ marginTop: 20 }}>
        <Checkout />
      </div>

      <div style={{ marginTop: 20 }}>
        <Checkout1 />
      </div>

      <div style={{ marginTop: 20 }}>
        <AddNewAddress />
      </div>

      <div style={{ marginTop: 20 }}>
        <AddNewCard />
      </div>

      <div style={{ marginTop: 20 }}>
        <Payment />
      </div>


      <div style={{ marginTop: 20 }}>
        <PageNotFound />
      </div>

      <div style={{ marginTop: 20 }}>
        <Contact />
      </div>

      <div style={{ marginTop: 20 }}>
        <Search />
      </div>

      <div style={{ marginTop: 20 }}>
        <Search_recent />
      </div>

      <div style={{ marginTop: 20 }}>
        <Search_view />
      </div>









    </div>
  );
}

export default App;
