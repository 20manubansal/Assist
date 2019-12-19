function test()
        {
         //   var userInput = document.getElementById("UserInput").value;
            //console.log(userInput);
            //document.getElementById("dis").innerText=userInput;
            let xhr = new XMLHttpRequest;
    
    xhr.addEventListener('load',function(){
        console.log(JSON.parse(this.responseText));
        let r=JSON.parse(this.responseText);
        console.log(r);
        for(var i=1;i<r.articles.length;i++)
        {
            var ans=
            [

            r.articles[i].title,
            r.articles[i].urlToImage,
            r.articles[i].content,
            r.articles[i].description,
            r.articles[i].url,
            r.articles[i].title,
            ]
            console.log(r.articles[i].title);
            li=document.createElement('p');
            li.innerHTML=`
                    <br><center>
                    <h2> `+ans[0]+`</h2>
                    <br>
                    <br>

                    <a href="`+ans[4]+`" target=”_blank” ><img src="`+ans[1]+`" width="50%" height="50%" ></a>
                    </center>

                    <br>
                    <br>Content: `+ans[2]+`
                    <br>
                    <br>Description: `+ans[3]+`
                    <br>
                    <hr>

            `;
            var list=document.getElementById('dis');
            list.insertBefore(li,list.childNodes[0]);
        }
    });
    xhr.addEventListener('error',function(){
        
    });
   // xhr.open('GET','https://api.nytimes.com/svc/books/v3/reviews.json?author='+name+'&api-key=5SumyWOUoWc7kTXYBzixUtQZ0ailCker');
   xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=ccb763ca2ba948c9a44e6c881f215337');
    xhr.send();
        }






// var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=ccb763ca2ba948c9a44e6c881f215337';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

//     