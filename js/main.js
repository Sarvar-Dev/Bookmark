const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabsPanel = document.querySelectorAll('.tabpanels__item'); 

const elsAccordingOpenToggler = document.querySelectorAll(".accordion__item-toggler");
const elsAccordionItem = document.querySelectorAll(".accordion__item");

function closeAccordionItems(){
    elsAccordionItem.forEach(function(elAccordionItem){
        elAccordionItem.classList.remove('accordion__item--open')
    })
}

function deactivateTabItems(){
    elsTabsItem.forEach(function(elTabsItem){
        elTabsItem.classList.remove('tabs__item--active');
    });    
}
function deactivateTabPanels(){
    elsTabsPanel.forEach(function(elTabsPanel){
        elTabsPanel.classList.remove('tabpanels__item--active');
    });     
}   

elsTabLink.forEach(function(elTabLink){
    elTabLink.addEventListener('click',function(evt){
        // Prevent Page move
        evt.preventDefault();

        // Remove active class from tabs__item elements
        deactivateTabItems();


        // Add active class to current tabs__item
        elTabLink.parentElement.classList.add('tabs__item--active');


        // Remove active class from tabs__panel elements
        deactivateTabPanels();
        // Show active tab Panels
        // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
        elTargetPanel.classList.add('tabpanels__item--active');
    });
});

elsAccordingOpenToggler.forEach(function(elAccordingOpenToggler){
    elAccordingOpenToggler.addEventListener('click',function(){
        closeAccordionItems();
        // According open
        elAccordingOpenToggler.closest(".accordion__item").classList.toggle('accordion__item--open');
    })
})