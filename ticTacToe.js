const game = {
  turn: 1, // number value that equate to how many turns are given before it switches? ASK LEON TO CLARIFY
  icon: "x", //why was icon initialized to x?
  //x = document.getElementByID("tick").innerHTML="image"
  //o = document.getElementById("toe")
  alertWinner: function(){
    alert(this.icon + ", you have won!")//so that the player icon that is returned shows the person who won
  },
  changePlayer: function(){//same stuff that we had in ourlast function, how is this object oriented though
    if(this.turn%2==0){
      this.icon = "o"
    }else{
      this.icon = "x"
    }
    this.turn++;//is this incrementing the turns by one?
  },
  checkForWin: function(){
    const box1 = document.querySelector("#box1")
    const box2 = document.querySelector("#box2")
    const box3 = document.querySelector("#box3")
    const box4 = document.querySelector("#box4")
    const box5 = document.querySelector("#box5")
    const box6 = document.querySelector("#box6")
    const box7 = document.querySelector("#box7")
    const box8 = document.querySelector("#box8")
    const box9 = document.querySelector("#box9")
    if( box1.textContent == box2.textContent && box2.textContent == box3.textContent && box1.textContent != "" ){
      this.alertWinner()
    }else if ( box4.textContent == box5.textContent && box5.textContent == box6.textContent && box4.textContent != "" ){
      this.alertWinner()
    }else if ( box7.textContent == box8.textContent && box8.textContent == box9.textContent && box7.textContent != "" ){
      this.alertWinner()
    }else if ( box1.textContent == box5.textContent && box5.textContent == box9.textContent && box1.textContent != "" ){
      this.alertWinner()
    }else if ( box3.textContent == box5.textContent && box5.textContent == box7.textContent && box3.textContent != "" ){
      this.alertWinner()
    }else if ( box1.textContent == box4.textContent && box4.textContent == box7.textContent && box1.textContent != "" ){
      this.alertWinner()
    }else if ( box2.textContent == box5.textContent && box5.textContent == box8.textContent && box2.textContent != "" ){
      this.alertWinner()
    }else if ( box3.textContent == box6.textContent && box6.textContent == box9.textContent && box3.textContent != "" ){
      this.alertWinner()
    }
  }
}

const sections = document.querySelectorAll("section");

sections.forEach(function(el) {
    el.addEventListener("click", function() {
      if( this.textContent == ""){
         game.changePlayer();
         let iconToAppend = document.createTextNode(game.icon);
         this.appendChild(iconToAppend);
         game.checkForWin()
       }
    });
});
