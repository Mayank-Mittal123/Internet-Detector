// Selecting all required elements
const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
title = toast.querySelector("span"),
subTitle = toast.querySelector("p"),
wifiIcon = toast.querySelector(".icon"),
closeIcon = toast.querySelector(".close-icon");
website = document.querySelector("#website");
console.log(website);



function checkInternetConnection() {

    if (navigator.onLine) {
        toast.classList.remove("offline");
        title.innerText = "You're online now";
        subTitle.innerText = "Hurray! Internet is connected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

        closeIcon.onclick = ()=>{ //hide toast notification on close icon click
            wrapper.classList.add("hide");
            website.innerText="Hello, Welcome to the Website";
        }
        setTimeout(()=>{ //hide the toast notification automatically after 5 seconds
            wrapper.classList.add("hide");
        }, 5000);
        setTimeout(()=>{
            website.innerText="Hello, Welcome to the Website";
        }, 5000);
      
    }
     else {
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subTitle.innerText = "Opps! Internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
        closeIcon.style.display = "none";  
        website.style.display = "none"
    }

  }

  // Initial check
  checkInternetConnection();

  // Add event listener to check when the connection status changes
  window.addEventListener('online', checkInternetConnection);
  window.addEventListener('offline', checkInternetConnection);