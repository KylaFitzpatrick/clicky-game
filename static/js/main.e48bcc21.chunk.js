(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Kittens","image":"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?h=350&cs=srgb&dl=kitten-cat-rush-lucky-cat-45170.jpg&fm=jpg"},{"id":2,"name":"Elephants","image":"https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"},{"id":3,"name":"Parrots","image":"https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=160&w=300"},{"id":4,"name":"Giraffes","image":"https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&dpr=2&h=210&w=210"},{"id":5,"name":"Rabbits","image":"https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"},{"id":6,"name":"Koala","image":"https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=220&w=300"},{"id":7,"name":"Tiger","image":"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=160&w=160"},{"id":8,"name":"Fish","image":"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"},{"id":9,"name":"Puppies","image":"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=180"},{"id":10,"name":"Penguin","image":"https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"},{"id":11,"name":"Jelly Fish","image":"https://images.pexels.com/photos/982230/pexels-photo-982230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"},{"id":12,"name":"Dolphin","image":"https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"}]')},,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),o=a(3),n=a.n(o),c=a(4),i=a(5),l=a(7),m=a(6);a(13);var p=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleAnimalCard(e.id)}}))};a(14);var g=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};a(15);var h=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("ul",{className:"row"},r.a.createElement("li",{className:"col s4"},"Clicky Game"),r.a.createElement("li",{id:"msg",className:"col s4",style:{color:"".concat(e.textColor)}},e.msg),r.a.createElement("li",{id:"score",className:"col s4"},"Score: ",e.score," Top Score: ",e.topScore)))))};a(16);var u=function(e){return r.a.createElement("div",{class:"parallax-container"},r.a.createElement("h1",null,"Clicky Game"),r.a.createElement("h2",null,"Click an image to test your memory and earn points!"),r.a.createElement("div",{class:"parallax"},r.a.createElement("img",{alt:e.name,src:"https://images.pexels.com/photos/2521619/pexels-photo-2521619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1010"})))};a(17);var d=function(e){return r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"container"},"\xa9 2020 Copyright Clicky Game")))},f=a(1),y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={score:10,topScore:0,msg:"Click an image!",animals:f,chosenAnimalIds:[],textColor:"rgb(12, 201, 243)"},e.shuffleAnimalCard=function(t){var a=e.state.chosenAnimalIds;if(a.includes(t))e.setState({chosenAnimalIds:[],score:0,msg:"Incorrect!",textColor:"red"});else{a.push(t);var s=e.state.topScore,r=e.state.score;if(a.includes(t)&&s===r&&e.setState({topScore:s+1,score:r+1}),12===r)return e.setState({msg:"You win!",chosenAnimalIds:[],textColor:"yellow"}),void console.log("Winner");var o=f.sort((function(e,t){return Math.random()-.5}));e.setState({animals:o,chosenAnimalIds:a,score:r+1,msg:"Correct!",textColor:"green"})}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h,{score:this.state.score,topScore:this.state.topScore,msg:this.state.msg,textColor:this.state.textColor}),r.a.createElement(u,null),r.a.createElement(g,null,this.state.animals.map((function(t){return r.a.createElement(p,{shuffleAnimalCard:e.shuffleAnimalCard,id:t.id,key:t.id,image:t.image,alt:t.name})}))),r.a.createElement(d,null))}}]),a}(s.Component);a(18);n.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e48bcc21.chunk.js.map