import React, { useEffect } from 'react';
import Navigationteste from './NavigationComponent';

const Navigation = () => {
    useEffect(() => {
        const menuItem = document.querySelectorAll('.item-menu');

        function selectLink() {
            menuItem.forEach(item =>
                item.classList.remove('ativo')
            );
            this.classList.add('ativo');
        }

        menuItem.forEach(item =>
            item.addEventListener('click', selectLink)
        );

        const btnExp = document.querySelector('#btn-exp');
        const menuSide = document.querySelector('.menu-lateral');
        const dashboardContainer = document.querySelector('.dashboard-container');

        btnExp.addEventListener('click', function() {
            menuSide.classList.toggle('expandir');
            if (menuSide.classList.contains('expandir')) {
                dashboardContainer.style.marginLeft = '260px';
            } else {
                dashboardContainer.style.marginLeft = '80px';
            }
        });

        return () => {
            menuItem.forEach(item =>
                item.removeEventListener('click', selectLink)
            );
            btnExp.removeEventListener('click', function() {
                menuSide.classList.toggle('expandir');
            });
        };
    }, []);

    return (
        <div>
            <Navigationteste />
        </div>
    );
}

export default Navigation;
