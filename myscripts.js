var accounts = [];

//test accounts
var account1 = {
	username : 'NehaErukulla',
	password : 'password'
}
accounts.push(account1);
var account2 = {
	username : 'JordanTrach',
	password : 'password'
}
accounts.push(account2);
var account3 = {
	username : 'JohnSmith',
	password : 'password'
}
accounts.push(account3);

//signup for new account
function newAccount() {
	var inputUsername = document.getElementById('newUsername').value;
	var inputPassword = document.getElementById('newPassword').value;

	var length = accounts.length;

	var existingAccount = accounts.filter(obj => {
		return obj.username == inputUsername;
	})

	if (existingAccount == undefined) {
		accounts[length] = {
			username : inputUsername,
			password : inputPassword,
		}
	} else {
		alert('This account already exists.')
	}

	//run function to show login page
}

//login to website
function loginAccount() {
	var inputAccount = document.getElementById('username').value;
	var inputPassword = document.getElementById('password').value;
	//var inputAccount = 'NehaErukulla';

	currentAccount = accounts.filter(obj => {
		return obj.username == inputAccount;
	})

	console.log(currentAccount);

	alert(currentAccount[0].password);

	if (currentAccount[0].password == inputPassword) {
		//run function to go to homescreen
		alert('This works!')
	} else {
		alert('Password is incorrect.');
	}
}

//logout of website
function logout() {
	currentAccount = ""
	//run function to show login page
}