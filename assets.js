$(function(){
    $("#header").load("components/header.html")
    $("#footer").load("components/footer.html")
})
const ctx = document.getElementById('stockChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Electrical', 'Motor', 'Sensor', 'PLC'],
        datasets: [{
            label: 'Stock Amount',
            data: [120, 90, 60, 30]
        }]
    }
});
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', function(){

    let filter = searchInput.value.toLowerCase();
    let rows = document.querySelectorAll('#inventoryTable tr');

    rows.forEach(row => {

        let text = row.innerText.toLowerCase();

        if(text.includes(filter)){
            row.style.display = '';
        }else{
            row.style.display = 'none';
        }

    });

});