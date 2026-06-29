let book = [
  {
    title:"The Stranger",
    author:"Albert Camus ",
    rating:""
  },


  {
    title:"The Metamorphosis ",
    author:"Franz Kafka"
    rating:""
},

];
function displayBooks(bookList = books){
  const library= document.getElementById("library");
   library.innerHTML="";

if(bookList.length == 0){
  library.innerHTML="<h2>No books found</h2>";
  return;
}

bookList.forEach((book,index)=>
  library.innerHTML += `
  <div class="book">
    <h3>${book.title}</h3>
    <p>Author:${book.author}</p>
    <p>${book.rating}</p>

    <button class="delete" onclick="delete(${index})">
    Delete
    </button>
    </div>
    `;
});
}

function addBook(){
  const title= document.getElementById("title").value;
  const author=document.getElementById("author").value;

if(title.trim()==="|| author.trim()===""){
  alart("Please fill all fields");
  return;
}

const  newBook ={
  title:title,
  author:author,
  rating:rating,
};
book.push(newBook);

saveBooks();

displayBooks();

}
function deliteBook(index){
  book.splice(index,1);
  saveBooks();
  displayBooks();
}

function saveBooks(){
  locateStorage.stItem(
    "books",
    JSON.stringify(books)
    );
}

document.getElementById("search")
add.EventListener("input",function(){
  let searchValue=this.value.toLowerCase();
  let fillteredBooks= books.filter(books=>
    book.title
    .toLowerCase
    .includes(searchValue)
    );
  displayBookss(filteredBooks);
});

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
    );

});

if(localStorage.getItem("darkMode") ==="true"){
  document.body.classList.contains("dark")
}

displayBooks();
  
