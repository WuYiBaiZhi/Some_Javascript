do {
    var year = prompt ('请输入您的年龄')
    if (year >= 18 & year <=120) {
        alert('您已经成年')
    }
    else if (year > 120) {
        alert ('仙人?')
    }
    else {
        alert('未成年')
    }
}while (year < 18)
