 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoI948xg7Riq4UgZhs0pHQtx-nA4FaUA0",
    authDomain: "presentathon.firebaseapp.com",
    databaseURL: "https://presentathon.firebaseio.com",
    projectId: "presentathon",
    storageBucket: "presentathon.appspot.com",
    messagingSenderId: "177884241477"
  };
  firebase.initializeApp(config);

  
  	const db = firebase.database().ref('/');
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener('click',(e) => {
	e.preventDefault();
	let x = document.getElementById('teamDetail');
	let ideaNumber = x.elements['ideaNumber'].value;
	let detail = {
		teamName: x.elements['teamName'].value,
		members:
		[
			{
				name: x.elements['mem1Name'].value,
				roll: x.elements['mem1Roll'].value,
				contact: x.elements['mem1Contact'].value
			},
			{
				name: x.elements['mem2Name'].value,
				roll: x.elements['mem2Roll'].value,
				contact: x.elements['mem2Contact'].value
			}
		]
	};
document.querySelectorAll('input[name=ideaNumber]')[ideaNumber].checked = false;
	firebase.database().ref('/' + ideaNumber).set({detail});
	window.location='redirect.html';
	//alert('Thank you');
});
	db.on('value', (snapShot) => {
		const arr = snapShot.val();
		const selectors = document.querySelectorAll('input[name=ideaNumber]');
		selectors.forEach((node, i) => {
			if(arr[i] !== false) {
				node.disabled = true;
				node.parentNode.style.display = 'none';
			}
		});
			let x = document.getElementById('teamDetail');
			let ideaNumber = x.elements['ideaNumber'].value;
			if(arr[ideaNumber] !== false && arr[ideaNumber] !== undefined) {
				console.log({id: ideaNumber, val: arr[ideaNumber]});
				alert('Sorry, the option you have chosen is no more available now');
				selectors[ideaNumber].checked = false;
			}
	});
