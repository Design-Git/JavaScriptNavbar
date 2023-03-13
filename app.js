var subMenu = document.querySelector('.col_container');
var menuLink = document.querySelector('.link1');
var humburgerMenu = document.querySelector('.navbar_humburger');
var closeMenu = document.querySelector('.close_menu');

        menuLink.addEventListener('mouseover', ()=> {
                if(subMenu.classList.contains('hidden')) {
                        subMenu.classList.remove('hidden')
                        subMenu.classList.add('active')
                }
        });
        menuLink.addEventListener('mouseout', ()=> {
                if(subMenu.classList.contains('active')) {
                        subMenu.classList.add('hidden')
                        subMenu.classList.remove('active')
                }
        });

        humburgerMenu.addEventListener('click', ()=> {
                if(subMenu.classList.contains('hidden')) {
                        subMenu.classList.remove('hidden')
                        subMenu.classList.add('active')
                }
        })
        closeMenu.addEventListener('click', ()=> {
                if(subMenu.classList.contains('active')) {
                        subMenu.classList.add('hidden');
                        subMenu.classList.remove('active')
                }
        })

        
