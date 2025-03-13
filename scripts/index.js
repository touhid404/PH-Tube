// Load category 
function loadCategory(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
       .then((response) => response.json())
       .then((data) => DisplayCategory(data.categories));
       
}

function DisplayCategory(categories) {
  const categoriesContainer = document.getElementById('category-container');

  for (const cat of categories) {
      const categoryBtn = document.createElement('button');
      categoryBtn.classList.add('btn', 'hover:bg-[#FF1F3D]', 'rounded-md');
      categoryBtn.innerText = cat.category;

      categoryBtn.addEventListener('click', function () {
          
          const allButtons = categoriesContainer.querySelectorAll('button');
          allButtons.forEach(btn => btn.classList.remove('bg-[#FF1F3D]'));

          categoryBtn.classList.add('bg-[#FF1F3D]');

          // Load video by category
          loadVideoByCategory(cat.category_id);
      });

      categoriesContainer.appendChild(categoryBtn);
  }
}


// Load video by category
function loadVideoByCategory(categoryId){
  
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`;
  fetch(url).then((response) => response.json())
  .then((data) => DisplayVideo(data.category));

}

// Load video

function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
       .then((response) => response.json())
       .then((data) => DisplayVideo(data.videos));
}

// video Details
function loadVideoDetails(id){
  

  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${id}`;
  fetch(url).then((response) => response.json())
 .then((data) => DisplayVideoDetails(data.video));

}

// DisplayVideo details
function DisplayVideoDetails(video){
  
  document.getElementById("videoDetails").showModal();
  const detailsContainer = document.getElementById("detailsContainer");
  detailsContainer.innerHTML =`
  <div class="card bg-base-100 image-full  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p class="text-justify">${video.description}</p>
    
  </div>
</div>
  `;

}
function DisplayVideo(videos){
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML ="";
    if(videos.length==0){
      videoContainer.innerHTML = `
      <div class="col-span-full flex justify-center items-center flex-col">
        <img src="./assets/icon.svg" alt="">
        <h2 class="text-2xl font-bold pt-3">OOPS sorry! there is no content here</h2>
      </div>
      `;
      return;
    }
    videos.forEach(video => {
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
        <button class="btn btn-outline btn-info" onclick="loadVideoDetails('${video.video_id}')"     >video details</button>
      </div>
        
        `;

        videoContainer.appendChild(videoCard);

        
        
    });


   
}
loadCategory();
// loadVideos();