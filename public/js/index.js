// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');

    }
}



const categoryItems = document.getElementById('category-items');
const prevCategoryBtn = document.getElementById('prev-category-btn');
const nextCategoryBtn = document.getElementById('next-category-btn');

// Fungsi untuk menggeser carousel
const scrollAmount = 200; // Sesuaikan jumlah piksel untuk setiap geseran

nextCategoryBtn.addEventListener('click', () => {
    categoryItems.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevCategoryBtn.addEventListener('click', () => {
    categoryItems.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

// Opsional: Sembunyikan/tampilkan tombol navigasi berdasarkan posisi scroll
const updateNavButtons = () => {
    // Jika sedang di paling kiri, sembunyikan prev
    if (categoryItems.scrollLeft === 0) {
        prevCategoryBtn.classList.add('hidden');
    } else {
        prevCategoryBtn.classList.remove('hidden');
    }

    // Jika sedang di paling kanan, sembunyikan next
    // Gunakan nilai tolerance kecil karena floating point
    const maxScrollLeft = categoryItems.scrollWidth - categoryItems.clientWidth;
    if (categoryItems.scrollLeft >= maxScrollLeft - 5) { // -5 untuk tolerance
        nextCategoryBtn.classList.add('hidden');
    } else {
        nextCategoryBtn.classList.remove('hidden');
    }
};

// Panggil saat halaman dimuat dan saat carousel di-scroll
categoryItems.addEventListener('scroll', updateNavButtons);
window.addEventListener('resize', updateNavButtons); // Untuk responsivitas
updateNavButtons(); // Panggil saat awal untuk inisialisasi status tombol


// function isScreenBelowSm() {
//   return window.innerWidth < 640;
// }

// const head_kanan = document.getElementById('head-kanan');
// if (isScreenBelowSm()) {
//     head_kanan.classList.add('w-full');
// } else {
//     head_kanan.classList.remove('w-full');
// }



document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const cancelButton = document.getElementById('btn-cancel-search');

    // Fungsi untuk memeriksa input dan menampilkan/menyembunyikan tombol
    function toggleCancelButton() {
        if (searchInput.value.length > 0) {
            cancelButton.classList.remove('hidden'); // Tampilkan tombol
        } else {
            cancelButton.classList.add('hidden'); // Sembunyikan tombol
        }
    }

    // Event listener untuk input pencarian
    searchInput.addEventListener('input', toggleCancelButton);

    // Event listener untuk tombol cancel
    cancelButton.addEventListener('click', function () {
        searchInput.value = ''; // Kosongkan input
        toggleCancelButton(); // Sembunyikan tombol
        searchInput.focus(); // Opsional: kembalikan fokus ke input
    });

    // Panggil fungsi sekali saat halaman dimuat untuk menangani kasus input sudah terisi saat refresh
    toggleCancelButton();
});