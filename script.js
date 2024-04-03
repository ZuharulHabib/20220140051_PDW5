const presidentsData = [
    { name: "Soekarno", party: "Partai Nasional Indonesia", yearsInOffice: "1945-1967", image: "soekarno1.jpg" },
    { name: "Soeharto", party: "Partai Golongan Karya", yearsInOffice: "1967-1998", image: "soeharto.jpg" },
    { name: "Bacharuddin Jusuf Habibie", party: "Independen", yearsInOffice: "1998-1999", image: "bjhabibie.jpeg" },
    { name: "Abdurrahman Wahid", party: "Partai Kebangkitan Bangsa", yearsInOffice: "1999-2001", image: "gusdur.jpg" },
    { name: "Megawati Soekarnoputri", party: "Partai Demokrasi Indonesia Perjuangan", yearsInOffice: "2001-2004", image: "megawati.jpg" },
    { name: "Susilo Bambang Yudhoyono", party: "Partai Demokrat", yearsInOffice: "2004-2014", image: "sby.jpg" },
    { name: "Joko Widodo", party: "Partai Demokrasi Indonesia Perjuangan", yearsInOffice: "2014-sekarang", image: "jokowi.jpg" },
    
];


const vicePresidentsData = [
    { name: "Mohammad Hatta", presidency: "Soekarno", image: "hatta.jpg" },
    { name: "Hamengkubuwono IX", presidency: "Soekarno", image: "hamengkubuwanajpg" },
    { name: "Sudharmono", presidency: "Soeharto", image: "Sudharmono.jpg" },
    { name: "Try Sutrisno", presidency: "Soeharto", image: "trysutrisno.jpg" },
    { name: "BJ. Habibie", presidency: "Soeharto", image: "bjhabibie.jpeg" },
    { name: "Megawati Soekarnoputri", presidency: "Abdurrahman Wahid", image: "megawati.jpg" },
    { name: "Hamzah Haz", presidency: "Abdurrahman Wahid", image: "hamzahhaz.jpg" },
    { name: "Jusuf Kalla", presidency: "Susilo Bambang Yudhoyono", image: "jusufkalla.jpg" },
    { name: "Boediono", presidency: "Susilo Bambang Yudhoyono", image: "boediono.jpg" },
    { name: "Jusuf Kalla", presidency: "Joko Widodo", image: "jusufkalla.jpg" },
    
];


function populatePresidentsTable() {
    const tableBody = document.querySelector('#presidents-table tbody');
    presidentsData.forEach((president, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="#" class="president-link" data-index="${index}">${president.name}</a></td>
            <td>${president.party}</td>
            <td>${president.yearsInOffice}</td>
        `;
        tableBody.appendChild(row);
    });
}


function populateVicePresidentsTable() {
    const tableBody = document.querySelector('#vice-presidents-table tbody');
    vicePresidentsData.forEach((vp, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="#" class="vice-president-link" data-index="${index}">${vp.name}</a></td>
            <td>${vp.presidency}</td>
        `;
        tableBody.appendChild(row);
    });
}


function showModal(imageUrl) {
    const modalImage = document.querySelector('#modal-image');
    modalImage.src = imageUrl;
    const modalContainer = document.querySelector('#modal-container');
    modalContainer.style.display = 'block';
}


function closeModal() {
    const modalContainer = document.querySelector('#modal-container');
    modalContainer.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    populatePresidentsTable();
    populateVicePresidentsTable();
});


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('president-link')) {
        const index = event.target.getAttribute('data-index');
        showModal(presidentsData[index].image);
    }
});


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('vice-president-link')) {
        const index = event.target.getAttribute('data-index');
        showModal(vicePresidentsData[index].image);
    }
});


document.getElementById('close-modal').addEventListener('click', () => {
    closeModal();
});
