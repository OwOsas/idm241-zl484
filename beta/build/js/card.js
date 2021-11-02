document.querySelectorAll('.card').forEach(item => {
    item.addEventListener('mouseover', event => {
        var card_children = item.children;
        for (var i=0; i< card_children.length; i++){
            if(card_children[i].classList.contains("card_bk")){
                card_children[i].classList.add("card_bk_hover");
            }
        }
    })
    item.addEventListener('mouseleave', event => {
        var card_children = item.children;
        for (var i=0; i< card_children.length; i++){
            if(card_children[i].classList.contains("card_bk")){
                card_children[i].classList.remove("card_bk_hover");
            }
        }
    })

    item.addEventListener('click', event => {
        console.log(item, "clicked")
        var card_children = item.children;
        for (var i=0; i<card_children.length; i++){
            if(card_children[i].classList.contains("card_bk")){
                if(card_children[i].classList.contains("card_bk_active")){
                    card_children[i].classList.remove("card_bk_active");
                }
                else{
                    card_children[i].classList.add("card_bk_active");
                }
            }
        }
    })
  })

  document.querySelectorAll('.arrow_container').forEach(item => {
    item.addEventListener('mouseover', event => {
        console.log(item, "mouseover");
        if (item.parentElement.classList.contains("card_bk_active")){
            var parentIsActive = true;
        }
        else{
            var parentIsActive = false;
        }
        console.log(parentIsActive);

        var arrow_children = item.children;
        for (var i=0; i<arrow_children.length; i++){
            if(parentIsActive){
                if(arrow_children[i].classList.contains("arrow")){
                    arrow_children[i].classList.add("arrow_active_reverse");
                }
                if(arrow_children[i].classList.contains("arrow_2")){
                    arrow_children[i].classList.add("arrow_2_active_reverse");
                }
            }
            else{
                if(arrow_children[i].classList.contains("arrow")){
                    arrow_children[i].classList.add("arrow_active");
                }
                if(arrow_children[i].classList.contains("arrow_2")){
                    arrow_children[i].classList.add("arrow_2_active");
                }
            }
        }
    })

    item.addEventListener('mouseleave', event => {
        console.log(item, "leave");
        if (item.parentElement.classList.contains("card_bk_active")){
            var parentIsActive = true;
        }
        else{
            var parentIsActive = false;
        }
        console.log(parentIsActive);

        var arrow_children = item.children;
        for (var i=0; i<arrow_children.length; i++){
            if(arrow_children[i].classList.contains("arrow")){
                arrow_children[i].classList.remove("arrow_active_reverse");
                arrow_children[i].classList.remove("arrow_active");
            }
            if(arrow_children[i].classList.contains("arrow_2")){
                arrow_children[i].classList.remove("arrow_2_active_reverse");
                arrow_children[i].classList.remove("arrow_2_active");
            }
        }
    })
  })