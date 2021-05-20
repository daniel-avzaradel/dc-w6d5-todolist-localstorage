// const todoList = [
//     {
//         'name': 'header'
//     },
//     {
//         'name': "Mini Project",
//         "description": "A to-do list mini project using javascript, dom, and localStorage creating an interective webpage to display the to-do list with specific requirements.",
//         "start date": new Date('2021-05-17').toISOString().substring(0, 10),
//         "end date": new Date('2021-05-20').toISOString().substring(0, 10),
//         "status": "active"
//     },
//     {
//         "name": "DOM",
//         "description": "A mini project using the tools of DOM (Document Object Manipulation) to create interaction with JavaScript",
//         "start date": new Date('2021-05-20').toISOString().substring(0, 10),
//         "end date": new Date('2021-05-27').toISOString().substring(0, 10),
//         "status": "active"
//     },
//     {
//         "name": "PostgreSQL",
//         "description": "A database project to work on postgresql queries on PgAdmin4 tool.",
//         "start date": new Date('2021-05-19').toISOString().substring(0, 10),
//         "end date": new Date('2021-05-25').toISOString().substring(0, 10),
//         "status": "active"
//     },
//     {
//         "name": "React",
//         "description": "Create a project using REACT, an open-source front-end JavaScript library for building user interfaces or UI components.",
//         "start date": new Date('2021-05-12').toISOString().substring(0, 10),
//         "end date": new Date('2021-05-17').toISOString().substring(0, 10),
//         "status": "active"
//     },
// ]

const todoList = [
    {
        'name': 'header'
    },
    {
        'name': "Mini Project",
        "description": "A to-do list mini project using javascript, dom, and localStorage creating an interective webpage to display the to-do list with specific requirements.",
        "start date": new Date('2021-05-17').toISOString().substring(0, 10),
        "end date": new Date('2021-05-20').toISOString().substring(0, 10),
        "status": "active"
    },
    {
        "name": "DOM",
        "description": "A mini project using the tools of DOM (Document Object Manipulation) to create interaction with JavaScript",
        "start date": new Date('2021-05-20').toISOString().substring(0, 10),
        "end date": new Date('2021-05-27').toISOString().substring(0, 10),
        "status": "active"
    },
    {
        "name": "PostgreSQL",
        "description": "A database project to work on postgresql queries on PgAdmin4 tool.",
        "start date": new Date('2021-05-19').toISOString().substring(0, 10),
        "end date": new Date('2021-05-25').toISOString().substring(0, 10),
        "status": "active"
    },
    {
        "name": "React",
        "description": "Create a project using REACT, an open-source front-end JavaScript library for building user interfaces or UI components.",
        "start date": new Date('2021-05-12').toISOString().substring(0, 10),
        "end date": new Date('2021-05-17').toISOString().substring(0, 10),
        "status": "active"
    },
]

// localStorage.clear()


function sortList() {
    return todoList.sort((a, b) => new Date(a['start date']) - new Date(b['start date']))
}
sortList();

if(localStorage.length > 0) {
    
} else {
    localStorage.setItem('todolist', JSON.stringify(todoList));
}


let a = JSON.parse(localStorage.getItem('todolist'))
console.log(a)

const table = document.querySelector('.table');
const closeBtn = document.getElementById('close');
const close1Btn = document.getElementById('close1');
const close2Btn = document.getElementById('close2');
const confirmBtn = document.getElementById('confirm');
const overlay = document.querySelector('.overlay');
const delOverlay = document.querySelector('.delete-overlay');
const editOverlay = document.querySelector('.edit-overlay');
const overlayBox = document.querySelector('.overlay-box');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const description = document.getElementById('desc-p');
const title = document.querySelectorAll('.row td:first-child');


