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
    const createLibraryItem = new Book( bookTitle.value, bookAuthor.value, bookPages.value, isRead.checked)
    myLibrary.push(createLibraryItem);
    return createLibraryItem
}

/* check title in the array  */





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
    outputReadBtn.innerHTML = ' Change to Read';
    outputReadBtn.style.backgroundColor = '#4ACCF5'
    
    outputReadBtn.classList.add('outputRead');
    bookInsideDiv.appendChild(outputReadBtn);

    const outputRemoveBtn = document.createElement('button');
    outputRemoveBtn.innerHTML = 'Remove';
    outputRemoveBtn.classList.add('outputRemove');
    bookInsideDiv.appendChild(outputRemoveBtn)

    /* Book Card Buttons Have Event */

    outputReadBtn.addEventListener('click', () => { 
        if( isRead.checked == true) { 
            isReadP.innerHTML = ` Read: Not read yet 😐`;
            isRead.checked = false;
        }
        else if ( isRead.checked == false){ 
            isReadP.innerHTML = ` Read: Read 😊`;
            isRead.checked = true;
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

/*!!!!!!!!!!!!!!!!!!  Hata Var  !!!!!!!!!!!!!!!!!!!!!!!!!!! */

/* function checkTitleInLibrary() { 

    if(myLibrary.length > 0) { 
        for ( let item of myLibrary) { 

            if( item.title == bookTitle.value) {  
             return false
            } else {
                addBookToLibrary()
                return true
            }
     }
}}; */


addBookBtn.addEventListener('click', (e) => { 
    e.preventDefault();

    if( 
        bookTitle.value.length > 0 &&
        bookAuthor.value.length > 0 &&
        Number (bookPages.value) > 0
    ) { 
        createItem();
        resetForm();
    } else { 
        alert('hata var')
    }
   
   

})




