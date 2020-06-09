function getProfile(e){
    e.preventDefault();
    var username = document.getElementById("username").value;
    
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status== 200){
            var user = JSON.parse(xhr.responseText);
            console.log("Fetching..")
            
            document.getElementById("profile").innerHTML = `
                <div id="card" class="card" style="width: 18rem;">
                    <img src="${user.avatar_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.bio}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Public Repos: ${user.public_repos}</li>
                        <li class="list-group-item">Followers: ${user.followers}</li>
                        <li class="list-group-item">Following: ${user.following}</li>
                    </ul>
                    <div class="card-body">
                        <a href="${user.html_url}" class="card-link" target="_blank">Visit Profile</a>
                    </div>
                </div>
            `;}
    }
    
    xhr.open("GET", 'https://api.github.com/users/'+username,true);
        xhr.send();
}
document.getElementById("userForm").addEventListener("submit", getProfile,false);
