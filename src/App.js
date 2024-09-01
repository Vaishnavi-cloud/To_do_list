import Header from "./Header";
// import Change from "./Change";
import { useState } from "react";
import Footer from "./Footer";
// import Ee from "./Map";
import Content from "./Content";
import AddItem from "./AddItem";
import PassagePanel from "./PassagePannel";
import SearchItems from "./SearchItems";
import { useEffect } from "react";
import apiRequest from "./apiRequest";
function App() {
  const [items, setItems] = useState(
    // [
    //   {
    //     id: 1,
    //     checked: true,
    //     item: "yoga",
    //   },
    //   {
    //     id: 2,
    //     checked: true,
    //     item: "water",
    //   },
    //   {
    //     id: 3,
    //     checked: true,
    //     item: "sandwitch",
    //   },
    // ]
    []
    //this localstorage ensures that it gonna provide us what is actually we did in the previous state
  );

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "http://localhost:3500/items";
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL);
        // console.log(res);
        if (!res.ok) throw Error("data not received"); // it is assumd that less that 200 means the data is ok and more thn 200 it is assumed taht data not received error.
        const listItems = await res.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        // console.log(err.message);
        setFetchError(err);
      } finally {
        setIsLoading();
      }
    };
    // (async () => await fetchItems())(); //intiate the call for async()...
    setTimeout(() => {
      (async () => await fetchItems())(); //we manually setting the timeout to be 2000
    }, 2000);
  }, []);

  // setTimeout(() => {
  //   (async () => await fetchItems())();
  // }, 2000);
  const handleClick = async (id) => {
    // console.log(`id: ${id}`);
    const newarray = items.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item
    );
    setItems(newarray);
    const myItem = newarray.filter((item) => item.id === id); //get the details of the selected id
    // localStorage.setItem("todolist", JSON.stringify(newarray));

    const updateOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const removeClick = async (id) => {
    // console.log(`id: ${id}`);
    // const newarray1 = items.map((item) => (id === item.id ? {} : item));//{}is still an empty object ...
    const newarray = items.filter((item) => item.id !== id);

    setItems(newarray);
    const deleteOptions = {
      method: "DELETE",
    };
    // localStorage.setItem("todolist", JSON.stringify(newarray));
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };
  const [newItem, setNewItem] = useState(""); //only to get newItem and store

  // console.log("before effect");
  // useEffect(
  //   () => console.log(JSON.parse(localStorage.getItem("todolist"))),
  //   []
  // );
  // console.log("after effect");

  const adddItem = async (item) => {
    //here where taht new item is been passed inm the format of list id,checked,item in this form and been updated through setItems..
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItem = [...items, addNewItem];
    setItems(listItem);
    // localStorage.setItem("todolist", JSON.stringify(listItem));
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(addNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  function handleAdd(e) {
    e.preventDefault();
    console.log("submitted");
    if (!newItem) return;
    console.log(newItem);
    adddItem(newItem);
    setNewItem("");
  }
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Header />
      <PassagePanel />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleAdd={handleAdd}
      />
      <SearchItems search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>is loading....</p>}
        {fetchError && <p>{` ${fetchError}`}</p>}
        {!isLoading && !fetchError && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleClick={handleClick}
            removeClick={removeClick}
          />
        )}
      </main>
      {/* <Change /> */}

      <Footer length={items.length} />
      {/* length--props; */}
    </div>
  );
}

export default App;
