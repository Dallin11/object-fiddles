//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.
 var me = {
  name : "Dallin Anderson",
  age : 21
}
// alert(me.name)


// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  //Code here




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "The Killers",
  food: "Italian",
  person: "Wife",
  book: "Ready Player One",
  movie:" Arrival",
  holiday: "Christmas",

}

  //Code here


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
 
  favoriteThings.car="mustang"//Code here
  favoriteThings.brand = "nike"
//Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.

  favoriteThings.food = "Chicken Nuggets"
  favoriteThings.book= "Harry Potter"//Code here



//NEXT PROBLEM

var backPack = {
  
}
var item = "firstPocket"

backPack.firstPocket= "chapstick"

/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */
 backPack.color = "White"
  
  
  //Code here

//After you do the above, alert your entire backPack object.

  // alert(backPack)//Code here

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  // console.log.alert(backPack)//Code here




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  var alsoMe = {
    name:"Dallin",
    age:21,
    height: "5'9",
    gender:"Male",
    married:"Yes",
    eyeColor:"blue",
    hairColor:"blonde",

    }//Code Here

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

//  for(i in alsoMe) {
//      alert(i)
//    }

   
 



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  var album = {
  candyCorn: "four",
  rockOn: "three",
  weRock:"four",
  showYouHow: "four",
  eyeOfTheTiger: "four"
  
}

//Code Here

//Now, loop through your album object alerting every song title individually.

//  for (i = 0; i > 5; i++) //Code Here




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

 var states = {
 washington:10,
 texas:12,
 cali: 20,
 oregon:13,
 ohio:17


 } //Code Here

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //  for(i in states) {
  //     alert(i > 30,000)
  //  }

   
  
  //Code Here




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  for (let key in user1){
    if(!user1[key]){ 
    delete user1[key] 
    }
    } //Code Here

  // user.forEach()

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

//   user1.splice(0,0,"Dallin")//Code Here
//  user1.splice(4,4,"danderson")



//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

 user2.name ="Tyler S. McGinnis"
 user2.email ="tyler.mcginnis@devmounta.in"
 
 //Code Here

//Now call the sayEmail method that's on the user object which will alert the users email

 //Code Here




//NEXT PROBLEM





//Create an empty object called methodCollection.
var methodCollection = {


};
  //Code Here

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function (){
  alert("hello")
},
methodCollection.logHello = function(){
  console.log("hello")

}



 methodCollection.alertHello
 methodCollection.logHello
 
 //Code Here

//Now call your alertHello and logHello methods.

 //Code Here



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

function makePerson(name,birthday,ssn){
var newObj = {}
  newObj.name = name
  newObj.birthday = birthday
  newObj.ssn = ssn

return newObj
}
  
  //Code Here



//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.
function makeCard (cardNumber,securityCode,expirationDate){
var creditCard = {}
  creditCard.cardNumber = cardNumber,
  creditCard.securityCode = securityCode,
  creditCard.expirationDate= expirationDate
  
  return creditCard
}


  //Code Here



//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

function bindCard (person,creditCard){
  bindCard.join (person,creditCard)
  var newObj = {
    person: "dallin",
    creditCard: 2349506

  }
return newObj
}

  //Code Here
