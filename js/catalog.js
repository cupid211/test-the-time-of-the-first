export function CatalogCarousel() {
    const projects = ['first', 'second', 'third', 'fourth'];
    const catalogItems = Array.from(document.getElementsByClassName('catalog-one-item'));

    catalogItems.forEach((item, index) => {
        let current = 0;

        const prevBtn = item.querySelector(".previous");
        const nextBtn = item.querySelector(".next");
        const mainImg = item.querySelector(".catalog-one-item-main-img");
        const allImages = Array.from(item.querySelectorAll('.one-item-images'));
        const dotsWrap = item.querySelector('.dots');
        const slides = [];

        for (let i = 0; i < 5; i++) {
            const url = `./img/projects/${projects[index]}/${projects[index]}-${i + 1}.png`;
            const img = document.createElement('img');
            img.src = url;
            slides.push(img)
            mainImg.appendChild(img);
            if (i > 0) { allImages[i - 1].style.backgroundImage = `url(${url})`; }
        }

        const dots = [];
        for (let i = 0; i < 5; i++) {
            const dot = document.createElement('div');
            dotsWrap.appendChild(dot);
            dots.push(dot);
        }

        function update() {
            slides.forEach((img, i) => {
                img.className =
                    i === current
                        ? "img-main"
                        : i < current
                            ? "img-next"
                            : "img-prev";
            });

            dots.forEach((d, i) => {
                d.className = i === current ? "choosen-dot" : "unchoosen-dot";
            });

            if (current === 0) {
                prevBtn.style.display = "none";
            } else {
                prevBtn.style.display = "flex";
            }

            if (current === slides.length - 1) {
                nextBtn.style.display = "none";
            } else {
                nextBtn.style.display = "flex";
            }
        }

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                current = i;
                update();
            });
        });

        allImages.forEach((t, i) => {
            t.addEventListener("click", () => {
                current = i + 1;
                update();
            });
        });

        prevBtn.addEventListener("click", () => {
            if (current > 0) {
                current--;
                update();
            }
        });

        nextBtn.addEventListener("click", () => {
            if (current < slides.length - 1) {
                current++;
                update();
            }
        });

        update();
    });
}