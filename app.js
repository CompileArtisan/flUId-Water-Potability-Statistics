document.getElementById('topsy').addEventListener('mouseover', function() {
    this.style.transform = 'scale(0.9)';
    document.getElementById('extra').style.display = 'flex';
    document.getElementById('extra').style.transform = 'scale(1.1) translateX(-300px) translateY(-300px)';
    document.getElementById('extra').style.position = 'relative';
    document.getElementById('extra').style.zIndex = '1';
});

document.getElementById('topsy').addEventListener('mouseout', function() {
    this.style.transform = '';
    document.getElementById('extra').style.display = 'none';
    document.getElementById('extra').style.transform = '';
    document.getElementById('extra').style.position = '';
    document.getElementById('extra').style.zIndex = '';
}); 

// document.getElementById('topsy').addEventListener('mouseover', function() {
    
//     this.style.position = 'relative';
//     this.style.zIndex = '1';
// });
