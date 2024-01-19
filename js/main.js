const modifiers = {
    tabItemActive:'tabs__item--active',
    tabPanelActive:'tabpanels__item--active',
    tabaccordionItemOpen:'accordion__item--open'
}

const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabsPanel = document.querySelectorAll('.tabpanels__item'); 
const elsAccordingOpenToggler = document.querySelectorAll(".accordion__item-toggler");
const elsAccordionItem = document.querySelectorAll(".accordion__item");

function closeAccordionItems(){
    elsAccordionItem.forEach(function(elAccordionItem){
        elAccordionItem.classList.remove(modifiers.tabaccordionItemOpen);
    })
}

function deactivateTabItems(){
    elsTabsItem.forEach(function(elTabsItem){
        elTabsItem.classList.remove(modifiers.tabItemActive);
    });    
}
function deactivateTabPanels(){
    elsTabsPanel.forEach(function(elTabsPanel){
        elTabsPanel.classList.remove(modifiers.tabPanelActive);
    });     
}   

elsTabLink.forEach(function(elTabLink){
    elTabLink.addEventListener('click',function(evt){
        // Prevent Page move
        evt.preventDefault();

        // Remove active class from tabs__item elements
        deactivateTabItems();


        // Add active class to current tabs__item
        elTabLink.parentElement.classList.add(modifiers.tabItemActive);


        // Remove active class from tabs__panel elements
        deactivateTabPanels();
        // Show active tab Panels
        // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
        elTargetPanel.classList.add(modifiers.tabPanelActive);
    });
});

elsAccordingOpenToggler.forEach(function(elAccordingOpenToggler){
    elAccordingOpenToggler.addEventListener('click',function(){
        closeAccordionItems();
        // According open
        elAccordingOpenToggler.closest(".accordion__item").classList.toggle(modifiers.tabaccordionItemOpen);
    })
})