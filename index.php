<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- arquivos style -->
  <link href="./css/style.css" rel="stylesheet">
  <link href="./css/darkMode.css" rel="stylesheet">

  <title>Calendario</title>
</head>
<!-- input idUser and idSchedules -->
    <input type="hidden" id="idUser" name="idUser" value="1">
<!-- --------------- -->
  <!-- dark mode -->
  
  <div class="toggle">
    <input id="switch" type="checkbox" name="theme">
    <label for="switch">Toggle</label>
  </div>

<!-- -------- -->

<body>
  <div id="container">
      <div id="header">
        <div id="monthDisplay"></div>

        <div>
          <button id="backButton">Voltar</button>
          <button id="nextButton">Próximo</button>
        </div>
          
      </div>

      <div id="weekdays">
        <div>Domingo</div>
        <div>Segunda-feira</div>
        <div>Terça-feira</div>
        <div>Quarta-feira</div>
        <div>Quinta-feira</div>
        <div>Sexta-feira</div>
        <div>Sábado</div>
      </div>


      <!-- div dinamic -->
      <div id="calendar" ></div>

   
  </div>

  <div id="newEventModal">
    <h2>New Evente</h2>

    <input id="eventTitleInput" name="title" placeholder="Event Title" keyboardType="text" maxLength="10"/>
    <input id="eventDescriptionInput" name="description" placeholder="Event Description"/>


    <button id="saveButton"> Salvar</button>
    <button id="cancelButton">Cancelar</button>
  </div>

  <div id="deleteEventModal">
    <h2>Evento</h2>
    <input type="hidden" id="idSchedule" name="idSchedule" value="">

    <div id="eventText"></div><br>
    <div id="divDescription"><p id="eventDescription"></p></div><br>



    <button id="deleteButton">Deletar</button>
    <button id="closeButton">Fechar</button>
  </div>

  <div id="modalBackDrop"></div>

<script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
<script src="scripts/darkMode.js"></script> 
  <script src="./scripts/main.js"></script>
  
</body>
</html>
