const game = {
  turn: 1,
  icon: "x", 

  winuser: "",
  user1: "",
  user2: "",

  alertWinner: function(){
    alert(this.winuser + ", you have won!")
  },
  changePlayer: function(){
    if(this.turn%2==0){
      this.icon = "o";
      this.winuser = this.user2;
    }else{
      this.icon = "x"
      this.winuser = this.user1;
    }
    this.turn++ ;
  },
  createPlayers: function(){
    this.userOne = prompt("Enter First Player Name");
    this.userTwo = prompt("Enter Second Player Name");
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
game.createPlayers();
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
