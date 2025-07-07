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
