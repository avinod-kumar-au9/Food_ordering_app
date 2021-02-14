// var listData = [
//   {
//     name: "@ Thai restaurant",
//     rating: 4.5,
//     type_of_food: "Thai",
//     address: "30 Greyhound Road Hammersmith",
//   },
//   {
//     name: "Indian.com restaurant",
//     rating: 6,
//     type_of_food: "Curry",
//     address: "9 Broughton Hall Road",
//   },
//   {
//     name: "chinese restaurant",
//     rating: 3,
//     type_of_food: "African",
//     address: "885 High Road Leytonstone",
//   },
// ];

$.getJSON("restaurant.json", function (listData) {



  var inp = document.querySelector(".w-inp");
  var sList = document.querySelector(".searchList");
  // var sListLi = document.querySelector(".searchList li")

  inp.addEventListener("keyup", function () {
    sList.innerHTML = "";
    for (var i = 0; i < listData.length; i++) {
      // console.log(listData[i].name.toLocaleLowerCase())

      if ((listData[i].name.toLocaleLowerCase()).includes(inp.value)) {
        var li = "li" + i;
        li = document.createElement("li");
        li.innerHTML = '<a href="#">' + listData[i].name + "</a>";

        sList.appendChild(li);
      }
      if (inp.value===""){
        sList.innerHTML = "";
      }
      
    }
    

  });

  sList.addEventListener("click", function (event) {
    var val = event.target;
    var val1 = val.innerHTML;
    
    sList.innerHTML = "";
    inp.value = "";

    for (var i = 0; i < listData.length; i++) {
      if (val1 === listData[i].name) {
        var detailOut = document.querySelector(".detailOutput");
        var deta1 = document.querySelector("#det1");
        var deta2 = document.querySelector("#det2");
        var deta3 = document.querySelector("#det3");
        var deta4 = document.querySelector("#det4");

        detailOut.style.opacity = "1";
        deta1.innerHTML = "Restaurant name : " + listData[i].name;
        deta2.innerHTML = "Type of Food : " + listData[i].type_of_food;
        deta3.innerHTML = "Rating : " + listData[i].rating;
        deta4.innerHTML = "Address : " + listData[i].address;
      }
      
    }
  });

});

// $.getJSON("restaurant.json", function (json) {
//   // console.log(json[0].type_of_food); // this will show the info it in firebug console
// });
