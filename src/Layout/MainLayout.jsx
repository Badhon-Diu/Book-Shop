import { useEffect, useState } from "react";
import BookCards from "../Components/BooksCards";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
export default function MainLayout() {
  const [booksdata, setbooksdata] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setbooksdata(data));
  }, []);

  const [searchText, setSearchText] = useState("");
  function handleOnSearch(text) {
    setSearchText(text);
    let NewBookdata = [...booksdata];
    const filterdata = booksdata.filter((book) =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    setbooksdata(filterdata);
  }
  //console.log(searchText);
  return (
    <>
      <Navbar></Navbar>
      <div className="my-10 lg:my-14">
        <Header onSearch={handleOnSearch}></Header>
        <BookCards booksdata={booksdata}></BookCards>
      </div>
      <Footer></Footer>
    </>
  );
}
