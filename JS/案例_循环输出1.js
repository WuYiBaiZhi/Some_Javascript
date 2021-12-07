/*
for (var a = 1;a <= 9;a = a + 1) {
    for (var n = 0;n < 9; n = n+1) {
        document.write ('* ')
    }
    document.write('</br>')
}
*/
/*
for (var a = 1;a <= 9;a = a + 1) {
    for (var n = 1;n <= a; n = n + 1) {
        document.write ('* ')
    }
    document.write('</br>')
}
*/
for (var a = 1;a <= 9;a = a + 1) {
    for (var n = 1;n <= a; n = n + 1) {
        document.write (n+'*'+ a+'='+n*a+' ')
    }
    document.write('</br>')
}