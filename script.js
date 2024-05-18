//  kita bisa menggunakan variabel bernama searchButton agar mudah diingitat
//  yang queri selectornya mengarah kepada elemen dengan class inputKeyword
const searchButton = document.querySelector('#button-addon2');
//  membuat variabel dengan nama inputKeyword yang query selectornya mengarah
//  ke elemen dengan id button-addon2

//  kita akan memasang evenListener terhadap variabel input keyword
//  yang mengarah ke elemen dengan ID button-addon2
const inputKeyword = document.querySelector('.input-keyword');
document.body.style.backgroundImage = 'url(img/langit.jpeg)'
searchButton.addEventListener('click', function() {

    //  disini memasukkan url cuaca yang akan di gunakan untuk mencari
    //  dengan memasukkan url yang sudah ada, dan dapat diakses publik
    //  yaitu milik open weathe map 
    //  https://api.openweathermap.org/data/2.5/weather?q="+nama kota atau negara+"&appid={api id}
    //  contoh API : https://api.openweathermap.org/data/2.5/weather?q=ungaran&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        //  setelah kita mendapatkan datanya kita ubah bentuk datanya dengan
        //  method dan mengubah dalam bentuk json
        //  buatlah dulu parameter response lalu diubah menjadi json
        .then(response => response.json())
        //  kemudian promise dalam bentuk json itu kita akan tampilkan dalam bentuk web
        .then(response => {

            // kita juga perlu melakukan seleksi dahulu terhadap elemen tersebut
            // kita buat variabel result yang document.querySelectornya mengarah
            // ke elemen dengan class result
            let result = document.querySelector('.result')

            // dengan class result maka kita dapat memodifikasi innerHTML
            // disini kita bebas membuat tampilan seperti apa
            // sesuai dengan yang kita mau, yang terpenting adalah
            // kita tahu bagaimana cara memanggil datanya
            result.innerHTML = `<h2 style="margin-bottom: 15px; color: white;">Kota ${response.name}, Negara ${response.sys.country}</h2>
                                <h5><span class="temp">${response.main.temp} °С</span> <span class="temp">${response.weather[0].description}</span></h5>
                                <p style="margin-bottom: 17px;color: white;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                                <h5 style="margin-bottom: 17px; color: white;" class="kata">Clouds : ${response.clouds.all}%</h5>` 
        })
    // disini variabel untuk merset nama kota atau negara yang di input
    // agar tidak dihapus manual
    inputKeyword.value = null;

})