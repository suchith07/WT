const form = document.querySelector('form');
form.addEventListener('submit', event => {
	event.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	localStorage.setItem('username', username);
	localStorage.setItem('password', password);
	alert('Username and password saved in local storage');
});

const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');

if (storedUsername && storedPassword) {
	alert(`Stored username: ${storedUsername}\nStored password: ${storedPassword}`);
}
