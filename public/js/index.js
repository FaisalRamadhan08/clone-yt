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


// Sidebar Toogle

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


document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger');
    const sidebar = document.getElementById('logo-sidebar');
    const sidebarTexts = document.querySelectorAll('.sidebar-text');
    const content = document.getElementById('content');
    const kategori = document.getElementById('kategori');

    let isSidebarOpen = true;

    hamburgerBtn.addEventListener('click', function() {
        isSidebarOpen = !isSidebarOpen;

        if (isSidebarOpen) {
            // Sidebar terbuka
            sidebar.classList.remove('w-16', 'sm:w-16', 'md:w-16', 'lg:w-16', 'xl:w-16');
            sidebar.classList.add('w-[216px]', 'sm:w-[216px]', 'md:w-[216px]', 'lg:w-[216px]', 'xl:w-[216px]');
            sidebarTexts.forEach(span => {
                span.classList.remove('hidden');
                span.classList.add('block');
            });
            content.classList.remove('ml-24', 'sm:ml-24', 'md:ml-24', 'lg:ml-24', 'xl:ml-24');
            content.classList.add('ml-56', 'sm:ml-56', 'md:ml-56', 'lg:ml-56', 'xl:ml-56');
            kategori.classList.remove('ml-20', 'sm:ml-20', 'md:ml-20', 'lg:ml-20', 'xl:ml-20');
            kategori.classList.add('ml-56', 'sm:ml-56', 'md:ml-56', 'lg:ml-56', 'xl:ml-56');
        } else {
            // Sidebar tertutup
            sidebar.classList.remove('w-[216px]', 'sm:w-[216px]', 'md:w-[216px]', 'lg:w-[216px]', 'xl:w-[216px]');
            sidebar.classList.add('w-16', 'sm:w-16', 'md:w-16', 'lg:w-16', 'xl:w-16');
            sidebarTexts.forEach(span => {
                span.classList.remove('block');
                span.classList.add('hidden');
            });
            content.classList.remove('ml-56', 'sm:ml-56', 'md:ml-56', 'lg:ml-56', 'xl:ml-56');
            content.classList.add('ml-24', 'sm:ml-24', 'md:ml-24', 'lg:ml-24', 'xl:ml-24');
            kategori.classList.remove('ml-56', 'sm:ml-56', 'md:ml-56', 'lg:ml-56', 'xl:ml-56');
            kategori.classList.add('ml-20', 'sm:ml-20', 'md:ml-20', 'lg:ml-20', 'xl:ml-20');

        }
    });

    // Opsional: Untuk menangani tampilan awal berdasarkan ukuran layar
    function checkSidebarState() {
        if (window.innerWidth < 768) { // Contoh breakpoint MD
            // Secara default, sembunyikan sidebar atau atur sebagai ikon saja di layar kecil
            sidebar.classList.add('-translate-x-full'); // Sembunyikan sepenuhnya
            content.classList.remove('ml-56', 'sm:ml-56', 'md:ml-56', 'lg:ml-56', 'xl:ml-56');
            content.classList.add('ml-0'); // Tidak ada margin saat sidebar tersembunyi
            kategori.classList.remove('ml-56', 'sm:ml-56', 'md:ml-56', 'lg:ml-56', 'xl:ml-56');
            kategori.classList.add('ml-0');
            isSidebarOpen = false;
        } else {
            // Tampilkan sidebar penuh di layar besar
            sidebar.classList.remove('-translate-x-full', 'w-16', 'sm:w-16', 'md:w-16', 'lg:w-16', 'xl:w-16');
            sidebar.classList.add('w-[216px]', 'sm:w-[216px]', 'md:w-[216px]', 'lg:w-[216px]', 'xl:w-[216px]');
            sidebarTexts.forEach(span => {
                span.classList.remove('hidden');
                span.classList.add('block');
            });
            content.classList.remove('ml-0', 'ml-24', 'sm:ml-24', 'md:ml-24', 'lg:ml-24', 'xl:ml-24');
            content.classList.add('ml-64', 'sm:ml-56', 'md:ml-56', 'lg:ml-56', 'xl:ml-56');
            kategori.classList.remove('ml-0', 'ml-20', 'sm:ml-20', 'md:ml-20', 'lg:ml-20', 'xl:ml-20');
            kategori.classList.add('ml-56', 'sm:ml-56', 'md:ml-56', 'lg:ml-56', 'xl:ml-56');
            isSidebarOpen = true;
        }
    }

    //  // Panggil saat halaman dimuat dan saat ukuran jendela berubah
    checkSidebarState();
    window.addEventListener('resize', checkSidebarState);

    // // Carousel Category (tambahan dari kode Anda)
    // const categoryItems = document.getElementById('category-items');
    // const prevCategoryBtn = document.getElementById('prev-category-btn');
    // const nextCategoryBtn = document.getElementById('next-category-btn');

    // prevCategoryBtn.addEventListener('click', () => {
    //     categoryItems.scrollBy({
    //         left: -200, // Sesuaikan sesuai kebutuhan
    //         behavior: 'smooth'
    //     });
    // });

    // nextCategoryBtn.addEventListener('click', () => {
    //     categoryItems.scrollBy({
    //         left: 200, // Sesuaikan sesuai kebutuhan
    //         behavior: 'smooth'
    //     });
    // });


});