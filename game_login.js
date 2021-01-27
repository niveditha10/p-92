function addUser(){
    player_1name=document.getElementById("login_input_1").value;
    player_2name=document.getElementById("login_input_2").value;


    localStorage.setItem("player_1name",player_1name);

    localStorage.setItem("player_2name",player_2name);

    window.location.replace("game_play.html");
}