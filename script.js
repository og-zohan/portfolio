document.addEventListener("DOMContentLoaded", () => {
  const introContainer = document.getElementById("intro-container");
  const menuContainer = document.getElementById("menu-container");
  const introVideo = document.getElementById("intro-video");

  const portfolioBtn = document.getElementById("portfolio-btn");
  const aboutBtn = document.getElementById("about-btn");
  const contactBtn = document.getElementById("contact-btn");

  const aboutSection = document.getElementById("about-section");
  const contactSection = document.getElementById("contact-section");

  const inventoryItems = document.querySelectorAll(".inventory-item");
  const previewImage = document.getElementById("preview-image");
  const previewDescription = document.getElementById("preview-description");

  // Показ главного меню после завершения видео
  introVideo.addEventListener("ended", () => {
    introContainer.style.display = "none";
    menuContainer.style.display = "block";
  });

  // Скрываем все секции, кроме главного меню
  const hideSections = () => {
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
  };

  // Переключение разделов
  portfolioBtn.addEventListener("click", () => {
    hideSections();
    menuContainer.style.display = "block"; // Показываем главное меню
    portfolioBtn.classList.add("active");
    aboutBtn.classList.remove("active");
    contactBtn.classList.remove("active");
  });

  aboutBtn.addEventListener("click", () => {
    hideSections();
    aboutSection.style.display = "block"; // Показываем раздел "О мне"
    aboutBtn.classList.add("active");
    portfolioBtn.classList.remove("active");
    contactBtn.classList.remove("active");
  });

  contactBtn.addEventListener("click", () => {
    hideSections();
    contactSection.style.display = "block"; // Показываем раздел "Контакты"
    contactBtn.classList.add("active");
    portfolioBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
  });

  // Функция предварительной загрузки GIF
  const preloadGifs = (gifPaths) => {
    gifPaths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  };

  // Список GIF для предварительной загрузки
  const gifPaths = [
    'assets/item_1.gif',
    'assets/item_2.gif',
    'assets/item_3.gif',
    'assets/item_4.gif',
    'assets/item_5.gif',
    'assets/item_6.gif',
    'assets/item_7.gif',
    'assets/item_8.gif',
  ];

  // Предварительная загрузка GIF
  preloadGifs(gifPaths);

  // Открытие GIF из инвентаря
  inventoryItems.forEach((item) => {
    item.addEventListener("click", () => {
    inventoryItems.forEach((el) => el.classList.remove("selected")); // Снимаем выделение
    item.classList.add("selected"); // Добавляем выделение

    // 1) Скрываем "Обо мне" и "Контакты"
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
    
    // 2) Сбрасываем активное состояние у кнопок "Обо мне" и "Контакты"
    aboutBtn.classList.remove("active");
    contactBtn.classList.remove("active");
    // Делаем кнопку "Портфолио" активной
    portfolioBtn.classList.add("active");


    const gifSrc = item.dataset.gif; // Получаем путь к GIF
    const description = item.dataset.description; // Получаем описание

    previewImage.src = `assets/${gifSrc}`; // Устанавливаем путь к GIF
    previewDescription.textContent = description; // Устанавливаем описание
    });
  });
});
