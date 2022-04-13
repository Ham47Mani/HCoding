const skills      = document.querySelector(".skills")
      progressBar = document.querySelectorAll(".progress-bar"),
      statDiv     = document.querySelector(".statistics"),
      counterTag  = document.querySelectorAll(".statistics .h3");

//========================== Init the scrollOut library ==========================
ScrollOut({
  targets: ".skills, .statistics",
});
// Add scroll event to window
window.addEventListener("scroll", _ => {
  // Skills counter & progress bar
  if (skills.dataset.scroll == "in") {
    progressBar.forEach(el => {
      let value       = el.getAttribute("aria-valuenow"),
      counteSpan  = el.parentElement.parentElement.querySelector(".progress-value span"),
      timer       = setInterval(_ => {
        if (Number(counteSpan.textContent) < value)
        counteSpan.textContent = Number(counteSpan.textContent) + 1;
            else
            clearInterval(timer);
          }, 100);
          
      el.style.width = value + "%";
    });
  } else {
    progressBar.forEach(el => {
      el.style.width = 0;
      el.parentElement.parentElement.querySelector(".progress-value span").textContent = 0;
    });
  }
  
  //========================== setup counter ==========================
  if (statDiv.dataset.scroll == "in") {
    counterTag.forEach((el) => {
      let time = setInterval(_ => {
        if (Number(el.innerText) < el.dataset.counter)
        el.innerText = Number(el.innerText) + 1
        else
        clearInterval(time);
      }, 100)
    })
  } else {
    counterTag.forEach(el => {
      el.innerText = 0;
    })
  }
})

//========================== Filter Item ==========================
//- Get element from dom tree
let filterListItems   = document.querySelectorAll(".list-group li"),
filterItems       = document.querySelectorAll(".filter-items a");

filterListItems.forEach(item => {
  item.addEventListener("click", _ => {
    //- Add click active to click item & remove from other
    document.querySelector(".list-group li.active").classList.remove("active");
    item.classList.add("active");
    
    //- Show item & hide other
    let filterName = (item.dataset.filter == "all") ? "col-md-6" : item.dataset.filter;
    filterItems.forEach(el => {
      if (el.classList.contains(filterName)) {
        el.classList.remove("hidden");
        el.classList.add("active");
      } else {
        el.classList.remove("active");
        el.classList.add("hidden");
      }
    })
  })
})
//- Active LightGallery plugin
lightGallery(document.getElementById('portfoliosGallery'), {});

//========================== Form Validation ==========================
const form = document.querySelector(".needs-validation");

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault()
    form.classList.add('was-validated');
  }
})

//========================== Init the AOS animation library ==========================
AOS.init();