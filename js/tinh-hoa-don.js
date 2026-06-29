function tinhtien()
{
    const soluong = document.getElementsByClassName("soluong");
    const dongia = document.getElementsByClassName("dongia");
    const thanhtien = document.getElementsByClassName("thanhtien");

    let thanhtoan = 0;

    for (let i = 0; i < soluong.length; i++)
    {
         thanhtien[i].innerHTML = Number(soluong[i].innerHTML) * Number(dongia[i].innerHTML);
         thanhtoan+= Number(thanhtien[i].innerHTML);
    }

    document.getElementById("thanhtoan").innerHTML = thanhtoan;
}

tinhtien();