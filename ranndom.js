const loaduser = () => {

    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayuser(data))
}

const displayuser =  user => {

    const gender = document.getElementById('gender');
    gender.innerHTML = user.results[0].gender;
    const name = document.getElementById('name');
    name.innerHTML =user.results[0].name.title+ ' '+ user.results[0].name.first + ' '+user.results[0].name.last;

   document.getElementById('pic').src = user.results[0].picture.thumbnail;

}

loaduser();