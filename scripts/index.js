// Load category 
function loadCategory(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
       .then((response) => response.json())
       .then((data) => DisplayCategory(data.categories));
       
}

function DisplayCategory(categories){
    
   
    const categoriesConatiner = document.getElementById('category-container');
    for(const cat of categories){
        const categoryBtn = document.createElement('button');
        categoryBtn.classList.add('btn','hover:bg-[#FF1F3D]','rounded-md');
        categoryBtn.innerText = cat.category;
       
       
        categoriesConatiner.appendChild(categoryBtn);
       
    }
   
}





// Load video

function loadVideos(categoryId){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
       .then((response) => response.json())
       .then((data) => DisplayVideo(data.videos));
}

function DisplayVideo(videos){
    const videoContainer = document.getElementById('video-container');
    console.log(videos);
    videos.forEach(video => {
        console.log(video);
        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
   <div class="card bg-base-100">
        <figure class="relative">
            <img class="w-full h-[150px] object-cover"
            src="${video.thumbnail}"
            alt="Video images" />
          <span class="absolute bottom-2 right-2 text-white bg-black text-sm rounded-md py-1 px-2">3hrs 56 min ago</span>
        </figure>
        <div class="flex gap-3 px-0 mt-5">
          
            <div class="avatar">
                <div class="w-9 h-9 rounded-full">
                  <img src="${video.authors[0].profile_picture}" />
                </div>
              </div>
          
          <div class="">
            <h2 class="font-semibold">Building a Winning UX Strategy Using the Kano Model</h2>
            <div class="flex gap-2">
                <p class="text-[#17171770] text-md">${video.authors[0].profile_name}</p>
                <img src="./assets/verfication.svg" alt="">
            </div>
            
            <p class="text-[#17171770] text-md">${video.others.views}</p>

          </div>
        </div>
      </div>
        
        `;

        videoContainer.appendChild(videoCard);

        
        
    });


   
}
loadCategory();
// loadVideos();