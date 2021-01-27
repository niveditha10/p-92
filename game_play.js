player1_name=localStorage.getItem("player_1name");
player2_name=localStorage.getItem("player_2name");

player1_score=0;
player2_score=0;

document.getElementById("player_1name").innerHTML=player1_name+" : ";
document.getElementById("player_2name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;


function send(){
    number_1=document.getElementById("number_1").value;
    number_2=document.getElementById("number_2").value;
    actual_answer=parseInt(number_1)*parseInt(number_2);
 
   question="<br><h3>"+number_1+"x"+number_2+"</h3>";
   my_input="<br>answer:<input id='input' type='text' id='input_check'>";
   button="<br><br><button class='btn btn-info' onclick='check_answer()'>check</button>";
   row=question+my_input+button;
   document.getElementById("output").innerHTML=row;
   my_empty=""; 
   document.getElementById("number_1").value=my_empty;
document.getElementById("number_2").value=my_empty;
}
question_turn="player_1";
answer_turn="player_2";

function check_answer(){

get_answer=document.getElementById("input").value;




empty="";
document.getElementById("output").innerHTML=empty;



if(get_answer == actual_answer){
    
    if(answer_turn=="player_1")
    {
        update_player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=update_player1_score;
    }
    else{
    update_player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=update_player2_score;
    }}




    if(question_turn=="player_1")
    {
    question_turn="player_2";
    document.getElementById("player_question").innerHTML="question turn-"+player2_name;
    }
    else{
    question_turn="player_1";
    document.getElementById("player_question").innerHTML="question turn-"+player1_name;
    }

    if(answer_turn=="player_1")
    {
    answer_turn="player_2";
    document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;
    }
    else{
    answer_turn="player_1";
    document.getElementById("player_answer").innerHTML="answer turn-"+player1_name;
    }
    

}

