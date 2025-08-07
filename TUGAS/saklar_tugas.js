const saklar = () => {
    let saklar1 = document.getElementById('saklar1')
    let saklar2 = document.getElementById('saklar2')
    let saklar3 = document.getElementById('saklar3')
    let saklar4 = document.getElementById('saklar4')
    let saklar5 = document.getElementById('saklar5')
    let saklar6 = document.getElementById('saklar6')
    let saklar7 = document.getElementById('saklar7')
    let saklar8 = document.getElementById('saklar8')
    let saklar9 = document.getElementById('saklar9')
    let saklar10 = document.getElementById('saklar10')
    let toggle1 = document.getElementById('toggle1')
    let toggle2 = document.getElementById('toggle2')
    let toggle3 = document.getElementById('toggle3')
    let toggle4 = document.getElementById('toggle4')
    let toggle5 = document.getElementById('toggle5')
    let toggle6 = document.getElementById('toggle6')
    let toggle7 = document.getElementById('toggle7')
    let toggle8 = document.getElementById('toggle8')
    let toggle9 = document.getElementById('toggle9')
    let toggle10 = document.getElementById('toggle10')
    // console.log(toggleKeluarga.checked)
    console.log(toggle1.checked);
    // SAKLAR 1
    if(toggle1.checked) {
        saklar1.src = "assets/images/on.gif"
    } else {
        saklar1.src = "assets/images/off.gif"
    }
     // SAKLAR 2
    if(toggle2.checked) {
        saklar2.src = "assets/images/on.gif"
    } else {
        saklar2.src = "assets/images/off.gif"
    }
     // SAKLAR 3
    if(toggle3.checked) {
        saklar3.src = "assets/images/on.gif"
    } else {
        saklar3.src = "assets/images/off.gif"
    }
     // SAKLAR 4
    if(toggle4.checked) {
        saklar4.src = "assets/images/on.gif"
    } else {
        saklar4.src = "assets/images/off.gif"
    }
     // SAKLAR 5
    if(toggle5.checked) {
        saklar5.src = "assets/images/on.gif"
    } else {
        saklar5.src = "assets/images/off.gif"
    }
     // SAKLAR 6
    if(toggle6.checked) {
        saklar6.src = "assets/images/on.gif"
    } else {
        saklar6.src = "assets/images/off.gif"
    }
     // SAKLAR 7
    if(toggle7.checked) {
        saklar7.src = "assets/images/on.gif"
    } else {
        saklar7.src = "assets/images/off.gif"
    }
     // SAKLAR 8
    if(toggle8.checked) {
        saklar8.src = "assets/images/on.gif"
    } else {
        saklar8.src = "assets/images/off.gif"
    }
     // SAKLAR 9
    if(toggle9.checked) {
        saklar9.src = "assets/images/on.gif"
    } else {
        saklar9.src = "assets/images/off.gif"
    }
     // SAKLAR 10
    if(toggle10.checked) {
        saklar10.src = "assets/images/on.gif"
    } else {
        saklar10.src = "assets/images/off.gif"
    }
}
const keluarga = () => {
    let toggleKeluarga = document.getElementById('toggleKeluarga')
        if(toggleKeluarga.checked){
        toggle1.checked = true
        saklar()
    } else {
        toggle1.checked = false
        saklar()
    }
}


