const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// ----------- PRINTING COURSE NAMES AS LIST ---------
const courseList = document.querySelector('#course-list');

function displayCourses(list) {
    courseList.innerHTML = "";

    list.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.subject} ${course.number}`;

        if (course.completed === true) {
            li.textContent = `${course.subject} ${course.number} ☑️`;
            li.classList.add('complete');
        }
        courseList.appendChild(li);

        // DISPLAYING COURSE CONTENT
        li.addEventListener('click', () => {
            displayCourseInfo(course);
        })
    });
}

displayCourses(courses);

// ----------- DISPLAYING THE NUMBER OF CREDITS -----------
const credits = document.querySelector('#credits');

function sumCredits(list) {
    const number = list.reduce((total, course) => {
        return total + course.credits
    }, 0);
    credits.textContent = `${number}`;
}
sumCredits(courses)


// ----------- ADDING CLICKING BUTTONS -------------
const allButton = document.querySelector('#all');
const cseButton = document.querySelector('#cse');
const wddButton = document.querySelector('#wdd');


// --------------- CLICK BUTTONS AND SHOWING ------------
allButton.addEventListener('click', () => {
    allButton.classList.toggle('show');
    displayCourses(courses);
    sumCredits(courses);
});

cseButton.addEventListener('click', () => {
    cseButton.classList.toggle('show');
    const filtered = courses.filter(course => course.subject === "CSE");
    displayCourses(filtered);

    const dif = courses.filter(course => course.subject === "CSE");
    sumCredits(dif);
});

wddButton.addEventListener('click', () => {
    wddButton.classList.toggle('show');
    const filtered = courses.filter(course => course.subject === "WDD");
    displayCourses(filtered);

    const dif = courses.filter(course => course.subject === "WDD");
    sumCredits(dif);
});

// -------------------------- DISPLAYING DIALOG COURSE INFO ------------------------------
const modal = document.querySelector('#course-details');

function displayCourseInfo(course) {
    modal.innerHTML = ''; // BORRA TODO EL INNER HTML
    modal.innerHTML = `
    <button id="close">𝗫</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Description:</strong> ${course.description}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p><strong>Technology Stack:</strong> ${course.technology}</p>
    `;

    modal.showModal();

    // CLOSING MODAL COURSE INFO
    const closeModal = document.querySelector('#close'); // SELECCIONAR DESPUES DE BORRAR (LINEA 157)

    closeModal.addEventListener('click', () => {
        modal.close();
    });
}