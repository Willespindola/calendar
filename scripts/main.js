// variaveis globais

let nav = 0;
let clicked = null;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

// variavel do modal:
const newEvent = document.getElementById("newEventModal");
const deleteEventModal = document.getElementById("deleteEventModal");
const backDrop = document.getElementById("modalBackDrop");
const eventTitleInput = document.getElementById("eventTitleInput");
const eventDescriptionInput = document.getElementById("eventDescriptionInput");

// --------
const calendar = document.getElementById("calendar"); // div calendar:
const weekdays = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
]; //array with weekdays:

//funções

function openModal(date) {
  clicked = date;
  const eventDay = events.find((event) => event.date === clicked);

  if (eventDay) {
    document.getElementById("eventText").innerText = eventDay.title;
    document.getElementById("eventDescription").innerText = eventDay.description;
    deleteEventModal.style.display = "block";
  } else {
    newEvent.style.display = "block";
  }

  backDrop.style.display = "block";
}

//função load() será chamada quando a pagina carregar:

function load() {
  const date = new Date();

  //mudar titulo do mês:
  if (nav !== 0) {
    date.setMonth(new Date().getMonth() + nav);
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const daysMonth = new Date(year, month + 1, 0).getDate();
  const firstDayMonth = new Date(year, month, 1);

  const dateString = firstDayMonth.toLocaleDateString("pt-br", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const paddinDays = weekdays.indexOf(dateString.split(", ")[0]);

  //mostrar mês e ano:
  document.getElementById(
    "monthDisplay"
  ).innerText = `${date.toLocaleDateString("pt-br", {
    month: "long",
  })}, ${year}`;

  calendar.innerHTML = "";

  // criando uma div com os dias:

  for (let i = 1; i <= paddinDays + daysMonth; i++) {
    const dayS = document.createElement("div");
    dayS.classList.add("day");

    const dayString = `${month + 1}/${i - paddinDays}/${year}`;

    //condicional para criar os dias de um mês:

    if (i > paddinDays) {
      dayS.innerText = i - paddinDays;

      const eventDay = events.find((event) => event.date === dayString);

      if (i - paddinDays === day && nav === 0) {
        dayS.id = "currentDay";
      }

      if (eventDay) {
        title = eventTitleInput.value
        const eventDivT = document.createElement("div");
        eventDivT.classList.add("eventTitle");
        //eventDiv.innerText = eventDay.title;
        eventDivT.innerText = eventDay.title;
        dayS.appendChild(eventDivT);

        description = eventDescriptionInput.value
        const eventDivD = document.createElement("div");
        eventDivD.classList.add("eventDescription");
        eventDivD.innerText = eventDay.description.substring(7, 0) + '...';
        dayS.appendChild(eventDivD);
      }

      dayS.addEventListener("click", () => openModal(dayString));
    } else {
      dayS.classList.add("padding");
    }

    calendar.appendChild(dayS);
  }
}

function closeModal() {
  eventTitleInput.classList.remove("error");
  eventDescriptionInput.classList.remove("error");
  newEvent.style.display = "none";
  backDrop.style.display = "none";
  deleteEventModal.style.display = "none";

  eventTitleInput.value = "";
  eventDescriptionInput.value = "";
  clicked = null;
  load();
}
function saveEvent() {
  if (eventTitleInput.value && eventDescriptionInput.value) {
    eventTitleInput.classList.remove("error");
    eventDescriptionInput.classList.remove("error");

    events.push({
    date: clicked,
    title: eventTitleInput.value,
    description: eventDescriptionInput.value,
    })
    
    localStorage.setItem('events', JSON.stringify(events))
    //closeModal()
  } else {
    eventTitleInput.classList.add("error");
    eventTitleInput.classList.add("error");
  }
}

function deleteEvent() {
  events = events.filter((event) => event.date !== clicked);
  localStorage.setItem("events", JSON.stringify(events));
  closeModal();
}

// botões

function buttons() {
  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    load();
  });

  document
    .getElementById("saveButton")
    .addEventListener("click", () => saveEvent());

  document
    .getElementById("cancelButton")
    .addEventListener("click", () => closeModal());

  document
    .getElementById("deleteButton")
    .addEventListener("click", () => deleteEvent());

  document
    .getElementById("closeButton")
    .addEventListener("click", () => closeModal());
}
buttons();
load();

$("document").ready(function () {
  $("#saveButton").click(function () {
    scheduling();
  });
});
function scheduling() {
  var title = $("#eventTitleInput").val();
  var description = $("#eventDescriptionInput").val();

  $.ajax({
    url: "ajax/scheduleRegister.php",
    method: "POST",
    dataTipe: "html",
    data: {
      title: title,
      description: description,
    },
    success: function (result) {
      $(".loader").removeClass("on");
      closeModal();
      setTimeout(function () {}, 3000);
      console.log(result);
    },
  });
}

$('document').ready(function (){
  $("deleteButton").click(function () {
    deleteScheduling();
  });
});

function deleteScheduling(){
  var idUser = $('#idUser').val();
  var idSchedule = $('#idSchedule').val();
  
  $.ajax({
    url: "ajax/scheduleDelete.php",
    method: "GET",
    dataTipe: "html",
    data: {
      idUser: idUser, idSchedule: idSchedule,
    },
    success: function (result) {
      loseModal();
      setTimeout(function () {}, 3000);
      console.log(result);
    },
  })
}