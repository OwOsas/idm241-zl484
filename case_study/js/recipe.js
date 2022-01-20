document.getElementById("bk_btn").addEventListener("click", function(){
    console.log("Bk Hit");
    document.getElementById("detail_recipe_container").classList.add("hidden");
});

document.getElementById("detail_btn").addEventListener("click", function(){
    console.log("Bk Hit");
    document.getElementById("detail_recipe_container").classList.remove("hidden");
});