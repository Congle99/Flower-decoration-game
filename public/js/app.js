let flowersList = document.querySelectorAll(".btn-f");
let plateList = document.querySelectorAll(".pot");
let price = document.querySelector("#cash");
let img_src_id;
let value_flower;
let flowerSelected;
let $flower;

//Chọn hoa với các giá tiền khác nhau
for (let i = 0; i < flowersList.length; i++) {
    const element = flowersList[i];

    element.onclick = function () {
        //Cách 1:
        // for (let j = 0; j < flowersList.length; j++) {
        //     const x = flowersList[j];
        //     x.classList.remove("selected");
        // }
        // element.classList.toggle("selected");


        //Cách 2:
        if (flowerSelected != null) {
            flowerSelected.classList.remove("selected");
        }
        flowerSelected = element;

        element.classList.toggle("selected");
        $flower = element;

        //gán img_src_id là phần tử id
        img_src_id = element.getAttribute("id");
        //Gán value_flower bằng giá trị của thẻ <div id="f#" class="btn-f"> ### </div>
        //phải ép kiểu giá trị về Int để tính toán cho if(price.innerHTML < value_flower)
        value_flower = parseInt(element.innerHTML);
    }
}

// Chọn vị trí chậu
for (let i = 0; i < plateList.length; i++) {
    const element = plateList[i];

    element.onclick = function () {

        //This để lấy 1 phần tử, document sẽ lấy hết 6 phần tử flower
        let flower = this.querySelector(".flower");

        //Xét giá trị nếu img_src_id đã được gán hay chưa
        if (img_src_id == null) {
            alert("Bạn hãy chọn 1 chậu hoa ");
        }

        //xét giá trị src của <img src="" class="flower"> có rồng không
        //Nếu không rỗng thì tức là chậu đã được trồng
        else if (flower.getAttribute("src") != "") {
            alert("Bạn không thể đặt hoa ở đây ");
        } else {

            //Xét điều kiện ví có đủ tiền mua hoa không 
            if (price.innerHTML < value_flower) {
                alert("Bạn không đủ tiền mua hoa !");
            }

            //Nếu đủ thì gán giá trị src của hoa và trừ giá tiền
            flower.src = "public/images/" + img_src_id + ".png";
            price.innerHTML -= value_flower;
        }
    }
}