for (let i = 1; i < a.length; i++) {
    debugger;

    let icon = document.createElement('i');
    let tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

    function createElements() {

            icon.classList.add('far', 'fa-square', 'fa-2x');
            icon.style.marginRight = "10px";

            icon.addEventListener('click', () => {
                clearTimeout(timer);
                prevent = true;
                tr.classList.toggle('done')
                icon.classList.toggle('fa-square');
                icon.classList.toggle('fa-check-square');
            })


            let tdName = document.createElement('td');
            tdName.style.display = "flex";
            tdName.style.justifyContent = "left";
            tdName.style.alignItems = "center";
            tdName.appendChild(icon)
            tr.appendChild(tdName);

            let tdNameText = document.createElement('p')
            tdNameText.textContent = a[i]['name']

            tdNameText.style.textAlign = "left";
            tdName.appendChild(tdNameText)

            let tdDate = document.createElement('td')
            tdDate.style.textAlign = "left";
            tr.appendChild(tdDate)
            let tdDateText = document.createElement('p')
            tdDateText.textContent = a[i]["start date"]
            tdDate.appendChild(tdDateText)

            let daysRemaining = document.createElement('td');
            daysRemaining.style.textAlign = "left";
            tr.appendChild(daysRemaining)


            function getNumberOfDays(start, end) {
                const date1 = new Date(start)
                const date2 = new Date(end);
            
                // One day in milliseconds
                const oneDay = 1000 * 60 * 60 * 24;
            
                // Calculating the time difference between two dates
                const diffInTime = date2.getTime() - date1.getTime();
            
                // Calculating the no. of days between two dates
                const diffInDays = Math.ceil(diffInTime / oneDay);
            
                return diffInDays;
            }
            
            let days = getNumberOfDays(new Date(), a[i]['end date'])
            let daysText = daysRemaining.textContent = days;


            let editNode = document.createElement('td');
            editNode.style.textAlign = "center";
            tr.appendChild(editNode);
            let editIcon = document.createElement('i');

            editIcon.classList.add('far', 'fa-edit');
            editNode.appendChild(editIcon)

            editIcon.addEventListener('click', () => {
                clearTimeout(timer);

                prevent = true;
                editOverlay.classList.remove('hidden')

                let inpName = document.getElementById('inpName');
                let inpStartDate = document.getElementById('inpStartDate');
                let inpEndDate = document.getElementById('inpEndDate');
                let inpDescription = document.getElementById('inpDescription');;

                let saveBtn = document.getElementById('save');
                let error = document.querySelector('.error-header');
                

                saveBtn.addEventListener('click', () => {

                    if (inpName.value == '' || inpName.value == null || inpStartDate.value == '' || inpStartDate.value == null || inpEndDate.value == ''
                    || inpEndDate.value == null || inpDescription.value == '' || inpDescription.value == null) {
                        
                        error.classList.remove('hidden')
                        let closeError = document.getElementById('close-error');
                        closeError.addEventListener('click', () => {
                            error.classList.add('hidden')
                        })

                        setTimeout(function() {
                            error.style.opacity = 0;
                        }, 4000) 

                            error.style.opacity = 1;

                    } else {    
                        error.classList.add('hidden')
                        editOverlay.classList.add('hidden')

                        a[i]['name'] = inpName.value;
                        tdNameText.textContent = a[i]['name']

                        a[i]["start date"] = inpStartDate.value
                        tdDateText.textContent = a[i]["start date"];

                        a[i]["end date"] = inpEndDate.value
                        
                        a[i]['description'] = inpDescription.value

                        days = getNumberOfDays(new Date(), a[i]['end date'])
                        daysText = daysRemaining.textContent = days;
                    
                        sortList();

                        if (localStorage.length > 0) {
                            localStorage.clear();
                            localStorage.setItem('todolist', JSON.stringify(a))
                            console.log(localStorage)
                        }
                    }
                   
                })

            })

            let delNode = document.createElement('td');
            delNode.style.textAlign = "center";
            tr.appendChild(delNode);


            let delIcon = document.createElement('i');
            delIcon.classList.add('far', 'fa-trash-alt');
            delNode.appendChild(delIcon)

            delIcon.addEventListener('click', () => {
                clearTimeout(timer);
                prevent = true;
                delOverlay.classList.remove('hidden')

                confirmBtn.addEventListener('click', () => {

                    a.splice(i, 1)
                    console.log(a)

                    tr.remove();
                    delOverlay.classList.add('hidden')

                    console.log(localStorage)

                    if (localStorage.length > 0) {
                        localStorage.clear();
                        localStorage.setItem('todolist', JSON.stringify(a))
                        sortList();
                        console.log(localStorage)
                    }
                })
            })

            if(days < 0) {
                tr.classList.add('over');
            }
    }
    createElements();

    let timer = 0;
    let prevent = false;

    tr.addEventListener('click', () => {

        timer = setTimeout(() => {
            if(!prevent) {
                overlay.classList.remove('hidden')
                h3.textContent = todoList[i]["name"];
                description.textContent = todoList[i]["description"];
            }
            prevent = false;
        }, 300)

    })


    tr.addEventListener('dblclick', () => {
        clearTimeout(timer);
        prevent = true;
        tr.classList.toggle('done')
        icon.classList.toggle('fa-square');
        icon.classList.toggle('fa-check-square');
    })
}


closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden')
})
close1Btn.addEventListener('click', () => {
    delOverlay.classList.add('hidden')
})
close2Btn.addEventListener('click', () => {
    editOverlay.classList.add('hidden')
})