'use strict'

/*
 * Create a function `userAge` which take a user object and returns its age
 *
 * Créer une fonction `userAge` qui prend un object user et qui retourne son age
 *
 */

const user = {name: 'TCHETCHE Moise Zouzoua Elie', email: 'zabuza225@gmail.com', age: 25 }

 // copy the one from the previous exercice

// Your code :

function userAge (user){

	if (typeof user == "object" )
		return user.age;
	else
		return "NAN"
	
}

console.log(userAge(user))