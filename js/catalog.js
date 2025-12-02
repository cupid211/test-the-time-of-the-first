export function CatalogCarousel() {
    /*Catalog ----------------------------------- */
    const projects = ['first', 'second', 'third', 'fourth']
    const catalog_items = Array.from(document.getElementsByClassName('catalog-one-item'));
    catalog_items.forEach((item, index) => {
        let numb = 0;
        const previous = item.getElementsByClassName("previous")[0];
        const mainImg = item.getElementsByClassName("catalog-one-item-main-img")[0];
        const allImages = Array.from(item.getElementsByClassName('one-item-images'));

        for (let i = 0; i < 5; i++) {
            const src = `./img/projects/${projects[index]}/${projects[index]}-${i + 1}.png`;
            const img = document.createElement("img");
            img.src = src;
            //img.addEventListener('click', BigImage(item.getElementsByClassName("catalog-one-img")[0]))
            mainImg.appendChild(img);
            if (i > 0) {
                allImages[i - 1].style.backgroundImage = `url(${src})`;
            }
        }
        const images = mainImg.children;
        const next = item.getElementsByClassName("next")[0];
        const dots = item.getElementsByClassName('dots')[0];
        for (let i = 0; i < 5; i++) {
            let dot = document.createElement('div');
            dots.appendChild(dot)
        }
        const arrayDots = Array.from(dots.children);



        ViewImage(images, numb, arrayDots);

        arrayDots.map((item, index, array) => {
            item.addEventListener("click", () => {
                ViewImage(images, index, array);
                numb = index;
            })
        })

        allImages.map((item, index) => {
            item.addEventListener('click', () => {
                numb = index + 1;
                ViewImage(images, numb, arrayDots);
            })
        })

        previous.addEventListener('click', () => {
            console.log(index, "previous");
            if (numb > 0) {
                numb--;
                ViewImage(images, numb, arrayDots);
            }
        });

        next.addEventListener('click', () => {
            console.log(index, "next");
            if (numb < 4) {
                numb++;
                ViewImage(images, numb, arrayDots);
            }
        });

    });

}

// function BigImage(item) {
//     item.classList.add('checked-item');
//     const closeImages = item.getElementsByClassName("close-images")[0];
//     closeImages.id = 'close-item';
//     closeImages.addEventListener('click', () => {
//         item.classList.remove('checked-item');
//         closeImages.id=''
//     })
// }

function ViewImage(images, numb, dots) {
    Array.from(images).map((img, index) => {
        if (numb == index) {
            dots[index].classList.add('choosen-dot')
            dots[index].classList.remove('unchoosen-dot')
            img.classList.add('img-main')
            img.classList.remove('img-prev')
            img.classList.remove('img-next')
        }
        else {
            dots[index].classList.remove('choosen-dot')
            dots[index].classList.add('unchoosen-dot')
            if (numb < index) {
                img.classList.add('img-prev')
                img.classList.remove('img-main')
                img.classList.remove('img-next')
            }
            else {
                img.classList.add('img-next')
                img.classList.remove('img-prev')
                img.classList.remove('img-main')
            }
        }
    })
}