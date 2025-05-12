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
  console.log(booksdata);
  const [searchText, setSearchText] = useState("");
  function handleOnSearch(text) {
    setSearchText(text);

    const filterdata = booksdata.filter((book) =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    setbooksdata(filterdata);
  }
  //console.log(searchText);

  const booksdatasample = [...booksdata];
  function handleSort(sorttype) {
    if (sorttype === "atoz") {
      let NewBookdata = [...booksdata];
      NewBookdata.sort((a, b) => a.title.localeCompare(b.title));
      setbooksdata(NewBookdata);
      //console.log(sorttype);
    } else if (sorttype === "ztoa") {
      let NewBookdata = [...booksdata];
      NewBookdata.sort((a, b) => b.title.localeCompare(a.title));
      setbooksdata(NewBookdata);
    } else {
      setbooksdata(booksdatasample);
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="my-10 lg:my-14">
        <Header onSort={handleSort} onSearch={handleOnSearch}></Header>
        <BookCards booksdata={booksdata}></BookCards>
      </div>
      <Footer></Footer>
    </>
  );
}
