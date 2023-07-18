//API URLs, some urls have a placeholder to be replaced by the real data, such as {id}.
const allProductsUrl = 'https://fakestoreapi.com/products';
const productByIdUrl = 'https://fakestoreapi.com/products/{id}';




async function getAllProducts() 
{
    const productContainer  = document.getElementById('product-aureo');

    await fetch(allProductsUrl)
    .then(response => response.json())
    .then(data => {


        console.log(data)
        // Aqui você pode acessar os dados retornados pela API
        // e criar os elementos HTML correspondentes aos produtos
        
        
        data.forEach(product => {


            const divProduct = document.createElement('span');
            divProduct.innerHTML = `
                        
                            <div class="pb-5" style="width: 200px;">
                                <div class="product-item position-relative bg-light d-flex flex-column text-center">
                                    <img class="img-fluid mb-4" src="${product.image}" alt="">
                                    <h6 class="text-uppercase">${product.title}</h6>
                                    <h5 class="text-primary mb-0">$199.00</h5>
                                </div>
                            </div>
                        
                `;

            // Cria uma div para cada produto
            const productDiv0 = document.createElement('div');
            productDiv0.className = ' pb-5';
    

            const productDiv = document.createElement('div');
            productDiv.className = 'product-item position-relative bg-light d-flex flex-column text-center';
    
            // Cria elementos para exibir informações do produto, por exemplo, nome e preço
            const imageElement = document.createElement('img');
            imageElement.className = 'img-fluid mb-4';
            imageElement.src = `${product.image}`;
            imageElement.width = '100';
            imageElement.height = '100';
                
            const nameElement = document.createElement('h6');
            nameElement.className = 'text-uppercase';
            nameElement.textContent = `${product.title}`;

            const priceElement = document.createElement('h5');
            priceElement.className = 'text-primary mb-0';
            priceElement.textContent = `$${product.price}`;

    
            // Adiciona os elementos à div do produto
            productDiv.appendChild(imageElement);
            productDiv.appendChild(nameElement);
            productDiv.appendChild(priceElement);

            productDiv0.appendChild(productDiv)
    
            // Adiciona a div do produto ao container
            productContainer.appendChild(productDiv0);
        });
            
    })
    .catch(error => {
        // Em caso de erro na solicitação
        console.error('Ocorreu um erro:', error);
    });

    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

}





