const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

let langFilter = users.filter((user) => {
	const userList = user.languages
	return userList.length >= 3
});
// console.log(langFilter);

let mapEmail = users.map(user => {
	const newValue = `${user.email}`;
	return newValue
})
// console.log(mapEmail)

let instructorArray = [];

// let instructorString = instructorArray.join();

let totalYears = users.reduce((accumulator, user, index) => {
		accumulator.yearsOfExperience += user.yearsOfExperience;
		instructorArray.push(user.name);
		accumulator.instructorList = instructorArray.join(", ");
		if (user.email.length > accumulator.longestEmail.length) {
			accumulator.longestEmail = user.email
		}
		// instructorArray.push(name)
		for(let language of user.languages)
		if(!accumulator.languagesList.includes(language)){
			accumulator.languagesList.push(language)
		}

		return accumulator
	}, {
		yearsOfExperience: 0,
		longestEmail: "",
		instructorList: '',
		languagesList: []
	}
);

console.log(totalYears);
// console.log(instructorArray);