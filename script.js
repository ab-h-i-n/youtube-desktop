
window.onload = () => {
    createFilters();
    createVedioCards();


    const nextScrollFilter = document.querySelector('.nextbtn');
    const prevScrollFilter = document.querySelector('.prevbtn');
    const filterContainer = document.querySelector(".filter-container");

    nextScrollFilter.addEventListener("click",()=>{
        filterContainer.scrollLeft += 300;
        setTimeout(()=>{
            console.log("next : " + filterContainer.scrollLeft);
            if(filterContainer.scrollLeft != 0 ){
                prevScrollFilter.style.display = "grid";
            }
        },200);
    })

    prevScrollFilter.addEventListener("click",()=>{
        filterContainer.scrollLeft -= 300;
        setTimeout(()=>{
            console.log("prev");
            if(filterContainer.scrollLeft < 100){
                prevScrollFilter.style.display = "none";
            }
        },200)
    })
}

const createFilters = () => {

    const filterContainer = document.querySelector(".filter-container");
    const filters = [ 'CSS','Computer programming' , 'Mixes' , 'Editing' , 'Film criticisms' ,'Music' , 'Graphic design', 'Gamming' , 'Photography' , 'Animes' , 'Monkey D Luffy'];


   for(var i = 0 ; i<5;i++){
    filters.forEach((filter)=>{
        var divelem = document.createElement('div');

        divelem.classList.add('filter');
        divelem.innerText = filter;

        filterContainer.appendChild(divelem);
   })
   }
}


const createVedioCards = () => {

    const mainContainer = document.querySelector('.main-container');
    const vedioCards = [
        {
            channel : "LifeofShazzam",
            channelProfile : "https://yt3.ggpht.com/qpFlgBO8EGpnnos6oXKTBLdenIhn3enCfJEagi8AjovUYLt9bauTY95BZas_oqJA7mDUfqmqxac=s68-c-k-c0x00ffffff-no-rj",
            vedioImg : "https://i.ytimg.com/vi/xIxl-nG8gKY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKDCn0N2hStRUVtskRZrmuQXcfDQ",
            vedioTitle : "Aavesham | Fahad Fasil | Teaser Reaction | Malayalam",
            vedioDuration : "13:53",
            vedioViews : "358K views",
            uploadTime : "3 days ago"
        },
        {
            channel : "LifeofShazzam",
            channelProfile : "https://yt3.ggpht.com/ytc/AIf8zZQsK_jQl8pLiZCGu_mPMgIZYXWQ8LA96jodW2U=s68-c-k-c0x00ffffff-no-rj",
            vedioImg : "https://i.ytimg.com/vi/AiDHe5barSY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfpIRbFfc4Mtb4R4WNgnI8gvb_kw",
            vedioTitle : "Fighter Movie Review | തകർത്ത്‌ വാരി !! My Opinion",
            vedioDuration : "4:27",
            vedioViews : "50K views",
            uploadTime : "20 hours ago"
        },
        {
            channel : "Riddle",
            channelProfile : "https://yt3.ggpht.com/ytc/AIf8zZSYiTE2HBwHf9QnoIYzQbtrDwrELpJHnXlN9tXFNA=s68-c-k-c0x00ffffff-no-rj",
            vedioImg : "https://i.ytimg.com/vi/V-pjD4lHUbg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMkZWxOBwNCogFbuasYVDK0ainfA",
            vedioTitle : "The Most Incredible Phenomena In Space That Shocked Scientists",
            vedioDuration : "1:46:27",
            vedioViews : "21K views",
            uploadTime : "1 day ago"
        },
        {
            channel : "Mrwhoestheboss",
            channelProfile : "https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj",
            vedioImg : "https://i.ytimg.com/vi/HvoBci_GC8A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6WX1_w-Ax5Ah0gZ-oA5xbv0pJoQ",
            vedioTitle : "Samsung S24 Ultra Review-Goodbye iPhone?",
            vedioDuration : "25:07",
            vedioViews : "2.1M views",
            uploadTime : "15 hours ago"
        }
    ];


    for(var i = 0 ; i < 100 ;i++){
        vedioCards.forEach((vedioCard)=>{

            var vedioContainer = document.createElement('div');
            vedioContainer.classList.add('vedio-container');
    
            vedioContainer.innerHTML = `<div class="vedio-container">
            <div class="vedio-card">
                <img src="${vedioCard.vedioImg}">
                <div class="vedio-duration">${vedioCard.vedioDuration}</div>
            </div>
            <div class="vedio-descrirption">
                <div class="channel-profile">
                    <img src="${vedioCard.channelProfile}">
                </div>
                <div class="desc">
                    <div class="vedio-titile">${vedioCard.vedioTitle}</div>
                    <div class="channel-descrirption">
                        <div class="chanel-name">${vedioCard.channel}</div>
                        <div class="views-time">
                            <div class="views">${vedioCard.vedioViews}</div>
                            <div class="time">${vedioCard.uploadTime}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    
            mainContainer.appendChild(vedioContainer);
    
        })
    }
}
