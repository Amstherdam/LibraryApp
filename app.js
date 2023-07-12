const addBookBtn = document.querySelector('#addBookBtn');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#bookPages');
const isRead = document.getElementById('isRead');
const libraryArea = document.querySelector('#bookGrid');
const readBtn = document.querySelectorAll('.outputRead');
const removeBtn = document.querySelector('.outputRemove');



let myLibrary = [];

function Book(title, author, page, read) { 
    this.title = title, 
    this.author = author,
    this.page = page,
    this.read = read
}

function addBookToLibrary() { 
    const denem = new Book( bookTitle.value, bookAuthor.value, bookPages.value, isRead.checked)
    myLibrary.push(denem);
    return denem
}

function createItem() { 

    /* Create Book Card Elements */

    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    libraryArea.appendChild(bookDiv);

    const titleP  = document.createElement('p');
    titleP.classList.add('outputTitle')
    titleP.innerHTML = `  Title: ${bookTitle.value}`;
    bookDiv.appendChild(titleP);

    const authorP = document.createElement('p');
    authorP.classList.add('autputAuthor');
    authorP.innerHTML = ` Author:  ${bookAuthor.value}`;
    bookDiv.appendChild(authorP);

    const bookPageP = document.createElement('p');
    bookPageP.classList.add('outputPage');
    bookPageP.innerHTML = ` Page: ${bookPages.value}`
    bookDiv.append(bookPageP);

    const isReadP = document.createElement('p');
    isReadP.innerHTML = `Read: ${isRead.checked == true ? 'Read 😊' : ' Not read yet 😐'}`
    bookDiv.appendChild(isReadP);

    const bookInsideDiv = document.createElement('div');
    bookDiv.appendChild(bookInsideDiv);

    const outputReadBtn = document.createElement('button');
    outputReadBtn.innerHTML = 'Read';
    outputReadBtn.classList.add('outputRead');
    bookInsideDiv.appendChild(outputReadBtn);

    const outputRemoveBtn = document.createElement('button');
    outputRemoveBtn.innerHTML = 'Remove';
    outputRemoveBtn.classList.add('outputRemove');
    bookInsideDiv.appendChild(outputRemoveBtn)

    /* Book Card Buttons Have Event */

    outputReadBtn.addEventListener('click', () => { 
        if( isRead.checked == true) { 
            isReadP.innerHTML = ` READ: Not read yet 😐`;
            isRead.checked = false;
        }
        else if ( isRead.checked == false){ 
            isReadP.innerHTML = ` READ: Read 😊`;
            isRead.checked = true;
            outputReadBtn.style.backgroundColor = 'red'
        }
    });

    outputRemoveBtn.addEventListener('click', () => { 
        outputReadBtn.parentElement.parentElement.remove();
    });
}

/*  add to the form reset */

function resetForm () { 
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    isRead.checked = false;
}

/* +Add Book button event */

addBookBtn.addEventListener('click', (e) => { 
   e.preventDefault();
   addBookToLibrary();
   
   if( 
    bookTitle.value.length > 0 &&
    bookAuthor.value.length > 0 &&
    Number (bookPages.value) > 0
   ) { 
    createItem()
    resetForm();
   }
   else { 
    console.log('denem')
   }
   
   console.log(myLibrary)
})





