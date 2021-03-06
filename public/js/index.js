$(document ).ready(function() {
    console.log( "ready!" );

// global button targetting
const loginBtn = $("#loginButton");
const mainInventoryBtn = $("#finished-item")

// local storage access
// let safeUser = localStorage.getItem("safeUser");
// let passkey = localStorage.getItem("passKey")

// Global Functions

  // LOGIN USER

  // function loginUser(stringifiedLoginUser) {
  //   $.ajax({
  //     url: `/api/auth`,
  //     method: "POST",
  //     data: {
  //       email: $("#loginEmail").val().trim(),
  //       password: $("#loginPassword").val().trim()
  //     }, 
  //   }).then((response)=>{
  //     console.log(response);
  //     let passKey = response.token
  //     localStorage.setItem("passKey", passKey);
  //     $.ajax({
  //       url:`/newItem`,
  //       method: "GET",
  //       headers: {
  //         "x-auth-token": passkey
  //       }
  //     }).then((response)=>{
  //       window.location.replace("/newItem")
  //     })
  //     // safeUser = response.id
  //     // localStorage.setItem("safeUser", safeUser);
  //   })
  // }
  // loginBtn.on("click", function (event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   const loginUserInfo = {
  //     email: $("#loginEmail").val().trim(),
  //     password: $("#loginPassword").val().trim(),
  //   };
  //   let stringifiedLoginUser = JSON.stringify(loginUserInfo);
  //   loginUser();
  // })
  // newUserBtn.on("click", function (event) {
  //   event.preventDefault();
  //   const newUserInfo = {
  //     account_name: $("#account-name").val().trim(),
  //     email: $("#email").val().trim(),
  //     name: $("#name").val().trim(),
  //     password: $("#password").val().trim(),
  //   };
  //   let stringifiedUser = JSON.stringify(newUserInfo);
  //   newUserCreate(stringifiedUser);
  // })


  // TAKE NEW USER TO ITEM CREATE PAGE
  // newUserItemBtn.on("click", (event)=>{
  //   event.preventDefault();
  //   newUserItemPage();
  // })

  // function newUserItemPage(){
  //   $.ajax({
  //     url:`/newItem`,
  //     method: "GET",
  //     headers: {
  //       "x-auth-token": passkey
  //     }
  //   }).then((response)=>{
  //     window.location.replace("/newItem")
  //   })
  // }

  // ADDING ITEM TO MASTER INVENTORY 
  function newItemCreate(stringifiedItem){
    postedItem = $.ajax({
      url: "/api/addToMaster",
      method: "POST",
      headers:{
        "x-auth-token": passkey
      },
      data: {
        unit_name: $("#name-of-item").val().trim(),
        unit_category: $("#category").val().trim(),
        unit_distributor: $("#distributor").val().trim(),
        unit_price: $("#unit-price").val().trim(),
        unit_par: $("#unit-par").val().trim(),
        items_per_unit: $("#items-per-unit").val().trim(),
        item_count_type: $("#item-count-type").val().trim(),
        item_count_par: $("#item-count-par").val().trim(),
      },
    }).then((response) => {
      window.location.reload();
    }).catch((err) => {
      console.log(err)
    })
    return postedItem
  }

  // async function getInventoryId(safeUser) {
  //   console.log("did getInventoryId happen?")
  //   console.log(safeUser)
  //   try {
  //     const inventory = await $.ajax({
  //       url: `/user/${safeUser}/inventory/?date=0001-01-01`,
  //       method: "GET"
  //     })
  //     console.log(inventory)
  //     return inventory
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

// CLICK EVENTS

// I'm HERE ====================================
  loginBtn.on("click",(event)=>{
    event.preventDefault();
    // const userToLoginInfo = {
    //   email: $("#loginEmail").val().trim(),
    //   password: $("#loginPassword").val().trim()
    // }
    // let stringifiedUserToLogin = JSON.stringify(userToLoginInfo);
    // loginUser(stringifiedUserToLogin);
    loginUser();
  })




  $("#updateButton").on("click", function (event) {
    event.preventDefault();
    var updateForm = {
      Unit_Distributor: $("#distributor").val().trim(),
      Unit_Par: $("#unit-par").val().trim(),
      Unit_Price: $("#unit-price").val().trim(),
      Items_Per_Unit: $("#items-per-unit").val().trim(),
      Item_count_type: $("#item-count-type").val().trim(),
      Item_par: $("#item-par").val().trim(),
      Unit_Count: $("#unit-count").val().trim(),
      Item_count: $("#item-count").val().trim(),
      Total_Value: $("#total-value").val().trim(),
      Inventory_id: $("#inventory-id").val().trim(),

    };

    console.log(updateForm);

  })

  // $("#finalizeButton").on("click", function (event) {
  //   event.preventDefault();

  //   var Finalize = {
  //     Finalize: $("#finalizeButton")
  //   };

  //   console.log(Finalize);

  // })





})

//      ${id of the button}.on("click",)
//      AJAX call >>>> accessing API for this information
//      user // inventory 1 // category // array of items
//      ${id of form//holder div}   
//      dynamically generate button items
//      each of those button items also has an id

// $("#loginButton").on("click", function(event) {
//     event.preventDefault();

//     // Make a newChirp object
//     var login = {
//       login: $("#loginButton").val().trim(),
//     };

//     console.log(login);})

//     $("#userButton").on("click", function(event) {
//         event.preventDefault();

//         // Make a newChirp object
//         var user = {
//           user: $("#userButton").val().trim(),
//         };

//         console.log(user);})
